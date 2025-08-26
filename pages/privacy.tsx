import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Privacy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash && target.pathname === window.location.pathname) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Head>
        <title>Privacy Policy - AutoLens</title>
        <meta name="description" content="AutoLens Privacy Policy - Learn how we protect your data and respect your privacy." />
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
            <Link href="/support" className="nav-link">Support</Link>
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
              <Link href="/how-it-works" className="block py-2 text-ink font-medium">How it works</Link>
              <Link href="/support" className="block py-2 text-ink font-medium">Support</Link>
              <Link href="/#download" className="block py-2 bg-ink text-paper text-center font-semibold">Get the app</Link>
            </div>
          </div>
        )}
        </div>
      </nav>

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-5xl font-bold font-space mb-4">AutoLens Privacy Policy</h1>
            
            <p className="text-xl text-ocean mb-8">
              <strong>Effective Date:</strong> August 26, 2025<br/>
              <strong>Last Updated:</strong> August 26, 2025
            </p>

            <div className="bg-paper border-2 border-ink p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Quick Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#introduction" className="text-rust hover:underline">1. Introduction</a></li>
                <li><a href="#information-we-collect" className="text-rust hover:underline">2. Information We Collect</a></li>
                <li><a href="#how-we-use" className="text-rust hover:underline">3. How We Use Your Information</a></li>
                <li><a href="#how-we-share" className="text-rust hover:underline">4. How We Share Your Information</a></li>
                <li><a href="#data-retention" className="text-rust hover:underline">5. Data Retention</a></li>
                <li><a href="#your-rights" className="text-rust hover:underline">6. Your Privacy Rights and Controls</a></li>
                <li><a href="#data-security" className="text-rust hover:underline">7. Data Security</a></li>
                <li><a href="#international" className="text-rust hover:underline">8. International Data Transfers</a></li>
                <li><a href="#children" className="text-rust hover:underline">9. Age Requirements</a></li>
                <li><a href="#updates" className="text-rust hover:underline">10. Updates to This Policy</a></li>
                <li><a href="#contact" className="text-rust hover:underline">11. Contact Information</a></li>
              </ul>
            </div>

            <div className="legal-content space-y-8">
              <section id="introduction">
                <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
                <p>AutoLens ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile application and related services (collectively, the "Service").</p>
                
                <p>This Privacy Policy applies to all users of AutoLens and should be read in conjunction with our Terms of Service. By using our Service, you consent to the data practices described in this policy.</p>

                <div className="bg-mint/10 border-2 border-ink p-4 my-4">
                  <h3 className="font-bold mb-2">Key Points:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>We collect location data to provide mapping and discovery features</li>
                    <li>Photos you upload may contain metadata that we process</li>
                    <li>We use your data to improve the Service and provide personalized experiences</li>
                    <li>You have control over your privacy settings and data</li>
                    <li>We comply with GDPR, CCPA, and other applicable privacy laws</li>
                  </ul>
                </div>
              </section>

              <section id="information-we-collect">
                <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">2.1 Information You Provide Directly</h3>
                
                <h4 className="font-bold mb-2">Account Information:</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Email address (required for registration)</li>
                  <li>Username and display name</li>
                  <li>Password (encrypted and stored securely)</li>
                  <li>Profile picture and bio (optional)</li>
                  <li>Social media links (optional)</li>
                </ul>

                <h4 className="font-bold mb-2">Content You Share:</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Photos and images you upload</li>
                  <li>Location names, descriptions, and reviews</li>
                  <li>Comments and ratings on locations</li>
                  <li>Location-specific details (accessibility, parking, lighting conditions)</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">2.2 Information We Collect Automatically</h3>
                
                <h4 className="font-bold mb-2">Device Information:</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Device type, model, and operating system</li>
                  <li>Unique device identifiers</li>
                  <li>App version and settings</li>
                  <li>Network connection information</li>
                  <li>Crash logs and performance data</li>
                </ul>

                <h4 className="font-bold mb-2">Location Information:</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>GPS coordinates when you add locations</li>
                  <li>Approximate location based on IP address</li>
                  <li>Location preferences and saved areas</li>
                  <li>Routes and travel patterns (if location services enabled)</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">2.3 Photo and Media Metadata</h3>
                
                <div className="bg-ocean/10 border-2 border-ink p-4 my-4">
                  <p className="font-bold mb-2">Our Commitment to Your Privacy:</p>
                  <p>To protect your privacy, AutoLens automatically strips sensitive EXIF data, including GPS coordinates, from all uploaded photos by default. You may have the option to preserve this data in your privacy settings if you wish to share it.</p>
                </div>
              </section>

              <section id="how-we-use">
                <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">3.1 Primary Service Functions</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Display photography locations on interactive maps</li>
                  <li>Enable photo sharing and community features</li>
                  <li>Provide location discovery and recommendation services</li>
                  <li>Facilitate user interactions (comments, ratings, follows)</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">3.2 Personalization</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Customize your feed based on interests and location</li>
                  <li>Suggest relevant photography locations</li>
                  <li>Provide personalized recommendations</li>
                  <li>Remember your preferences and settings</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">3.3 Communication and Support</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Send important updates about the Service</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Notify you of new features or changes</li>
                  <li>Send security alerts and account notifications</li>
                </ul>
              </section>

              <section id="how-we-share">
                <h2 className="text-3xl font-bold mb-4">4. How We Share Your Information</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">4.1 Public Information</h3>
                <p className="mb-4">The following information is visible to all users:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Your username and profile information</li>
                  <li>Photos and locations you share publicly</li>
                  <li>Comments and ratings you post</li>
                  <li>Public activity like follows and likes</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">4.2 Service Providers</h3>
                <p className="mb-4">We share information with trusted third-party service providers:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Supabase (database and backend services)</li>
                  <li>Google Cloud Platform (hosting and storage)</li>
                  <li>Analytics and performance monitoring tools</li>
                  <li>Email service providers</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">4.3 Legal Requirements</h3>
                <p>We may disclose your information when required by law or to protect rights, property, or safety.</p>
              </section>

              <section id="data-retention">
                <h2 className="text-3xl font-bold mb-4">5. Data Retention</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">5.1 General Retention Policy</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>We retain your information as long as your account is active</li>
                  <li>Inactive accounts for 2+ years may be deleted with notice</li>
                  <li>Some data may be retained in anonymized form</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">5.2 Content Retention</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Photos and location data remain until you delete them</li>
                  <li>Deleted content may persist in backups for up to 90 days</li>
                  <li>Some cached content may remain on user devices</li>
                </ul>
              </section>

              <section id="your-rights">
                <h2 className="text-3xl font-bold mb-4">6. Your Privacy Rights and Controls</h2>
                
                <div className="bg-mint/10 border-2 border-ink p-4 my-4">
                  <h3 className="font-bold mb-2">Your Universal Data Rights</h3>
                  <p>We believe all users should have control over their data. Regardless of your location, you have the right to access, update, download, and delete your personal information through your account settings or by contacting our support team.</p>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">6.1 Account Controls</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Update or delete profile information</li>
                  <li>Change privacy settings for your content</li>
                  <li>Control who can see your activity</li>
                  <li>Manage notification preferences</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">6.2 Regional Privacy Rights</h3>
                
                <h4 className="font-bold mb-2">GDPR Rights (EU Residents):</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate information</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                </ul>

                <h4 className="font-bold mb-2">CCPA Rights (California Residents):</h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of sale of personal information</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
              </section>

              <section id="data-security">
                <h2 className="text-3xl font-bold mb-4">7. Data Security</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">7.1 Technical Safeguards</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Data encrypted in transit using TLS/SSL</li>
                  <li>Sensitive data encrypted at rest</li>
                  <li>Secure key management practices</li>
                  <li>Regular security monitoring and threat detection</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">7.2 User Security</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Strong password requirements</li>
                  <li>Optional two-factor authentication</li>
                  <li>Account activity monitoring</li>
                  <li>Suspicious activity alerts</li>
                </ul>
              </section>

              <section id="international">
                <h2 className="text-3xl font-bold mb-4">8. International Data Transfers</h2>
                <p>AutoLens is available globally, and your information may be transferred to and processed in countries other than your own, including the United States. We ensure appropriate safeguards are in place for international transfers.</p>
              </section>

              <section id="children">
                <h2 className="text-3xl font-bold mb-4">9. Age Requirements</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">9.1 Age Restrictions</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>AutoLens is intended for users 17 years of age and older</li>
                  <li>We do not knowingly collect information from users under 17</li>
                  <li>If you are under 17, please do not use this service</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">9.2 Age Verification</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Users must confirm they are 17 or older during registration</li>
                  <li>We may request additional verification if age is in question</li>
                  <li>Accounts found to be under 17 will be terminated</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">9.3 Compliance</h3>
                <p>If we learn we have collected information from a user under 17, we will delete the account and associated information immediately. Parents or guardians may contact us regarding underage accounts.</p>
              </section>

              <section id="updates">
                <h2 className="text-3xl font-bold mb-4">10. Updates to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Material changes will be communicated through the app or email with at least 30 days' notice. Your continued use after changes constitutes acceptance.</p>
              </section>

              <section id="contact">
                <h2 className="text-3xl font-bold mb-4">11. Contact Information</h2>
                
                <div className="bg-paper border-2 border-ink p-6 my-4">
                  <h3 className="font-bold mb-4">Privacy Questions</h3>
                  <p className="mb-2">For questions about this Privacy Policy or our privacy practices:</p>
                  <ul className="space-y-1">
                    <li>Email: <Link href="/support" className="text-rust hover:underline">support@autolens.net</Link></li>
                    <li>Support Page: <Link href="/support" className="text-rust hover:underline">autolens.net/support</Link></li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-ink">
              <p className="text-sm text-ocean">
                <strong>Effective Date:</strong> This Privacy Policy is effective as of August 26, 2025 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              </p>
              <p className="text-sm text-ocean mt-2">
                <em>Please review this Privacy Policy regularly for any updates or changes.</em>
              </p>
            </div>
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

      <style jsx>{`
        .legal-content {
          color: var(--ink);
          line-height: 1.8;
        }

        .legal-content h2 {
          color: var(--ink);
          border-bottom: 2px solid var(--ink);
          padding-bottom: 0.5rem;
        }

        .legal-content h3 {
          color: var(--ocean);
        }

        .legal-content p {
          margin-bottom: 1rem;
        }

        .legal-content ul {
          margin-bottom: 1rem;
        }

        .legal-content section {
          scroll-margin-top: 100px;
        }
      `}</style>
    </>
  )
}