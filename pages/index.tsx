import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AutoLens - Car Photography Locations</title>
        <meta name="description" content="Discover and share the best car photography locations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AutoLens
          </h1>
          
          <p className="text-2xl mb-12 text-gray-600 dark:text-gray-300">
            Discover and share the best car photography locations
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              AutoLens is currently in development. Download the mobile app to start exploring amazing photography spots!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition" disabled>
                <span className="text-sm">Coming Soon on</span><br />
                App Store
              </button>
              <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition" disabled>
                <span className="text-sm">Coming Soon on</span><br />
                Google Play
              </button>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>© 2024 AutoLens. All rights reserved.</p>
          </div>
        </div>
      </main>
    </>
  )
}