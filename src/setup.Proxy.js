const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/jwt-auth/v1/token', {
      target: 'https://velhovestido.000webhostapp.com',
      changeOrigin: true,
    })
  );
};
