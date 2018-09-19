const fs = require('fs')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('./node_modules/bootstrap/scss/bootstrap.scss'),
        includePaths: ['./node_modules/bootstrap/scss/', './node-modules', './']
      }
    }
  }
}
