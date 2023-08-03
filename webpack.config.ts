import path from "path";
import { createBuildConfig } from "./config/build/createBuildConfig";
import { BuildOptions } from "./config/build/types/BuildTypes";

const options: BuildOptions = {
  mode: "development",
  paths: {
    // Place where webpack get main ts code
    entry: path.resolve(__dirname, "src", "index.ts"),
    // Route to the build folder
    build: path.resolve(__dirname, "build"),
    // Place where plugin get initial html template
    html: path.resolve(__dirname, "public", "index.html"),
  },
};

const config = createBuildConfig(options);

export default config;
