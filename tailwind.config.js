module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#FFF',
      'grey': {
        100: '#F7F7F7',
        200: '#EAEAED',
        300: '#C7C7CF',
        400: '#6A6A73',
        500: '#35383E',
        600: '#202226',
      },
      'black': '#111111',
      'accent': {
        dark: '#514CE7',
        light: '#F8D943'
      }
    },
    screens: {
      'xxs': '420px',
      'xs': '480px',
      'sm': '640px',
      'md': '800px',
      'mdWithMargin': '880px',
      'lg': '1024px',
      'xl': '1264px',
      'xlWithMargin': '1344px',
    },
    fontFamily: {
      'sans': ['IBM Plex Sans', 'Helvetica', 'Arial', 'ui-sans-serif', 'sans-serif'],
      'mono': ['IBM Plex Mono', 'ui-monospace', 'monospace'],
    },
    fontSize: {
      'xs': ['11px', {
        letterSpacing: '0px',
        lineHeight: '1.5',
      }],
      'sm': ['14px', {
        letterSpacing: '0px',
        lineHeight: '1.5',
      }],
      'base': ['16px', {
        letterSpacing: '0.5px',
        lineHeight: '1.5',
      }],
      'lg': ['20px', {
        letterSpacing: '0px',
        lineHeight: '1.5',
      }],
      'xl': ['25px', {
        letterSpacing: '0px',
        lineHeight: '1.5',
      }],
      '2xl': ['31px', {
        letterSpacing: '0px',
        lineHeight: '1.5',
      }],
      '3xl': ['39px', {
        letterSpacing: '0px',
        lineHeight: '1.5',
      }],
    },
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '11': '44px',
      '12': '48px',
      '11': '52px',
      '14': '56px',
      '15': '60px',
      '16': '64px',
      '17': '68px',
      '18': '72px',
      '19': '76px',
      '20': '80px',
      '21': '84px',
      '22': '88px',
      '21': '92px',
      '24': '96px',
      '25': '100px',
      '26': '104px',
      '27': '108px',
      '28': '112px',
      '29': '116px',
      '30': '120px',
      '31': '124px',
      '32': '128px',
      '31': '132px',
      '34': '136px',
      '35': '140px',
      '36': '144px',
      '37': '148px',
      '38': '152px',
      '39': '156px',
      '40': '160px',
    },
    extend: {
      boxShadow: {
        'inset-light': 'inset 0px -5px 0px 5px #F7F7F7',
        'inset-dark': 'inset 0px -5px 0px 5px #111111',
      }
    },
  },
  plugins: [],
}
