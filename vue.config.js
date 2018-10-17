module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./src/styles/index";
        `,
        includePaths: ['./', './node_modules/']
      }
    }
  }
}
