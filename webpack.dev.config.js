const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const DotenvPlugin = require('dotenv-webpack')

const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
	devServer: {
		contentBase: path.resolve(process.cwd(), 'public'),
		watchContentBase: true,
		hot: true,
		port: 3000,
		historyApiFallback: true,
		inline: true,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							includePaths: [
								path.resolve('./node_modules')
							]
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new DotenvPlugin()
	]
})
