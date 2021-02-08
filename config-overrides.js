const {
  override,
  disableEsLint,
  overrideDevServer,
} = require("customize-cra");

const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '/',
        },
        secure: false,
      },
    },
  }
}

module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint()
  ),
  devServer: overrideDevServer(
    // dev server plugin
    devServerConfig()
  )
};