import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { supabase } from '../../lib/supabase';

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('Processing authentication...');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get parameters from URL hash fragment
        const hashFragment = window.location.hash.substring(1);
        const hashParams = new URLSearchParams(hashFragment);
        const queryParams = new URLSearchParams(window.location.search);
        
        const type = hashParams.get('type') || queryParams.get('type');
        const error = hashParams.get('error') || queryParams.get('error');
        const error_description = hashParams.get('error_description') || queryParams.get('error_description');
        const access_token = hashParams.get('access_token') || queryParams.get('access_token');
        const refresh_token = hashParams.get('refresh_token') || queryParams.get('refresh_token');
        const code = queryParams.get('code');

        console.log('Auth callback - type:', type, 'access_token present:', !!access_token);

        // Handle errors first
        if (error) {
          console.error('Auth error:', error_description);
          setStatus('error');
          setMessage(`Authentication failed: ${error_description || error}`);
          return;
        }

        // Route based on auth type
        switch(type) {
          case 'recovery':
            // This is a PASSWORD RESET
            console.log('Handling password reset');
            setMessage('Processing password reset...');
            
            // Set the session for password reset
            if (access_token && refresh_token) {
              await supabase.auth.setSession({
                access_token,
                refresh_token
              });
            }
            
            // Redirect to password reset form with hash preserved
            window.location.href = `/reset-password#${hashFragment}`;
            break;

          case 'signup':
          case 'email':
            // This is EMAIL CONFIRMATION
            console.log('Handling email confirmation');
            setMessage('Confirming email...');
            
            // Set the session for email confirmation
            if (access_token && refresh_token) {
              const { data, error } = await supabase.auth.setSession({
                access_token,
                refresh_token
              });
              
              if (error) throw error;
            }
            
            // Email confirmed successfully
            setStatus('success');
            setMessage('Email confirmed successfully! Opening AutoLens app...');
            
            // Try to open mobile app, fallback to app store
            setTimeout(() => {
              // Deep link to open the mobile app
              window.location.href = 'autolens://auth/confirmed';
              
              // Fallback to app store if app doesn't open
              setTimeout(() => {
                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                if (isIOS) {
                  window.location.href = 'https://apps.apple.com/app/autolens/id[YOUR_APP_ID]';
                } else {
                  window.location.href = 'https://play.google.com/store/apps/details?id=com.autolens.app';
                }
              }, 1500);
            }, 2000);
            break;

          case 'magiclink':
            // Handle magic link login if you implement it later
            console.log('Handling magic link');
            if (access_token && refresh_token) {
              await supabase.auth.setSession({
                access_token,
                refresh_token
              });
            }
            setStatus('success');
            setMessage('Login successful! Opening AutoLens app...');
            setTimeout(() => {
              window.location.href = 'autolens://auth/login';
              setTimeout(() => {
                window.location.href = '/';
              }, 1000);
            }, 2000);
            break;

          default:
            // Handle OAuth code exchange or unknown types
            if (code) {
              console.log('Handling OAuth code exchange');
              setMessage('Processing login...');
              
              const { data: codeData, error: codeError } = await supabase.auth.exchangeCodeForSession(code);
              if (codeError) throw codeError;

              setStatus('success');
              setMessage('Login successful! Opening AutoLens app...');
              setTimeout(() => {
                window.location.href = 'autolens://auth/login';
                setTimeout(() => {
                  window.location.href = '/';
                }, 1000);
              }, 2000);
            } else if (access_token && refresh_token) {
              // Fallback: try to set session anyway
              console.log('Setting session with tokens, unknown type:', type);
              await supabase.auth.setSession({
                access_token,
                refresh_token
              });
              setStatus('success');
              setMessage('Authentication successful! Opening AutoLens app...');
              setTimeout(() => {
                window.location.href = 'autolens://auth/success';
                setTimeout(() => {
                  window.location.href = '/';
                }, 1000);
              }, 2000);
            } else {
              // Unknown type or no tokens, redirect to home
              console.log('Unknown auth type or no tokens:', type);
              setStatus('error');
              setMessage('Unknown authentication type. Redirecting to home...');
              setTimeout(() => {
                window.location.href = '/';
              }, 3000);
            }
        }

      } catch (error) {
        console.error('Auth callback error:', error);
        setStatus('error');
        setMessage('Authentication failed. Please try again or contact support.');
        
        // Redirect to home after error
        setTimeout(() => {
          window.location.href = '/';
        }, 5000);
      }
    };

    // Only run if we have relevant parameters
    if (window.location.hash || window.location.search.includes('code=')) {
      handleAuthCallback();
    } else {
      // No relevant parameters, redirect to home
      setStatus('error');
      setMessage('No authentication data found. Redirecting to home...');
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Authentication - AutoLens</title>
        <meta name="description" content="Completing AutoLens authentication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="callback-container">
        <div className="callback-card">
          <Image 
            src="/autolens_logo.png" 
            alt="AutoLens" 
            width={240}
            height={72}
            priority
            className="callback-logo"
          />
          
          {status === 'processing' && (
            <div className="callback-content">
              <div className="spinner"></div>
              <h2 className="callback-title">Processing authentication...</h2>
              <p className="callback-message">{message}</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="callback-content">
              <div className="callback-icon success">✅</div>
              <h2 className="callback-title">Authentication Successful!</h2>
              <p className="callback-message">{message}</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="callback-content">
              <div className="callback-icon error">❌</div>
              <h2 className="callback-title">Authentication Failed</h2>
              <p className="callback-message">{message}</p>
              <a href="mailto:support@autolens.net" className="support-link">
                Contact Support
              </a>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .callback-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: var(--paper);
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 2rem;
        }

        .callback-card {
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

        .callback-logo {
          height: 60px;
          width: auto;
          margin-bottom: 2rem;
        }

        .callback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .callback-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0;
          line-height: 1.2;
        }

        .callback-message {
          color: var(--ocean);
          font-size: 1.1rem;
          line-height: 1.5;
          margin: 0;
          max-width: 320px;
        }

        .callback-icon {
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
          .callback-container {
            padding: 1rem;
          }

          .callback-card {
            padding: 2rem;
            transform: none;
            box-shadow: 4px 4px 0 rgba(10, 10, 10, 0.1);
          }

          .callback-title {
            font-size: 1.5rem;
          }

          .callback-message {
            font-size: 1rem;
          }

          .callback-logo {
            height: 48px;
          }
        }
      `}</style>
    </>
  );
}