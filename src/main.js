/*导入css*/
import './css/index.css'
import './less/index.less'

/*导入bootstrap 默认从 node_modules 文件夹加载,可省略*/
import 'bootstrap/dist/css/bootstrap.css' 

/*导入 jquery*/
/*import ** from *** 是ES6中导入模块的方式*/
import $ from 'jquery'
/* const $ = require('jquery')*/

$(function () {
	// $('*').css({'margin': 0, 'padding': 0})
	// $('li').css('listStyle', 'none')
	$('li:odd').css('backgroundColor', 'green')
	$('li:even').css('backgroundColor', function () {
		return '#' + 'D97634'
	})
}) 	

/*class 关键字，是ES6中实现面向对象编程的方式*/
/*在 webpack 中，默认只能处理一部分 ES6 的新语法,
class 关键字属于高级语法，webpack 处理不了，需要安装第三方(babel) loader 转换
安装1： cnpm install babel-core babel-loader babel-plugin-transform-runtime -D
安装2： cnpm i babel-preset-env babel-preset-stage-0 -D
*/
class Person {
	/* static 关键字定义静态属性*/
	static info = {name: 'boke', age: 18}
	nickname = 'gonefour_boke'
}

/*实例一个Person对象*/
var p1 = new Person()
// p1.nickname = 'boke-boke'

/*访问静态属性*/
console.log(Person.info)
/*内置属性*/
console.log(p1)