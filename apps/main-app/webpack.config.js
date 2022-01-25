const nrwlConfig = require("@nrwl/react/plugins/webpack.js");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (config, context) => {
  const conf = nrwlConfig(config);
  conf.optimization.runtimeChunk = false;
  return {
    ...conf,
    plugins: [
      ...conf.plugins,
      new ModuleFederationPlugin({
        name: "main_app",
        remotes: {
          "@mfe": "mfe_app@http://localhost:4100/remoteEntry.js",
        },
        shared: ["react","react-dom"]
      }),
    ]
  };
};
