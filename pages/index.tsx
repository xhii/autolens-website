import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    // Check if this is a password reset redirect
    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    const queryParams = new URLSearchParams(window.location.search)
    
    const type = hashParams.get('type') || queryParams.get('type')
    const hasToken = hashParams.get('access_token') || queryParams.get('code')
    
    if (type === 'recovery' && hasToken) {
      // This is a password reset, redirect to the reset page
      console.log('Password reset detected, redirecting...')
      console.log('Hash:', window.location.hash)
      console.log('Search:', window.location.search)
      // Use window.location to preserve hash parameters
      window.location.href = `/reset-password${window.location.hash}${window.location.search}`
    }
  }, [router])
  
  return (
    <>
      <Head>
        <title>AutoLens - Real spots. Real shots.</title>
        <meta name="description" content="The underground map for car photographers. Real locations shared by real shooters." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            <Link href="#features" className="nav-link">Features</Link>
            <Link href="#gallery" className="nav-link">Spots</Link>
            <Link href="#" className="nav-link">Stories</Link>
            <Link href="#download" className="nav-app-btn">Get the app</Link>
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
              <Link href="#features" className="block py-2 text-ink font-medium">Features</Link>
              <Link href="#gallery" className="block py-2 text-ink font-medium">Spots</Link>
              <Link href="#" className="block py-2 text-ink font-medium">Stories</Link>
              <Link href="#download" className="block py-2 bg-ink text-paper text-center font-semibold">Get the app</Link>
            </div>
          </div>
        )}
      </nav>

      <section className="hero">
        <div className="hero-wrapper">
          {/* Top section: title + phones */}
          <div className="hero-top">
            <div className="hero-title-section">
              <h1 className="hero-title">
                Find spots.<br/>Take <span className="hero-accent">shots</span>.
              </h1>
            </div>
            <div className="hero-visual">
              <div className="phones-container">
                <div className="iphone iphone-1">
                  <div className="iphone-screen map-screen">
                    <div className="screen-header">📍 Nearby Spots</div>
                    <div className="map-pins-demo">
                      <div className="demo-pin demo-pin-1"></div>
                      <div className="demo-pin demo-pin-2"></div>
                      <div className="demo-pin demo-pin-3"></div>
                    </div>
                  </div>
                </div>
                <div className="iphone iphone-2">
                  <div className="iphone-screen feed-screen">
                    <div className="screen-header">🔥 Recent Shots</div>
                    <div className="photo-feed">
                      <div className="feed-item">
                        <div className="feed-location">Pacific Coast Highway</div>
                      </div>
                      <div className="feed-item feed-item-2">
                        <div className="feed-location">Downtown Parking Garage</div>
                      </div>
                      <div className="feed-item feed-item-3">
                        <div className="feed-location">Mountain Pass</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio section: full width */}
          <p className="hero-subtitle">
            The underground map for car photographers. Real locations shared by real shooters.
          </p>
          
          {/* Buttons section: full width */}
          <div className="hero-buttons">
            <Link href="#download" className="btn-start">Start exploring</Link>
            <Link href="#" className="btn-watch">Watch 2min intro</Link>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-wrapper">
          <h2 className="features-title">Built by shooters,<br/>for shooters.</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-number">1</div>
              <h3>Scout smarter</h3>
              <p>No more driving around hoping. See exactly what you'll get before you go. Lighting info, parking spots, security details.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">2</div>
              <h3>Share the wealth</h3>
              <p>Found a killer spot? Drop a pin. Help the community grow. Your secret spot stays secret if you want it to.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">3</div>
              <h3>Track days sorted</h3>
              <p>Every major track mapped. Know where to shoot, where to park, when to show up. No more guessing games.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="gallery-header">
          <h2>Latest from the community</h2>
          <p>Real spots. Real shots. Updated daily.</p>
        </div>
        <div className="photo-grid">
          <div className="photo-item">
            <div className="photo-location">Pacific Coast Highway, CA</div>
          </div>
          <div className="photo-item">
            <div className="photo-location">Downtown LA Rooftop</div>
          </div>
          <div className="photo-item">
            <div className="photo-location">Tail of the Dragon, TN</div>
          </div>
          <div className="photo-item">
            <div className="photo-location">Brooklyn Bridge, NY</div>
          </div>
        </div>
      </section>

      <section className="quote">
        <blockquote className="quote-text">
          Finally, an app that gets it. Found three new spots in my city I never knew existed. Game changer.
        </blockquote>
        <p className="quote-author">— Mike Chen, @autofocus</p>
      </section>

      <section className="cta" id="download">
        <div className="cta-wrapper">
          <h2>Ready to level up?</h2>
          <p className="cta-subtitle">Join 15,000+ photographers already using AutoLens</p>
          <div className="download-options">
            <Link href="#" className="download-btn">iOS App Store</Link>
            <Link href="#" className="download-btn">Google Play</Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-wrapper">
          <p>&copy; 2025 AutoLens</p>
          <div className="footer-links">
            <Link href="#" className="footer-link">Privacy</Link>
            <Link href="#" className="footer-link">Terms</Link>
            <Link href="#" className="footer-link">Contact</Link>
            <Link href="#" className="footer-link">Instagram</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
