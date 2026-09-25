/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#282C33',
        surface: '#282C33',
        surfaceDark: '#1E2127',
        primary: '#C778DD',
        muted: '#ABB2BF',
        foreground: '#FFFFFF',
        borderMuted: '#ABB2BF',
        accent: {
          purple: '#C778DD',
          green: '#98C379',
          blue: '#61AFEF',
          yellow: '#E5C07B',
          red: '#E06C75',
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'Consolas', 'Courier New', 'monospace'],
      },
      maxWidth: {
        container: '1024px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(199, 120, 221, 0.35)',
        glowSm: '0 0 10px rgba(199, 120, 221, 0.25)',
      },
      letterSpacing: {
        widest: '.15em',
      }
    },
  },
  plugins: [],
}
