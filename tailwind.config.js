module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
          'instaHome': "url('../TestProject/public/img/InstagramLogo.png')"
      }),
      width: {
        'sloganHome': '25rem',
        'imgHome' : '32rem',
        'inputHome' : '21rem'
       },
      images: {
         'coverImage1': "url('../img/coverImg1.png')",
         'coverImage2': "url('../img/coverImg2.png')",
         'coverImage3': "url('../img/coverImg3.png')",
         'registImage': "url('../img/registerImg.png')",
         'signUpImage': "url('../img/signUpImg.png')",
      },
      backgroundColor: theme => ({
          ...theme('colors'), 
          'primary': '#3E1149',
          'secondary': '#000000',
          'terciary': '#E487FB',
      }),
      textColor:{
          'primary': '#3E1149',
          'secondary': '#000000',
          'terciary': '#E487FB',
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};