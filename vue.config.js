const fs = require('fs')

// const data = [
//   fs.readFileSync('./node_modules/bootstrap/scss/bootstrap.scss'),
//   fs.readFileSync('./src/styles/index.scss')
// ]

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~bootstrap/scss/bootstrap";
          @import "./src/styles/index";
        `,
        includePaths: [
          './',
          './node-modules/',
          './node_modules/bootstrap/scss/',
          './src/styles/'
        ]
      }
    }
  }
}
