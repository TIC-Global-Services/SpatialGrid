module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minWidth: {
        '6xl': '72rem',
      },
      colors: {
        'primary': '#D51211',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        anybody: ['Anybody', 'cursive'],
        questrial: ['Questrial', 'sans-serif'], // ✅ Added Questrial font

        telegraf: ['Telegraf']
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
    },
    
  },
  plugins: [],
};
