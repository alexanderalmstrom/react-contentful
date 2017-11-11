const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
	devServer: {
		contentBase: path.resolve(process.cwd(), 'build'),
		watchContentBase: true,
		hot: true,
		port: 3000,
		historyApiFallback: true
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
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
})