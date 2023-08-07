import webpack from "webpack";
import { BuildOptions } from "./types/BuildTypes";

export const buildResolvers = (
  options: BuildOptions
): webpack.ResolveOptions => {
  return {
    preferAbsolute: true,
    extensions: [".tsx", ".ts", ".js"],
    modules: [options.paths.src, "node_modules"],
    alias: {},
    mainFiles: ["index"],
  };
};
