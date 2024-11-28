module.exports = function override(config, env) {
    if (config.devServer) {
      config.devServer.setupMiddlewares = (middlewares, devServer) => {
        console.log('Middleware personalizado configurado');
        return middlewares;
      };
    }
    return config;
  };
  