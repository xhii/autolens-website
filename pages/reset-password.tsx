import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function ResetPassword() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [isValidToken, setIsValidToken] = useState(false)
  const [authParams, setAuthParams] = useState<{ code: string | null, accessToken: string | null, refreshToken: string | null, type: string | null }>({
    code: null,
    accessToken: null,
    refreshToken: null,
    type: null
  })

  useEffect(() => {
    // Check for both code-based and hash-based auth parameters
    const queryParams = new URLSearchParams(window.location.search)
    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    
    const code = queryParams.get('code')
    const accessToken = hashParams.get('access_token')
    const refreshToken = hashParams.get('refresh_token')
    const type = hashParams.get('type')
    
    console.log('Reset password debug:', { 
      code: code ? 'present' : 'null',
      accessToken: accessToken ? 'present' : 'null',
      type: type,
      search: window.location.search,
      hash: window.location.hash,
      fullHash: window.location.hash,
      hashLength: window.location.hash.length,
      actualCode: code,
      actualAccessToken: accessToken ? accessToken.substring(0, 10) + '...' : null
    })
    
    // Store the parameters for later use
    setAuthParams({ code, accessToken, refreshToken, type })
    
    // Accept either format
    if (code || (accessToken && type === 'recovery')) {
      console.log('Found reset parameters, allowing password reset form')
      setIsValidToken(true)
    } else {
      setMessage({ type: 'error', text: 'Invalid or expired reset link. Please request a new password reset.' })
      console.log('No valid reset parameters found')
    }
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
      // Use stored auth parameters instead of re-parsing URL
      const { code, accessToken, refreshToken, type } = authParams
      
      console.log('Attempting password reset with stored parameters...')
      console.log('Form submission debug:', {
        code: code ? 'present' : 'null',
        accessToken: accessToken ? 'present' : 'null', 
        type: type,
        actualCode: code,
        actualAccessToken: accessToken ? accessToken.substring(0, 10) + '...' : null
      })
      
      // Try hash-based flow first (preferred)
      if (accessToken && type === 'recovery') {
        console.log('Using hash-based token approach')
        
        // Set the session and update password directly
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken || '',
        })
        
        if (sessionError) {
          console.error('Session error:', sessionError)
          setMessage({ type: 'error', text: 'Reset link expired. Please request a new password reset.' })
          setLoading(false)
          return
        }
        
        // Update password
        const { error: updateError } = await supabase.auth.updateUser({ password })
        
        if (updateError) {
          console.error('Password update error:', updateError)
          setMessage({ type: 'error', text: updateError.message || 'Failed to update password' })
          setLoading(false)
          return
        }
        
        console.log('Password updated successfully via hash tokens!')
        
      } else if (code) {
        console.log('Using code-based API approach')
        
        // Fall back to API endpoint for code-based flow
        const response = await fetch('/api/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: code,
            password: password
          })
        })
        
        const result = await response.json()
        
        if (!response.ok) {
          console.error('API call failed:', response.status, result)
          setMessage({ type: 'error', text: result.error || 'Failed to reset password. Please try again.' })
          setLoading(false)
          return
        }
        
        console.log('Password reset successful via API:', result)
        
      } else {
        setMessage({ type: 'error', text: 'No valid reset parameters found. Please click the reset link again.' })
        setLoading(false)
        return
      }
      
      setMessage({ type: 'success', text: 'Password updated successfully! You can now log in with your new password.' })
      setPassword('')
      setConfirmPassword('')
      
      // Redirect to success page after 3 seconds
      setTimeout(() => {
        router.push('/reset-success')
      }, 3000)
      
    } catch (error: any) {
      console.error('Password reset error:', error)
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Reset Password - AutoLens</title>
        <meta name="description" content="Reset your AutoLens password" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="min-h-screen flex items-center justify-center p-4 bg-paper">
        <div className="max-w-md w-full">
          <div className="bg-paper border-2 border-ink p-8 relative">
            <Link href="/" className="inline-block font-space text-3xl font-bold text-ink relative mb-8">
              AutoLens
              <span className="absolute -right-5 -top-2 text-rust text-sm">●</span>
            </Link>
            
            <h2 className="text-2xl font-semibold mb-6 font-space">Reset Your Password</h2>
            
            {message && (
              <div className={`mb-6 p-4 border-2 ${
                message.type === 'success' 
                  ? 'bg-mint bg-opacity-20 border-mint text-ocean' 
                  : 'bg-sunset bg-opacity-20 border-sunset text-rust'
              }`}>
                {message.text}
              </div>
            )}
            
            {isValidToken && !message?.type && (
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2 text-ocean">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-ink focus:ring-2 focus:ring-rust focus:border-rust transition-colors bg-paper"
                    placeholder="Enter new password"
                    required
                    minLength={6}
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-ocean">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-ink focus:ring-2 focus:ring-rust focus:border-rust transition-colors bg-paper"
                    placeholder="Confirm new password"
                    required
                    minLength={6}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-rust text-paper border-2 border-rust font-semibold hover:transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--ink)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            )}
            
            <div className="mt-6 text-center">
              <Link href="/" className="text-ocean hover:text-rust transition-colors font-medium">
                Back to AutoLens
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
