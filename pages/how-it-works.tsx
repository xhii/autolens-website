import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '@/components/Footer'

export default function HowItWorks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <Head>
        <title>How It Works - AutoLens</title>
        <meta name="description" content="Learn how to use AutoLens to find the best car photography spots and track locations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      
      <nav className="fixed top-0 w-full bg-paper z-50 border-b-2 border-ink">
        <div className="max-w-[1400px] mx-auto px-8 py-1 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/autolens_logo.png"
              alt="AutoLens"
              width={240}
              height={72}
              priority
              className="w-[240px] h-[72px] md:w-[240px] md:h-[72px]"
              style={{ width: 'auto', height: 'auto', maxWidth: '240px', maxHeight: '72px' }}
            />
          </Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/#gallery" className="nav-link">Gallery</Link>
            <Link href="/#download" className="nav-app-btn">Get the app</Link>
          </div>
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-paper border-b-2 border-ink">
            <div className="px-4 py-2 space-y-1">
              <Link href="/" className="block py-2 text-ink font-medium">Home</Link>
              <Link href="/#gallery" className="block py-2 text-ink font-medium">Gallery</Link>
              <Link href="/#download" className="block py-2 bg-ink text-paper text-center font-semibold">Get the app</Link>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-16 px-8 min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-space mb-4">How AutoLens Works</h1>
            <p className="text-xl text-ocean">Your guide to finding perfect car photography spots</p>
          </div>

          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="bg-rust text-paper w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h2 className="text-3xl font-bold mb-4">Download & Get Started</h2>
              <p className="text-lg text-ocean mb-4">
                Download AutoLens and create your free account to start exploring photography spots and racetracks in your area.
              </p>
              <ul className="space-y-2 text-ocean">
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Quick and easy sign up process
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Join the photographer community
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Start discovering locations immediately
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="iphone-tutorial">
                <div className="iphone-screen-tutorial">
                  <Image
                    src="/tutorial-step-1.png"
                    alt="Browse AutoLens locations"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="flex justify-center">
              <div className="iphone-tutorial">
                <div className="iphone-screen-tutorial">
                  <Image
                    src="/tutorial-step-2.png"
                    alt="Map view with location pins"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-rust text-paper w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h2 className="text-3xl font-bold mb-4">Explore the Map</h2>
              <p className="text-lg text-ocean mb-4">
                Open the map to see photography spots near you. Each pin represents a location shared by the community.
              </p>
              <ul className="space-y-2 text-ocean">
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Red pins for racetracks & circuits
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Blue pins for photography locations
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Filter by distance or rating
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="bg-rust text-paper w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h2 className="text-3xl font-bold mb-4">View Spot Details</h2>
              <p className="text-lg text-ocean mb-4">
                Tap any pin to see photos taken at that location, best times to shoot, parking info, and tips from other photographers.
              </p>
              <ul className="space-y-2 text-ocean">
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Example shots from the location
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Golden hour recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Security and access information
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="iphone-tutorial">
                <div className="iphone-screen-tutorial">
                  <Image
                    src="/tutorial-step-3.png"
                    alt="Spot detail view with photos"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="flex justify-center">
              <div className="iphone-tutorial">
                <div className="iphone-screen-tutorial">
                  <Image
                    src="/tutorial-step-4.png"
                    alt="Adding a new spot to the map"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-rust text-paper w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h2 className="text-3xl font-bold mb-4">Share Your Discoveries</h2>
              <p className="text-lg text-ocean mb-4">
                Found an amazing location? Create a free account to add it to the map! Help grow the community by sharing your secret spots.
              </p>
              <ul className="space-y-2 text-ocean">
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Quick sign up when you're ready to contribute
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Upload photos and add location details
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-2">→</span>
                  Share tips and best shooting times
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="bg-ocean text-paper py-16 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your next shot?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of car photographers already using AutoLens</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="https://apps.apple.com/us/app/autolens-car-photography/id6748659107" target="_blank" rel="noopener noreferrer" className="bg-paper text-ink px-8 py-4 font-bold hover:transform hover:-translate-y-1 transition-all">
              Download for iOS
            </Link>
            <Link href="/#download" className="bg-paper text-ink px-8 py-4 font-bold hover:transform hover:-translate-y-1 transition-all">
              Download for Android
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .iphone-tutorial {
          width: 320px;
          height: 692px;
          background: var(--ink);
          border-radius: 40px;
          padding: 6px;
          border: 3px solid var(--ink);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .iphone-screen-tutorial {
          width: 100%;
          height: 100%;
          border-radius: 34px;
          overflow: hidden;
          position: relative;
        }

        .screenshot-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          color: #666;
          font-size: 14px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .iphone-tutorial {
            width: 280px;
            height: 606px;
          }
        }
      `}</style>
    </>
  )
}