module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~bootstrap/scss/functions";
          @import "~bootstrap/scss/variables";
          @import "~bootstrap/scss/mixins";
          @import "./src/styles/index";
        `,
        includePaths: ['./', './node_modules/', './node_modules/bootstrap']
      }
    }
  }
}
