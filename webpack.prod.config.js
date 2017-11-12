const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
							options: {
								includePaths: [
									path.resolve('./node_modules')
								]
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new ExtractTextPlugin({
			filename: '[name].css'
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		}),
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: false,
			hash: true
		})
	]
})