module.exports = {
  purge: [ './public/*.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brightOrange: 'hsl(31, 77%, 52%)',
        darkCyan: 'hsl(184, 100%, 22%)',
        veryDarkCyan: 'hsl(179, 100%, 13%)',
        paragraph: 'hsla(0, 0%, 100%, 0.75)',
        veryLightGray: 'hsl(0, 0%, 95%)',
        link: 'hsl(228, 45% , 44% )',
      },
      fontFamily: {
        bigShoulders: ['Big Shoulders'],
        lexendDeca: ['Lexend Deca'],
      },
      width: {
        mobile: '86%',
      },
      maxWidth: {
        mobile: '550px',
        desk: '57.375rem',
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
