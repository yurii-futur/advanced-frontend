import path from "path";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/BuildTypes";

export const createBuildConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths } = options;
  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: "inline-source-map",
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPugins(paths.html),
  };
};
