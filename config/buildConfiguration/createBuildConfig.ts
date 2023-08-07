import path from "path";
import { Configuration as WebpackConfiguration } from "webpack";;
import { buildLoaders } from "./buildLoaders";
import { buildPugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/BuildTypes";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export const createBuildConfig = (
  options: BuildOptions
): Configuration => {
  const { mode, paths, port } = options;
  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(options),
    devtool: "inline-source-map",
    devServer: {
      port,
      historyApiFallback: true,
    },
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPugins(paths.html),
  };
};
