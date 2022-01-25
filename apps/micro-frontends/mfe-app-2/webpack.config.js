const nrwlConfig = require("@nrwl/react/plugins/webpack.js");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = (config, context) => {
  const conf = nrwlConfig(config);
  conf.optimization.runtimeChunk = false;
  return {
    ...conf,
    plugins: [
      ...conf.plugins,
      new ModuleFederationPlugin({
        name: "mfe_app_2",
        filename: "remoteEntry.js",
        exposes: {
          "./Button": "./src/exposes/Button",
        },
        shared: {
          react: {
            eager: true,
          },
        }
      })
    ],
  }
};
