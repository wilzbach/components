const fs = require('fs')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~bootstrap/scss/bootstrap";
          @import "./src/styles/index";
        `,
        includePaths: ['./', './node-modules/']
      }
    }
  }
}
