module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brightOrange: 'hsl(31, 77%, 52%)',
        darkCyan: 'hsl(184, 100%, 22%)',
        veryDarkCyan: 'hsl(179, 100%, 13%)',
        paragraph: 'hsla(0, 0%, 100%, 0.75)',
        veryLightGray: 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        bigShoulders: ['Big Shoulders'],
        lexendDeca: ['Lexend Deca'],
      },
      width: {
        mobile: '86%',
      },
      maxWidth: {
        desk: '918px',
      },
      fontSize: {
        desk: '2.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
