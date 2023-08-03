import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const buildPugins = (
  htmlPath: string
): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
  ];
};
