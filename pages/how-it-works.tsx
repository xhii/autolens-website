import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
            <Link href="/#download" className="bg-paper text-ink px-8 py-4 font-bold hover:transform hover:-translate-y-1 transition-all">
              Download for iOS
            </Link>
            <Link href="/#download" className="bg-paper text-ink px-8 py-4 font-bold hover:transform hover:-translate-y-1 transition-all">
              Download for Android
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 bg-paper border-t-2 border-ink">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center flex-wrap gap-8">
          <p>&copy; 2025 AutoLens</p>
          <div className="flex gap-8 flex-wrap items-center">
            <Link href="/privacy" className="text-ocean hover:text-rust">Privacy</Link>
            <Link href="/terms" className="text-ocean hover:text-rust">Terms</Link>
            <Link href="/support" className="text-ocean hover:text-rust">Support</Link>
            <div className="social-links">
              <Link target="_blank" href="https://x.com/autolensapp" className="social-link" title="Follow us on X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/autolensapp/" className="social-link" title="Follow us on Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link target="_blank" href="#" className="social-link" title="Join our Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>

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