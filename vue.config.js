module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~bootstrap/scss/functions";
          @import "./src/styles/functions";
          @import "~bootstrap/scss/variables";
          @import "./src/styles/variables";
          @import "~bootstrap/scss/mixins";
          @import "./src/styles/mixins";
        `
      }
    }
  }
}
