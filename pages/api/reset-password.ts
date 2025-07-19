import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
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
    console.log('API: Attempting to verify code and update password')
    
    // Try to verify the OTP code
    const { data, error: verifyError } = await supabase.auth.verifyOtp({
      token_hash: code,
      type: 'recovery'
    })

    if (verifyError) {
      console.error('API: OTP verification failed:', verifyError)
      return res.status(400).json({ 
        error: 'Invalid or expired reset code',
        details: verifyError.message 
      })
    }

    console.log('API: OTP verified, updating password...')

    // Update the password
    const { error: updateError } = await supabase.auth.updateUser({ password })

    if (updateError) {
      console.error('API: Password update failed:', updateError)
      return res.status(400).json({ 
        error: 'Failed to update password',
        details: updateError.message 
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