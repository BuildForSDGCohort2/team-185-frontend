const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://team-185-backend.herokuapp.com',
      changeOrigin: true,
    })
  );
};