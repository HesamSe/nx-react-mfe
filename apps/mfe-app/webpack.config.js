const nrwlConfig = require("@nrwl/react/plugins/webpack.js");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = (config, context) => {
  const conf = nrwlConfig(config);
  return {
    ...conf,
    plugins: [
      ...conf.plugins,
      new ModuleFederationPlugin({
        name: "mfe_app",
        filename: "remoteEntry.js",
        exposes: {
          "./Button": "./src/exposes/Button",
        }
      })
    ],
  }
};
