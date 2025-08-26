import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Support - AutoLens</title>
        <meta name="description" content="Get help with AutoLens. Contact our support team for assistance." />
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
            <Link href="/how-it-works" className="nav-link">How it works</Link>
            <Link href="/#gallery" className="nav-link">Gallery</Link>
            <Link href="/#download" className="nav-app-btn">Get the app</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-8 min-h-screen">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-space mb-4">Support</h1>
            <p className="text-xl text-ocean">Need help? We're here for you.</p>
          </div>

          {status === 'success' ? (
            <div className="bg-mint border-2 border-ink p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
              <p className="text-lg mb-6">Thanks for reaching out. We'll get back to you as soon as possible.</p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-ink text-paper px-6 py-3 font-bold hover:bg-ocean transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-ink bg-paper focus:border-rust outline-none text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-ink bg-paper focus:border-rust outline-none text-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-ink bg-paper focus:border-rust outline-none text-lg"
                >
                  <option value="">Select a topic</option>
                  <option value="Account Issues">Account Issues</option>
                  <option value="App Bug Report">App Bug Report</option>
                  <option value="Location Submission">Location Submission</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="General Support">General Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your issue or question in detail..."
                  className="w-full p-4 border-2 border-ink bg-paper focus:border-rust outline-none text-lg resize-vertical"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-rust text-paper p-4 font-bold text-lg border-2 border-rust hover:bg-paper hover:text-rust transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'error' && (
                <div className="bg-sunset border-2 border-ink p-4 text-center">
                  <p className="font-semibold">Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}
            </form>
          )}

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-paper border-2 border-ink p-6">
                <h4 className="font-bold text-lg mb-2">Social Media</h4>
                <p className="text-ocean mb-4">Follow us for updates and community highlights</p>
                <div className="flex justify-center gap-4">
                  <Link href="https://x.com/autolensapp" className="text-ocean hover:text-rust">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.instagram.com/autolensapp/" className="text-ocean hover:text-rust">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="bg-paper border-2 border-ink p-6">
                <h4 className="font-bold text-lg mb-2">FAQ</h4>
                <p className="text-ocean mb-4">Check our frequently asked questions</p>
                <Link href="#" className="text-rust font-semibold hover:underline">
                  View FAQ →
                </Link>
              </div>
              <div className="bg-paper border-2 border-ink p-6">
                <h4 className="font-bold text-lg mb-2">Community</h4>
                <p className="text-ocean mb-4">Join our Discord community for peer support</p>
                <Link href="#" className="text-rust font-semibold hover:underline">
                  Join Discord →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 bg-paper border-t-2 border-ink">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center flex-wrap gap-8">
          <p>&copy; 2025 AutoLens</p>
          <div className="flex gap-8 flex-wrap items-center">
            <Link href="#" className="text-ocean hover:text-rust">Privacy</Link>
            <Link href="#" className="text-ocean hover:text-rust">Terms</Link>
            <Link href="/support" className="text-ocean hover:text-rust">Support</Link>
            <div className="social-links">
              <Link href="https://x.com/autolensapp" className="social-link" title="Follow us on X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/autolensapp/" className="social-link" title="Follow us on Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="social-link" title="Join our Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}