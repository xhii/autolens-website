import Head from 'next/head'
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
        <meta name="description" content="Your password has been reset successfully" />
      </Head>
      
      <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Success!</h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Your password has been reset successfully. You can now log in to the AutoLens app with your new password.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Next step:</strong> Open the AutoLens mobile app and log in with your new password.
              </p>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Redirecting to home page in 5 seconds...
            </p>
            
            <a href="/" className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline">
              Go to home page now
            </a>
          </div>
        </div>
      </main>
    </>
  )
}