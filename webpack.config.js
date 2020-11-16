const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC = path.resolve(__dirname, 'src');
const CORE = path.resolve(__dirname, 'src/core');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const fileName = ext => isProd ? `bundle.[hash].${ext}` : `bundle.${ext}`;

module.exports = {
	context: SRC,
	entry: ['@babel/polyfill', './index.js'],
	mode: isProd ? 'production' : 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: fileName('js'),
	},
	resolve: {
		alias: {
			'@': SRC,
			'@core': CORE,
		},
	},
	devtool: isProd ? false : 'source-map',
	devServer: {
		port: 9000,
		hot: isDev,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'images/apple.png' },
				{ from: 'images/trash.png' },
			],
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: fileName('css'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
	      test: /\.m?js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env'],
	        },
	      },
	    },
	    {
	    	test: /\.(png|jpe?g|gif)$/i,
	    	use: [
	    		{
	    			loader: 'file-loader',
	    			options: {
	    				name: '[path][name].[ext]',
	    			},
	    		},
	    	],
	    },
		],
	},
};
