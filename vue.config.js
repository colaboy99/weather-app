module.exports = {
  //publicPath: process.env.NODE_ENV === "production" ? "/weather-app/" : "/",

  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "@/assets/scss/website.scss"; 
                `,
      },
    },
  }
};
