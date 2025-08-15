  import { useEffect } from 'react';
  import { useRouter } from 'next/router';
  import Head from 'next/head';

  export default function RacetrackPage() {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
      const timer = setTimeout(() => {
        window.location.href = `autolens://racetrack/${id}`;

        setTimeout(() => {
          window.location.href = `https://autolens.net/racetrack/${id}`;
        }, 500);
      }, 2000);

      return () => clearTimeout(timer);
    }, [id]);

    return (
      <>
        <Head>
          <title>AutoLens - Racetrack</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="View this amazing racetrack in the AutoLens app!" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" 
            rel="stylesheet" 
          />
        </Head>

        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '20px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          background: '#1a1a1a',
          color: '#ffffff',
          textAlign: 'center'
        }}>
          {/* Top Navigation */}
          <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            background: '#1a1a1a',
            borderBottom: '2px solid #333',
            zIndex: 50,
            padding: '1.5rem 2rem'
          }}>
            <div style={{
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <img 
                  src="/autolens_logo.png" 
                  alt="AutoLens" 
                  style={{ 
                    width: '240px', 
                    height: '72px'
                  }}
                />
              </div>
            </div>
          </nav>

          <div style={{ maxWidth: '400px', width: '100%', marginTop: '80px' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem', 
              fontWeight: '700',
              fontFamily: 'Space Grotesk, sans-serif',
              lineHeight: '1.1'
            }}>
              🏁 Racetrack Found
            </h1>

            <h2 style={{ 
              fontSize: '1.25rem', 
              marginBottom: '1.5rem', 
              fontWeight: '500',
              color: '#999',
              fontFamily: 'Inter, sans-serif'
            }}>
              Opening in AutoLens app...
            </h2>

            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '2rem', 
              opacity: 0.8,
              lineHeight: '1.5'
            }}>
              Discover this racetrack and hundreds more in the AutoLens racing community.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                background: 'rgba(255, 107, 71, 0.1)', 
                borderRadius: '12px', 
                padding: '1rem',
                marginBottom: '1rem',
                border: '1px solid rgba(231, 76, 60, 0.2)'
              }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#E74C3C' }}>
                  🏁 Attempting to open AutoLens app...
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button 
                onClick={() => window.location.href = `autolens://racetrack/${id}`}
                style={{
                  padding: '15px 30px',
                  fontSize: '16px',
                  backgroundColor: '#E74C3C',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                🚀 Open in AutoLens
              </button>

              <div style={{ fontSize: '0.9rem', opacity: 0.6, margin: '1rem 0' }}>
                Don&apos;t have the app yet?
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a 
                  href="https://apps.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    padding: '12px 20px', 
                    backgroundColor: 'rgba(255, 107, 71, 0.2)', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 107, 71, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  📱 iOS App
                </a>
                <a 
                  href="https://play.google.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    padding: '12px 20px', 
                    backgroundColor: 'rgba(255, 107, 71, 0.2)', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 107, 71, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  🤖 Android App
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            padding: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            background: '#1a1a1a'
          }}>
            <div style={{
              fontSize: '0.875rem',
              color: '#666',
              textAlign: 'center'
            }}>
              © 2025 AutoLens
            </div>
          </footer>
        </div>
      </>
    );
  }
