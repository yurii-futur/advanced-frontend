import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack";

export const buildPugins = (
  htmlPath: string
): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    })
  ];
};
