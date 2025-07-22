import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function LocationPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Try to open the app after 2 seconds
    const timer = setTimeout(() => {
      // First try Universal Link (iOS) / App Link (Android)
      window.location.href = `https://autolens.net/location/${id}`;
      
      // Fallback to custom scheme after short delay
      setTimeout(() => {
        window.location.href = `autolens://location/${id}`;
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <>
      <Head>
        <title>AutoLens - Photography Location</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="View this amazing photography location in the AutoLens app!" />
      </Head>
      
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 50%, #0D47A1 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>
            📍 AutoLens
          </h1>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
            Photography Location
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Discover this amazing photography spot in the AutoLens app!
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '12px', 
              padding: '1rem',
              marginBottom: '1rem',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                📱 Attempting to open AutoLens app...
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button 
              onClick={() => window.location.href = `autolens://location/${id}`}
              style={{ 
                padding: '15px 30px', 
                fontSize: '18px', 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                color: 'white', 
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px', 
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              🚀 Open in AutoLens App
            </button>
            
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              Don&apos;t have the app yet?
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  padding: '12px 20px', 
                  backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                  color: 'white', 
                  textDecoration: 'none', 
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                }}
              >
                📱 App Store
              </a>
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  padding: '12px 20px', 
                  backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                  color: 'white', 
                  textDecoration: 'none', 
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                }}
              >
                🤖 Play Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
