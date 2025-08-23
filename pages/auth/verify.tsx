import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { supabase } from '../../lib/supabase';

export default function Verify() {
  const router = useRouter();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('Verifying your account...');

  useEffect(() => {
    const handleVerification = async () => {
      try {
        // Get parameters from URL
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const queryParams = new URLSearchParams(window.location.search);
        
        const token = hashParams.get('token') || queryParams.get('token');
        const type = hashParams.get('type') || queryParams.get('type');

        if (token) {
          // Handle verification based on type
          if (type === 'email') {
            const { data, error } = await supabase.auth.verifyOtp({
              token_hash: token,
              type: 'email'
            });

            if (error) throw error;

            setStatus('success');
            setMessage('Account verified successfully! You can now use AutoLens.');
            
            // Redirect after delay
            setTimeout(() => {
              window.location.href = 'autolens://auth/verified';
              setTimeout(() => {
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                if (isIOS) {
                  window.location.href = 'https://apps.apple.com/app/autolens/id[YOUR_APP_ID]';
                } else {
                  window.location.href = 'https://play.google.com/store/apps/details?id=com.autolens.app';
                }
              }, 1000);
            }, 2000);
          } else {
            throw new Error('Unknown verification type');
          }
        } else {
          throw new Error('No verification token found');
        }
      } catch (error) {
        setStatus('error');
        setMessage('Verification failed. Please try again or contact support.');
        console.error('Verification error:', error);
      }
    };

    handleVerification();
  }, []);

  return (
    <>
      <Head>
        <title>Verify Account - AutoLens</title>
        <meta name="description" content="Verify your AutoLens account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="verify-container">
        <div className="verify-card">
          <Image 
            src="/autolens_logo.png" 
            alt="AutoLens" 
            width={240}
            height={72}
            priority
            className="verify-logo"
          />
          
          {status === 'verifying' && (
            <div className="verify-content">
              <div className="spinner"></div>
              <h2 className="verify-title">Verifying your account...</h2>
              <p className="verify-message">{message}</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="verify-content">
              <div className="verify-icon success">✅</div>
              <h2 className="verify-title">Account Verified!</h2>
              <p className="verify-message">{message}</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="verify-content">
              <div className="verify-icon error">❌</div>
              <h2 className="verify-title">Verification Failed</h2>
              <p className="verify-message">{message}</p>
              <a href="mailto:support@autolens.net" className="support-link">
                Contact Support
              </a>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .verify-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: var(--paper);
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 2rem;
        }

        .verify-card {
          background: var(--paper);
          padding: 3rem;
          border: 3px solid var(--ink);
          max-width: 450px;
          width: 100%;
          text-align: center;
          position: relative;
          transform: rotate(-0.5deg);
          box-shadow: 8px 8px 0 rgba(10, 10, 10, 0.1);
        }

        .verify-logo {
          height: 60px;
          width: auto;
          margin-bottom: 2rem;
        }

        .verify-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .verify-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
          line-height: 1.2;
        }

        .verify-message {
          color: var(--ocean);
          font-size: 1.1rem;
          line-height: 1.5;
          margin: 0;
          max-width: 320px;
        }

        .verify-icon {
          font-size: 4rem;
          margin-bottom: 0.5rem;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid var(--fog);
          border-top: 4px solid var(--rust);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 0.5rem;
        }

        .support-link {
          color: var(--rust);
          text-decoration: none;
          font-weight: 600;
          margin-top: 1rem;
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--rust);
          background: transparent;
          transition: all 0.2s ease;
        }

        .support-link:hover {
          background: var(--rust);
          color: var(--paper);
          transform: translateY(-2px);
          box-shadow: 2px 2px 0 var(--ink);
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .verify-container {
            padding: 1rem;
          }

          .verify-card {
            padding: 2rem;
            transform: none;
            box-shadow: 4px 4px 0 rgba(10, 10, 10, 0.1);
          }

          .verify-title {
            font-size: 1.5rem;
          }

          .verify-message {
            font-size: 1rem;
          }

          .verify-logo {
            height: 48px;
          }
        }
      `}</style>
    </>
  );
}