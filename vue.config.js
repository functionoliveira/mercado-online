const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
        alias: {
          Helpers: path.resolve(__dirname, 'src/helpers/'),
          Components: path.resolve(__dirname, 'src/components/'),
          Layout: path.resolve(__dirname, 'src/layout/'),
          Pages: path.resolve(__dirname, 'src/pages/')
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
  }
}