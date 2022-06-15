module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ['Great Vibes'],
        title: ['Cormorant'],
        body: ['Montserrat'],
      },
    },
    colors: {
      primary1: '#C39F97',
      primary2: '#A96E6C',
      primary3: '#934C47',
      secondary1: '#E5DDD5',
      secondary2: {
        30: 'rgba(206, 185, 165, 0.5)',
        100: '#CEB9A5',
      },
      secondary3: '#885E4B',
      pink: '#e11d48',
    },
  },
  variants: {
    extend: {},
    width: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
