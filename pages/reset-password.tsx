import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { supabase } from '@/lib/supabase'

export default function ResetPassword() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [isValidToken, setIsValidToken] = useState(false)

  useEffect(() => {
    // Handle Supabase auth session on page load
    const handleAuthSession = async () => {
      try {
        // Check if we have URL parameters that indicate a password reset
        const queryParams = new URLSearchParams(window.location.search)
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        
        const code = queryParams.get('code')
        const type = hashParams.get('type')
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')
        
        console.log('Reset password debug:', { 
          code, 
          type,
          accessToken: accessToken ? 'present' : 'null',
          refreshToken: refreshToken ? 'present' : 'null',
          search: window.location.search,
          hash: window.location.hash 
        })
        
        // Method 1: Try to get the session (works if auth flow already completed)
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (session) {
          console.log('Found existing session:', session)
          setIsValidToken(true)
          return
        }
        
        // Method 2: Handle hash-based tokens (direct token flow)
        if (type === 'recovery' && accessToken) {
          try {
            const { error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken || '',
            })
            
            if (error) {
              console.error('Session error:', error)
              setMessage({ type: 'error', text: 'Invalid or expired reset link. Please request a new password reset.' })
            } else {
              setIsValidToken(true)
              console.log('Session set from hash tokens')
            }
            return
          } catch (err) {
            console.error('Hash token session failed:', err)
          }
        }
        
        // Method 3: If we have a code but no session, the auth flow needs to complete
        if (code) {
          console.log('Found auth code, but this may require redirect flow completion')
          // For password reset, we might need to wait for Supabase to handle the auth flow
          // Set a temporary valid state and let the user try to reset
          setIsValidToken(true)
          return
        }
        
        // No valid auth state found
        setMessage({ type: 'error', text: 'Invalid or expired reset link. Please request a new password reset.' })
        console.log('No valid auth parameters found')
        
      } catch (err) {
        console.error('Auth session handling failed:', err)
        setMessage({ type: 'error', text: 'Invalid or expired reset link. Please request a new password reset.' })
      }
    }
    
    handleAuthSession()
  }, [])

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' })
      return
    }
    
    if (password.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' })
      return
    }
    
    setLoading(true)
    setMessage(null)
    
    try {
      // Check if we have a valid session before trying to update password
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      console.log('Current session when updating password:', session)
      
      if (!session) {
        // Try to handle the auth code if present
        const queryParams = new URLSearchParams(window.location.search)
        const code = queryParams.get('code')
        
        if (code) {
          console.log('No session found, but have code. Attempting to use verifyOtp...')
          
          // Try using verifyOtp for password reset flow
          const { data, error: verifyError } = await supabase.auth.verifyOtp({
            token_hash: code,
            type: 'recovery'
          })
          
          if (verifyError) {
            console.error('OTP verification error:', verifyError)
            setMessage({ type: 'error', text: 'Unable to verify reset token. Please request a new password reset.' })
            setLoading(false)
            return
          }
          
          console.log('OTP verification successful:', data)
        } else {
          setMessage({ type: 'error', text: 'No valid session found. Please request a new password reset.' })
          setLoading(false)
          return
        }
      }
      
      const { error } = await supabase.auth.updateUser({ password })
      
      if (error) throw error
      
      setMessage({ type: 'success', text: 'Password updated successfully! You can now log in with your new password.' })
      setPassword('')
      setConfirmPassword('')
      
      // Redirect to success page after 3 seconds
      setTimeout(() => {
        router.push('/reset-success')
      }, 3000)
    } catch (error: any) {
      console.error('Password reset error:', error)
      setMessage({ type: 'error', text: error.message || 'Failed to reset password' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Reset Password - AutoLens</title>
        <meta name="description" content="Reset your AutoLens password" />
      </Head>
      
      <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AutoLens
            </h1>
            
            <h2 className="text-2xl font-semibold mb-6 text-center">Reset Your Password</h2>
            
            {message && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200' 
                  : 'bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200'
              }`}>
                {message.text}
              </div>
            )}
            
            {isValidToken && !message?.type && (
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Enter new password"
                    required
                    minLength={6}
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Confirm new password"
                    required
                    minLength={6}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            )}
            
            <div className="mt-6 text-center">
              <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                Back to AutoLens
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
