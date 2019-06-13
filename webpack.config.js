/*node 路径模块*/
const path = require('path')

/*启动热更新 的 第二步 */
const webpack =require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, './src/main.js'),/*入口表示要打包哪个文件*/
	output: {
		path: path.join(__dirname, './dist'),/*指定打包好的文件，输出到那个目录中去*/
		filename: 'bundle.js'/*指定输出文件的名称*/
	},
	devServer: { /*配置dev-server 命令参数*/
		open: true, /*自动打开浏览器*/
		port: 3000, /*设置端口号*/
		contentBase: 'src', /*指定托管的根目录*/
		hot: true /*启用热更新 的 第一步*/
	},
	plugins: [ /*配置插件节点 */
		new webpack.HotModuleReplacementPlugin(), /*启动热更新 的 第三步*/
		new htmlWebpackPlugin({ /*创建一个在内存中生成的HTML页面插件*/
			template: path.join(__dirname, './src/index.html'),/*指定模板页面*/
			filename: 'index.html' /*指定生成的页面名称*/

		})
	],
	module: { /*配置所有第三方模块加载器*/
		rules: [ /*所有第三方模块的匹配规则*/
			{test: /\.css$/, use: ['style-loader', 'css-loader']},/*配置处理 .css 文件的第三方 loader 规则*/
			{test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},/*配置处理 .less 文件的第三方 loader 规则*/
			{test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=10240&name=[hash:8]-[name].[ext]'}, 
			/*配置css中路径文件  limit 是图片的大小, 值大于等于不会被转为base64,反之转换base64 name文件名不被转换 ext后缀名 hash哈希值*/
			{test: /\.(ttf|woff|woff2|eot|svg)$/, use: 'url-loader'}, /*配置处理字体路径*/
			{test: /\.js$/, use: 'babel-loader' ,exclude: /node_modules/} /*配置 babel 来转换高级ES6-ES7的语法 exclude排除node_modules目录，提高性能*/
		]
	}
}