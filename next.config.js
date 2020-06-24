// module.exports = {
// 	webpack: (config, options) => {
// 		config.module.rules.push({
// 			test: /\.(png|jpg|jpeg|svg|gif)$/,
// 			use: [
// 				{
// 					loader: 'file-loader',
// 					options: {
// 						name: '[name].[contenthash].[ext]',
// 						outputPath: 'static',
// 						publicPath: '_next/static',
// 					},
// 				},
// 			],
// 		})
//
// 		return config
// 	},
// }
const WidthImages = require('next-images')
module.exports = WidthImages({
	webpack (config, options) {
		return config
	},
})
