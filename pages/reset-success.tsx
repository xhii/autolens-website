import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ResetSuccess() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [router])
  
  return (
    <>
      <Head>
        <title>Password Reset Successful - AutoLens</title>
        <meta name="description" content="Your AutoLens password has been successfully reset" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      
      <main className="min-h-screen flex items-center justify-center p-4 bg-paper">
        <div className="max-w-md w-full text-center">
          <div className="bg-paper border-2 border-ink p-8 relative transform rotate-1">
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-mint border-2 border-ink flex items-center justify-center transform -rotate-3">
              <svg className="w-8 h-8 text-paper" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold mb-4 font-space text-ink">Success!</h1>
            
            <p className="text-ocean mb-8 text-lg">
              Your password has been reset successfully. You can now log in to the AutoLens mobile app with your new password.
            </p>
            
            <div className="space-y-4">
              <p className="text-sm text-fog">Download the AutoLens app:</p>
              
              <div className="flex gap-4 justify-center">
                <button className="px-6 py-3 bg-ink text-paper border-2 border-ink font-medium hover:transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--rust)] transition-all" disabled>
                  <span className="text-xs">Coming Soon on</span><br />
                  App Store
                </button>
                <button className="px-6 py-3 bg-ink text-paper border-2 border-ink font-medium hover:transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--rust)] transition-all" disabled>
                  <span className="text-xs">Coming Soon on</span><br />
                  Google Play
                </button>
              </div>
              
              <p className="text-sm text-fog mt-4">
                Redirecting to home page in 5 seconds...
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t-2 border-fog border-opacity-30">
              <Link href="/" className="text-ocean hover:text-rust transition-colors font-medium">
                Go to homepage now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
