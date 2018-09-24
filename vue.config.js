module.exports = {
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
