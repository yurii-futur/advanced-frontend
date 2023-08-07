import path from "path";
import { createBuildConfig } from "./config/buildConfiguration/createBuildConfig";
import { BuildMode, BuildOptions } from "./config/buildConfiguration/types/BuildTypes";

export default (env: { port: number, mode: BuildMode }) => {
  const options: BuildOptions = {
    mode: env.mode || "development",
    paths: {
      // Place where webpack get main ts code
      entry: path.resolve(__dirname, "src", "index.tsx"),
      // Route to the build folder
      build: path.resolve(__dirname, "build"),
      // Place where plugin get initial html template
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src")
    },
    port: env.port || 3000,
  };

  const config = createBuildConfig(options);

  return config;
};
