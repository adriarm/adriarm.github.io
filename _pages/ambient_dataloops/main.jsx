import React, { useState } from 'react';

const ResearchPaperSite = () => {
  const [isDark, setIsDark] = useState(false);

  // Apple-style design tokens
  const theme = {
    // Backgrounds
    bg: isDark ? '#000000' : '#ffffff',
    bgSecondary: isDark ? '#1c1c1e' : '#f5f5f7',
    bgTertiary: isDark ? '#2c2c2e' : '#e8e8ed',
    bgElevated: isDark ? '#1c1c1e' : '#ffffff',
    
    // Text
    text: isDark ? '#f5f5f7' : '#1d1d1f',
    textSecondary: isDark ? '#a1a1a6' : '#86868b',
    textTertiary: isDark ? '#6e6e73' : '#acacb0',
    
    // Accent (Apple Blue)
    accent: isDark ? '#0a84ff' : '#0071e3',
    accentHover: isDark ? '#409cff' : '#0077ed',
    
    // Semantic colors for tags
    methodology: {
      bg: isDark ? 'rgba(10, 132, 255, 0.16)' : 'rgba(0, 113, 227, 0.1)',
      text: isDark ? '#64d2ff' : '#0071e3',
    },
    stability: {
      bg: isDark ? 'rgba(255, 159, 10, 0.16)' : 'rgba(255, 149, 0, 0.1)',
      text: isDark ? '#ffd60a' : '#c93400',
    },
    results: {
      bg: isDark ? 'rgba(48, 209, 88, 0.16)' : 'rgba(40, 205, 65, 0.1)',
      text: isDark ? '#30d158' : '#248a3d',
    },
    
    // Borders & Separators
    separator: isDark ? 'rgba(84, 84, 88, 0.65)' : 'rgba(60, 60, 67, 0.12)',
    border: isDark ? 'rgba(84, 84, 88, 0.35)' : 'rgba(60, 60, 67, 0.08)',
    
    // Vibrancy/Glass effect
    glass: isDark 
      ? 'rgba(28, 28, 30, 0.72)' 
      : 'rgba(255, 255, 255, 0.72)',
    glassBorder: isDark
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.04)',
  };

  const Tag = ({ type, children }) => (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 12px',
      borderRadius: '980px',
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '-0.01em',
      backgroundColor: theme[type].bg,
      color: theme[type].text,
      marginLeft: '10px',
    }}>
      {children}
    </span>
  );

  const SectionTitle = ({ tag, tagType, children }) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      flexWrap: 'wrap',
      gap: '8px',
    }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: '600',
        color: theme.text,
        letterSpacing: '-0.015em',
        margin: 0,
        lineHeight: 1.14,
      }}>
        {children}
      </h2>
      <Tag type={tagType}>{tag}</Tag>
    </div>
  );

  const Card = ({ children, style = {} }) => (
    <section style={{
      backgroundColor: theme.bgElevated,
      borderRadius: '18px',
      padding: '28px',
      marginBottom: '20px',
      border: `0.5px solid ${theme.border}`,
      boxShadow: isDark 
        ? '0 4px 24px rgba(0, 0, 0, 0.4)' 
        : '0 4px 24px rgba(0, 0, 0, 0.04), 0 0 0 0.5px rgba(0, 0, 0, 0.02)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
      ...style,
    }}>
      {children}
    </section>
  );

  const PlaceholderText = ({ lines = 4 }) => (
    <div style={{ 
      color: theme.textSecondary, 
      lineHeight: 1.58, 
      fontSize: '17px',
      fontWeight: '400',
      letterSpacing: '-0.01em',
    }}>
      {Array(lines).fill(null).map((_, i) => (
        <p key={i} style={{ marginBottom: i < lines - 1 ? '16px' : 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      ))}
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme.bgSecondary,
      transition: 'background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        @supports (font: -apple-system-body) {
          html { font: -apple-system-body; }
        }
        
        .apple-button {
          transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        }
        .apple-button:hover {
          transform: scale(1.02);
        }
        .apple-button:active {
          transform: scale(0.98);
        }
        
        .card-hover {
          transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        }
        .card-hover:hover {
          transform: translateY(-2px);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
      `}</style>

      {/* Navigation Bar - Apple Style */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: theme.glass,
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: `0.5px solid ${theme.separator}`,
        padding: '0 24px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          {/* Apple-style logo */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.text}>
            <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM12 18a.75.75 0 01-.75-.75v-4.5H6.75a.75.75 0 010-1.5h4.5V6.75a.75.75 0 011.5 0v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5A.75.75 0 0112 18z"/>
          </svg>
          <span style={{
            fontSize: '17px',
            fontWeight: '600',
            color: theme.text,
            letterSpacing: '-0.01em',
          }}>
            Research
          </span>
        </div>

        {/* Theme Toggle - Apple Segmented Control Style */}
        <div style={{
          display: 'flex',
          backgroundColor: theme.bgTertiary,
          borderRadius: '8px',
          padding: '2px',
          gap: '2px',
        }}>
          <button
            onClick={() => setIsDark(false)}
            className="apple-button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: !isDark ? theme.bgElevated : 'transparent',
              color: !isDark ? theme.text : theme.textSecondary,
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              boxShadow: !isDark ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            Light
          </button>
          <button
            onClick={() => setIsDark(true)}
            className="apple-button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: isDark ? theme.bgElevated : 'transparent',
              color: isDark ? theme.text : theme.textSecondary,
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
            Dark
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        maxWidth: '820px',
        margin: '0 auto',
        padding: '60px 24px 80px',
      }}>
        
        {/* Hero Section */}
        <header style={{
          textAlign: 'center',
          marginBottom: '56px',
          paddingTop: '20px',
        }} className="fade-in">
          {/* Small label */}
          <p style={{
            fontSize: '14px',
            fontWeight: '600',
            color: theme.accent,
            letterSpacing: '-0.01em',
            marginBottom: '12px',
            textTransform: 'uppercase',
          }}>
            Research Paper
          </p>
          
          {/* Main title - Apple's large display style */}
          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 64px)',
            fontWeight: '700',
            color: theme.text,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            marginBottom: '16px',
          }}>
            Ambient Dataloops
          </h1>
          
          {/* Subtitle with gradient - Apple style */}
          <p style={{
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: '600',
            background: isDark 
              ? 'linear-gradient(90deg, #64d2ff, #5e5ce6, #bf5af2)' 
              : 'linear-gradient(90deg, #0071e3, #5856d6, #af52de)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '40px',
          }}>
            Generative Models for Dataset Refinement
          </p>
          
          {/* Authors - Clean horizontal layout */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px 20px',
            color: theme.textSecondary,
            fontSize: '15px',
            fontWeight: '400',
            letterSpacing: '-0.01em',
            marginBottom: '40px',
          }}>
            {[
              'Adrian Rodriguez-Munoz',
              'William Daspit',
              'Adam Klivans',
              'Antonio Torralba',
              'Constantinos Daskalakis',
              'Giannis Daras'
            ].map((author, i, arr) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {author}
                {i < arr.length - 1 && (
                  <span style={{ 
                    width: '3px', 
                    height: '3px', 
                    borderRadius: '50%', 
                    backgroundColor: theme.textTertiary,
                    marginLeft: '0px',
                  }} />
                )}
              </span>
            ))}
          </div>

          {/* Divider line */}
          <div style={{
            width: '40px',
            height: '4px',
            backgroundColor: theme.accent,
            margin: '0 auto',
            borderRadius: '2px',
          }} />
        </header>

        {/* Abstract */}
        <Card className="card-hover">
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: theme.text,
            letterSpacing: '-0.015em',
            marginBottom: '20px',
            lineHeight: 1.14,
          }}>
            Abstract
          </h2>
          <PlaceholderText lines={2} />
        </Card>

        {/* Methodology */}
        <Card className="card-hover">
          <SectionTitle tag="Methodology" tagType="methodology">
            Dataset-Model co-evolution
          </SectionTitle>
          <PlaceholderText lines={3} />
        </Card>

        {/* Stability */}
        <Card className="card-hover">
          <SectionTitle tag="Stability" tagType="stability">
            Fighting MADness
          </SectionTitle>
          <PlaceholderText lines={3} />
        </Card>

        {/* Results 1 */}
        <Card className="card-hover">
          <SectionTitle tag="Results" tagType="results">
            Text-to-image models with synthetic data
          </SectionTitle>
          <PlaceholderText lines={3} />
        </Card>

        {/* Results 2 */}
        <Card className="card-hover">
          <SectionTitle tag="Results" tagType="results">
            DeNovo protein design
          </SectionTitle>
          <PlaceholderText lines={3} />
        </Card>

        {/* Results 3 */}
        <Card className="card-hover">
          <SectionTitle tag="Results" tagType="results">
            ImageNet restoration
          </SectionTitle>
          <PlaceholderText lines={3} />
        </Card>

        {/* Citation */}
        <Card style={{ backgroundColor: isDark ? '#000000' : theme.bgSecondary }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: theme.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '600',
              color: theme.text,
              letterSpacing: '-0.015em',
              margin: 0,
              lineHeight: 1.14,
            }}>
              Citation
            </h2>
          </div>
          
          <div style={{
            backgroundColor: isDark ? '#1c1c1e' : '#ffffff',
            borderRadius: '12px',
            padding: '20px',
            border: `0.5px solid ${theme.border}`,
            overflow: 'auto',
          }}>
            <pre style={{
              margin: 0,
              fontFamily: '"SF Mono", SFMono-Regular, ui-monospace, Menlo, Monaco, monospace',
              fontSize: '13px',
              lineHeight: 1.7,
              color: theme.text,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}>
              <span style={{ color: theme.accent }}>@article</span>{'{'}<span style={{ color: isDark ? '#ffd60a' : '#c93400' }}>rodriguez2025ambient</span>,{'\n'}
              {'  '}<span style={{ color: isDark ? '#64d2ff' : '#0071e3' }}>title</span> = {'{'}<span style={{ color: theme.textSecondary }}>Ambient Dataloops: Generative Models for Dataset Refinement</span>{'}'},{'\n'}
              {'  '}<span style={{ color: isDark ? '#64d2ff' : '#0071e3' }}>author</span> = {'{'}<span style={{ color: theme.textSecondary }}>Rodriguez-Munoz, A. and Daspit, W. and Klivans, A. and Torralba, A. and Daskalakis, C. and Daras, G.</span>{'}'},{'\n'}
              {'  '}<span style={{ color: isDark ? '#64d2ff' : '#0071e3' }}>year</span> = {'{'}<span style={{ color: theme.textSecondary }}>2025</span>{'}'},{'\n'}
              {'}'}
            </pre>
          </div>
          
          {/* Apple-style button */}
          <button
            onClick={() => {
              navigator.clipboard.writeText(`@article{rodriguez2025ambient,
  title = {Ambient Dataloops: Generative Models for Dataset Refinement},
  author = {Rodriguez-Munoz, A. and Daspit, W. and Klivans, A. and Torralba, A. and Daskalakis, C. and Daras, G.},
  year = {2025},
}`);
            }}
            className="apple-button"
            style={{
              marginTop: '16px',
              height: '36px',
              padding: '0 20px',
              borderRadius: '980px',
              border: 'none',
              backgroundColor: theme.accent,
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy Citation
          </button>
        </Card>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 0 20px',
          marginTop: '20px',
        }}>
          <p style={{
            color: theme.textTertiary,
            fontSize: '12px',
            fontWeight: '400',
            letterSpacing: '-0.01em',
          }}>
            © 2025 Ambient Dataloops Research Team
          </p>
        </footer>
      </main>
    </div>
  );
};

export default ResearchPaperSite;
