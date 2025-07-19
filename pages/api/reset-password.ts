import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Create admin client for more privileged operations
console.log('API: Service role key available:', !!process.env.SUPABASE_SERVICE_ROLE_KEY)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { code, password } = req.body

  if (!code || !password) {
    return res.status(400).json({ error: 'Code and password are required' })
  }

  try {
    console.log('API: Attempting to use admin auth to reset password')
    
    // Try to verify the token_hash with admin client
    console.log('API: Trying token_hash verification with admin client')
    const { data: hashData, error: hashError } = await supabaseAdmin.auth.verifyOtp({
      token_hash: code,
      type: 'recovery'
    })
    
    if (hashError) {
      console.error('API: Admin hash verification failed:', hashError)
      return res.status(400).json({ 
        error: 'Invalid or expired reset code',
        details: hashError.message 
      })
    }
    
    console.log('API: Admin verification successful:', hashData)

    console.log('API: Attempting password update...')

    // If we have a session from verification, use it to update password
    if (hashData.session && hashData.user) {
      console.log('API: Using verified session for password update')
      
      // Create a new supabase client with the verified session
      const userSupabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      
      // Set the session
      const { error: sessionError } = await userSupabase.auth.setSession({
        access_token: hashData.session.access_token,
        refresh_token: hashData.session.refresh_token
      })
      
      if (sessionError) {
        console.error('API: Session setup failed:', sessionError)
        return res.status(400).json({ 
          error: 'Failed to establish user session',
          details: sessionError.message 
        })
      }
      
      // Update password with the user session
      const { error: updateError } = await userSupabase.auth.updateUser({ password })
      
      if (updateError) {
        console.error('API: Password update failed:', updateError)
        return res.status(400).json({ 
          error: 'Failed to update password',
          details: updateError.message 
        })
      }
    } else {
      console.error('API: No session or user data from verification')
      return res.status(400).json({ 
        error: 'Verification succeeded but no session available',
        details: 'Unable to establish user session for password update' 
      })
    }

    console.log('API: Password updated successfully')
    return res.status(200).json({ message: 'Password updated successfully' })

  } catch (error: any) {
    console.error('API: Unexpected error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    })
  }
}
