import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'

export default function Terms() {
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
        <title>Terms of Service - AutoLens</title>
        <meta name="description" content="AutoLens Terms of Service - Your agreement for using our car photography location sharing platform." />
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
      </nav>

      <section className="pt-32 pb-16 px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-5xl font-bold font-space mb-4">AutoLens Terms of Service</h1>
            
            <p className="text-xl text-ocean mb-8">
              <strong>Effective Date:</strong> August 26, 2025<br/>
              <strong>Last Updated:</strong> August 26, 2025
            </p>

            <div className="bg-paper border-2 border-ink p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Quick Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#introduction" className="text-rust hover:underline">1. Introduction and Acceptance</a></li>
                <li><a href="#service-description" className="text-rust hover:underline">2. Service Description</a></li>
                <li><a href="#eligibility" className="text-rust hover:underline">3. Eligibility and Account Registration</a></li>
                <li><a href="#user-content" className="text-rust hover:underline">4. User-Generated Content and Rights</a></li>
                <li><a href="#prohibited" className="text-rust hover:underline">5. Prohibited Activities</a></li>
                <li><a href="#privacy" className="text-rust hover:underline">6. Privacy and Data Protection</a></li>
                <li><a href="#intellectual" className="text-rust hover:underline">7. Intellectual Property</a></li>
                <li><a href="#safety" className="text-rust hover:underline">8. Safety and Legal Compliance</a></li>
                <li><a href="#disclaimers" className="text-rust hover:underline">9. Disclaimers and Limitations</a></li>
                <li><a href="#liability" className="text-rust hover:underline">10. Limitation of Liability</a></li>
                <li><a href="#indemnification" className="text-rust hover:underline">11. Indemnification</a></li>
                <li><a href="#termination" className="text-rust hover:underline">12. Account Termination</a></li>
                <li><a href="#governing-law" className="text-rust hover:underline">13. Governing Law and Disputes</a></li>
                <li><a href="#changes" className="text-rust hover:underline">14. Changes to Terms</a></li>
                <li><a href="#subscriptions" className="text-rust hover:underline">17. Subscription Services</a></li>
                <li><a href="#billing" className="text-rust hover:underline">18. Billing and Payment</a></li>
                <li><a href="#contact" className="text-rust hover:underline">16. Contact Information</a></li>
              </ul>
            </div>

            <div className="legal-content space-y-8">
              <section id="introduction">
                <h2 className="text-3xl font-bold mb-4">1. Introduction and Acceptance</h2>
                <p>Welcome to AutoLens, a mobile application and online platform that allows car photography enthusiasts to discover, share, and rate automotive photography locations. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and AutoLens ("we," "us," or "our").</p>
                
                <div className="bg-rust/10 border-2 border-ink p-4 my-4">
                  <p className="font-bold">Important:</p>
                  <p>By accessing, downloading, installing, or using the AutoLens application or services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our services.</p>
                </div>
              </section>

              <section id="service-description">
                <h2 className="text-3xl font-bold mb-4">2. Service Description</h2>
                <p>AutoLens provides:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>A platform to discover car photography locations shared by community members</li>
                  <li>Tools to share, rate, and review photography locations</li>
                  <li>Photo upload and sharing capabilities</li>
                  <li>Social networking features for car photography enthusiasts</li>
                  <li>Interactive maps with location data</li>
                  <li>Comment and rating systems for locations</li>
                </ul>
              </section>

              <section id="eligibility">
                <h2 className="text-3xl font-bold mb-4">3. Eligibility and Account Registration</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">3.1 Age Requirements</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>You must be at least 17 years old to use AutoLens</li>
                  <li>Users under 17 are not permitted to use this service</li>
                  <li>By creating an account, you confirm that you are 17 years of age or older</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">3.2 Account Creation</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>You must provide accurate, current, and complete information during registration</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You agree to notify us immediately of any unauthorized access to your account</li>
                  <li>One person may not maintain more than one account</li>
                </ul>
              </section>

              <section id="user-content">
                <h2 className="text-3xl font-bold mb-4">4. User-Generated Content and Rights</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">4.1 Your Content</h3>
                <p>You retain ownership of photos, descriptions, comments, and other content you upload ("Your Content"). By posting Your Content, you grant AutoLens:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>A worldwide, non-exclusive, royalty-free license to use, display, reproduce, modify, adapt, publish, and distribute Your Content</li>
                  <li>The right to sublicense these rights to third parties</li>
                  <li>The right to use Your Content for promotional and marketing purposes</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">4.2 Content Standards</h3>
                <p>Your Content must:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Be your original work or content you have permission to share</li>
                  <li>Not infringe on any third-party rights</li>
                  <li>Be relevant to car photography and automotive locations</li>
                  <li>Comply with our Community Guidelines</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">4.3 Location Information</h3>
                <div className="bg-ocean/10 border-2 border-ink p-4 my-4">
                  <p>By sharing location information, you:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Grant permission for us to associate Your Content with geographic coordinates</li>
                    <li>Understand that location data may be shared with other users as part of the service</li>
                    <li>Acknowledge that location sharing may reveal personal information</li>
                  </ul>
                </div>
              </section>

              <section id="prohibited">
                <h2 className="text-3xl font-bold mb-4">5. Prohibited Activities</h2>
                <p>You agree NOT to:</p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">5.1 Legal Violations</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Violate any applicable laws, regulations, or ordinances</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Share content that is defamatory, harassing, or threatening</li>
                  <li>Post private information about others without consent</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">5.2 Platform Misuse</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Attempt to hack, reverse engineer, or compromise our systems</li>
                  <li>Use automated tools to scrape or harvest data</li>
                  <li>Create fake accounts or impersonate others</li>
                  <li>Spam users or post excessive commercial content</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">5.3 Location-Specific Violations</h3>
                <div className="bg-rust/10 border-2 border-ink p-4 my-4">
                  <p className="font-bold mb-2">Important Location Guidelines:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Do not share locations on private property without permission.</strong> By sharing a location, you represent and warrant that the location is on public land or that you have explicit, verifiable permission from the property owner.</li>
                    <li>Do not promote trespassing or illegal photography activities</li>
                    <li>Do not share locations that endanger people or wildlife</li>
                    <li>Do not post false or misleading location information</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-3">5.4 Community Harm</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Harass, bully, or intimidate other users</li>
                  <li>Share inappropriate, obscene, or offensive content</li>
                  <li>Attempt to manipulate ratings or reviews</li>
                  <li>Engage in discriminatory behavior</li>
                </ul>
              </section>

              <section id="privacy">
                <h2 className="text-3xl font-bold mb-4">6. Privacy and Data Protection</h2>
                <p>Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our <Link href="/privacy" className="text-rust hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Key points include:</p>
                
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>We collect location data to provide mapping services</li>
                  <li>Photos you upload may contain metadata that we process</li>
                  <li>We use analytics to improve our services</li>
                  <li>You can control many privacy settings in your account</li>
                </ul>
              </section>

              <section id="intellectual">
                <h2 className="text-3xl font-bold mb-4">7. Intellectual Property</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">7.1 AutoLens Property</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>The AutoLens app, website, and services are protected by copyright, trademark, and other laws</li>
                  <li>Our logos, trademarks, and brand elements are our exclusive property</li>
                  <li>You may not use our intellectual property without written permission</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">7.2 User Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Do not post copyrighted images unless you own them or have permission</li>
                  <li>Respect the privacy and property rights of locations and people in photos</li>
                  <li>Give appropriate credit when sharing others' work (with permission)</li>
                </ul>
              </section>

              <section id="safety">
                <h2 className="text-3xl font-bold mb-4">8. Safety and Legal Compliance</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">8.1 Photography Laws</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>You are responsible for knowing and following photography laws in your area</li>
                  <li>Some locations may require permits or have restrictions</li>
                  <li>Always respect private property and "no photography" signs</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">8.2 Safety Guidelines</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Never risk personal safety for a photograph</li>
                  <li>Follow all traffic laws when driving to locations</li>
                  <li>Be aware of environmental hazards at photography locations</li>
                  <li>Report dangerous locations to us immediately</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">8.3 Age Verification</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>All users must be 17 or older to use AutoLens</li>
                  <li>We may request age verification at any time</li>
                  <li>Accounts found to be under 17 will be immediately terminated</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">8.4 Assumption of Risk</h3>
                <div className="bg-sunset/10 border-2 border-ink p-4 my-4">
                  <p className="font-bold mb-2">Important Safety Notice:</p>
                  <p>You understand and agree that using AutoLens involves visiting physical locations that may be remote, unfamiliar, or carry inherent risks, including but not limited to, difficult terrain, changing weather conditions, and the potential for encounters with other people. <strong>You voluntarily assume all risks associated with traveling to and visiting any location discovered through the Service. You are solely responsible for your own safety and the security of your property.</strong></p>
                </div>
              </section>

              <section id="disclaimers">
                <h2 className="text-3xl font-bold mb-4">9. Disclaimers and Limitations</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">9.1 Service Availability</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>AutoLens is provided "as-is" without warranties of any kind</li>
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>Service availability may vary by location</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">9.2 Location Information</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Location data is provided by users and may be inaccurate</li>
                  <li>We are not responsible for the accuracy of location information</li>
                  <li>Users access locations at their own risk</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">9.3 User Interactions</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>We are not responsible for interactions between users</li>
                  <li>We do not screen users or verify their identities</li>
                  <li>Exercise caution when meeting other users in person</li>
                </ul>
              </section>

              <section id="liability">
                <h2 className="text-3xl font-bold mb-4">10. Limitation of Liability</h2>
                <div className="bg-ink text-paper p-4 my-4 font-bold">
                  <p>TO THE FULLEST EXTENT PERMITTED BY LAW:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>AutoLens shall not be liable for any indirect, incidental, special, or consequential damages</li>
                    <li>Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim</li>
                    <li>Some jurisdictions do not allow liability limitations, so these may not apply to you</li>
                  </ul>
                </div>
              </section>

              <section id="indemnification">
                <h2 className="text-3xl font-bold mb-4">11. Indemnification</h2>
                <p>You agree to indemnify and hold AutoLens harmless from any claims, damages, losses, or expenses arising from:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Your use of the service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your infringement of any third-party rights</li>
                  <li>Content you post or share</li>
                </ul>
              </section>

              <section id="termination">
                <h2 className="text-3xl font-bold mb-4">12. Account Termination</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">12.1 Termination by You</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>You may delete your account at any time</li>
                  <li>Deletion requests may take up to 30 days to process</li>
                  <li>Some data may remain in our systems for legal or operational reasons</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">12.2 Termination by Us</h3>
                <p>We may suspend or terminate your account if you:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Violate these Terms or our Community Guidelines</li>
                  <li>Engage in illegal activities</li>
                  <li>Pose a risk to other users or our services</li>
                  <li>Remain inactive for an extended period</li>
                </ul>
              </section>

              <section id="governing-law">
                <h2 className="text-3xl font-bold mb-4">13. Governing Law and Disputes</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">13.1 Governing Law</h3>
                <p>These Terms are governed by the laws of the United States and the State of California, without regard to conflict of law principles.</p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">13.2 Dispute Resolution</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>We encourage resolving disputes informally by contacting us first</li>
                  <li>Any legal disputes shall be resolved in the courts of California</li>
                  <li>You may be entitled to file claims in small claims court</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">13.3 Class Action Waiver</h3>
                <p>You agree to resolve disputes individually and waive the right to participate in class actions or collective proceedings.</p>
              </section>

              <section id="changes">
                <h2 className="text-3xl font-bold mb-4">14. Changes to Terms</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">14.1 Modification Rights</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>We may modify these Terms at any time</li>
                  <li>Material changes will be communicated through the app or email</li>
                  <li>Continued use after changes constitutes acceptance</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">14.2 Notice Period</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>We will provide at least 30 days' notice for significant changes</li>
                  <li>You may terminate your account if you disagree with changes</li>
                </ul>
              </section>

              <section id="subscriptions">
                <h2 className="text-3xl font-bold mb-4">17. Subscription Services and In-App Purchases</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">17.1 AutoLens Pro Subscription</h3>
                <p>AutoLens offers premium subscription services ("AutoLens Pro") with enhanced features and functionality. Subscription options include:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Monthly subscription: $2.99 USD per month</li>
                  <li>Annual subscription: $29.99 USD per year</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">17.2 Payment Processing</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>All payments are processed by Apple through the App Store</li>
                  <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
                  <li>Subscription pricing may vary by region based on Apple's local pricing policies</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">17.3 Auto-Renewal Terms</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
                  <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
                  <li>The renewal charge will be the same price as the original subscription</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">17.4 Free Trial and Cancellation</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Free trials, if offered, must be cancelled before the trial period expires to avoid charges</li>
                  <li>You can manage your subscription and turn off auto-renewal in your Apple ID Account Settings</li>
                  <li>Cancellation takes effect at the end of your current billing period</li>
                  <li>No refunds are provided for unused portions of your subscription</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">17.5 Subscription Management</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>To manage your subscription, go to Settings &gt; [Your Name] &gt; Media &amp; Purchases &gt; View Account &gt; Subscriptions on your iOS device</li>
                  <li>Changes to subscription plans take effect at the next billing cycle</li>
                  <li>Downgrading from annual to monthly billing will take effect at the end of your current annual period</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">17.6 Refund Policy</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>All subscription purchases are subject to Apple's refund policy</li>
                  <li>Refund requests must be made directly through Apple, not through AutoLens</li>
                  <li>We cannot process refunds for purchases made through the App Store</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">17.7 Price Changes</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>We reserve the right to change subscription prices at any time</li>
                  <li>You will receive at least 30 days' notice of any price increases</li>
                  <li>Price changes will take effect at your next billing cycle after the notice period</li>
                  <li>Continued use of the service after price changes constitutes acceptance of the new pricing</li>
                </ul>
              </section>

              <section id="billing">
                <h2 className="text-3xl font-bold mb-4">18. Billing and Payment Terms</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">18.1 Payment Authorization</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>By subscribing to AutoLens Pro, you authorize Apple to charge your selected payment method</li>
                  <li>You represent that you are authorized to use the payment method associated with your Apple ID</li>
                  <li>You agree to pay all charges incurred through your account</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">18.2 Failed Payments</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>If payment cannot be processed, your subscription may be suspended or cancelled</li>
                  <li>You remain responsible for any uncollected amounts</li>
                  <li>We may attempt to charge your payment method again or request updated payment information</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">18.3 Taxes</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>You are responsible for any applicable taxes related to your subscription</li>
                  <li>Prices displayed may not include applicable taxes, which will be added at checkout</li>
                  <li>Tax rates may vary based on your billing address and local regulations</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">18.4 Billing Disputes</h3>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>For billing disputes related to App Store purchases, contact Apple Support directly</li>
                  <li>AutoLens cannot resolve billing issues for purchases made through Apple's payment system</li>
                  <li>Keep your purchase receipts for your records</li>
                </ul>
              </section>

              <section id="contact">
                <h2 className="text-3xl font-bold mb-4">16. Contact Information</h2>
                
                <div className="bg-paper border-2 border-ink p-6 my-4">
                  <h3 className="font-bold mb-4">Questions About These Terms</h3>
                  <p className="mb-2">For questions about these Terms, contact us at:</p>
                  <ul className="space-y-1">
                    <li>Support: <Link href="/support" className="text-rust hover:underline">autolens.net/support</Link></li>
                    <li>Email: <Link href="/support" className="text-rust hover:underline">Use our support form</Link></li>
                  </ul>
                </div>

                <div className="bg-ocean/10 border-2 border-ink p-4 my-4">
                  <p className="font-bold mb-2">Notice for California Residents:</p>
                  <p className="text-sm">Under California Civil Code Section 1789.3, California users are entitled to specific consumer rights information. Contact the California Department of Consumer Affairs at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834, or (800) 952-5210.</p>
                </div>

                <div className="bg-mint/10 border-2 border-ink p-4 my-4">
                  <p className="font-bold mb-2">Notice for EU Residents:</p>
                  <p className="text-sm">If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR). See our <Link href="/privacy" className="text-rust hover:underline">Privacy Policy</Link> for details.</p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-ink">
              <p className="text-sm text-ocean">
                <em>These Terms of Service were last updated on August 26, 2025. Please review them regularly as they may change.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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