// qzgcs.js
// http://www.quanzhangongchengshi.com/
// vension:1.0,
// The MIT License (MIT)
// author:chenchen
// time:Mon Dec 28 2020 21:23:55 GMT+0800 (中国标准时间)

var qzgcs = function(selector, context) {
	return new qzgcs.prototype.init(selector);
}
qzgcs.prototype = {
	init: function(selector = undefined) {
		if (selector != undefined) {
			// 判断传入的dom是否为class类型
			if (selector.indexOf('.') != -1) {
				dom = selector.split('.');
				this['dom_name'] = dom[1];
				// this['dom'] = dom[1];
				this['dom_type'] = 'class';
				return this['dom'];
			}
			// 判断传入的dom是否为id类型
			if (selector.indexOf('#') != -1) {
				dom = selector.split('#');
				this['dom_name'] = dom[1];
				this['dom'] = document.getElementById(this['dom_name']);
				this['dom_type'] = 'id';
				return this['dom'];
			}
		}

	},
	// 随机生成数字
	r_num(max, mix = 0) {
		var num = '';
		for (var i = mix; i < max; i++) {
			num += Math.floor(Math.random() * 10);
		}
		return num
	},

	// 显示当前文档的所有cookie
	doc_get_cookie() {
		return document.cookie;
	},
	// 显示当前文档编码
	code() {
		return document.inputEncoding;
	},
	// 显示HTML标签开始于结束之间的内容
	dom_content() {
		console.log(this['dom'])
		return document.getElementById(this['dom']).innerHTML;
	},
	//=====浏览器对象=====
	// 显示浏览器访问的用户
	browser_user_agent() {
		return navigator.userAgent;
	},
	// 显示浏览器版本
	browser_version() {
		return navigator.appVersion;
	},
	// 显示浏览器的操作系统平台
	browser_system() {
		return navigator.platform;
	},
	// 显示浏览器是否开启cookie
	browser_is_cookice() {
		return navigator.cookieEnabled;
	},
	//=====URL对象=====
	// 返回完整URL地址
	url() {
		return location.href;
	},
	// 返回当前网站域名
	url_domain() {
		return location.hostname;
	},
	// 返回当前网站端口号
	url_port() {
		if (location.port == '') {
			return 80;
		} else {
			return location.port;
		}
	},
	// 返回URL域名后面的路径名
	url_path() {
		return location.pathname;
	},
	// 返回URL的HTTP协议
	url_protocol() {
		return location.protocol;
	},
	// 返回URL的get后面的查询,也就是？后面的内容
	url_search() {
		return location.search;
	},
	// =====正则表达式=====
	// 使用正则表达式判断是否包含某个字符串，返回值: true
	reg(str, regexp, call) {
		var n = regexp.test(str);
		call();
	},
	// =====时间对象=====
	// 返回当前时间信息
	date() {
		return new Date();
	},
	// 返回时间戳,精确到秒,10位
	time() {
		new Date()
		let str = Date.parse(new Date()).toString();
		str = str.substr(0, 10);
		return str;
	},
	// 返回时间戳,精确到毫秒，13位
	times() {
		return new Date().getTime();
	},
	// =====常用正则表达式=====
	// 检测中国手机号码的合法性
	is_iphone_number(num = 0) {
		var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		if (!myreg.test(num)) {
			return false;
		} else {
			return true;
		}
	},
	// 检测是否为浮点数
	is_float(num = 0) {
		var myreg = /(-?\d+)(\.\d+)/;
		if (!myreg.test(num)) {
			return false;
		} else {
			return true;
		}
	},
	// =====检测js代码运行消耗的时间=====
	// 开始计时代码运行时间
	time_start() {
		new Date()
		qzgcs.prototype['tiem_start'] = new Date().getTime();
	},
	// 结束计时代码运行时间
	time_end() {
		let start_time = qzgcs.prototype['tiem_start'];
		let end_time = new Date().getTime();
		let result = end_time - start_time;
		console.log('代码运行所消耗的时间为：' + result + '(毫秒/ms)');
	},
	// =====弹窗对象=====
	// 普通弹窗
	msg(e) {
		alert(e);
	},
	// 弹出可输入的对话框，返回字符串
	msg_input(title, value = '') {
		e = prompt(title, value);
		return e;
	},
	// 弹出确定或取消的窗口
	msg_choice(str) {
		var r = confirm(str);
		if (r == true) {
			return true;
		} else {
			return false;
		}
	},
	// =====字符串对象=====
	// 字符串转换成大写
	str_big(str) {
		return str.toUpperCase();
	},
	// 字符串转换成小写
	str_small(str) {
		return str.toLowerCase();
	},
	// 字符串转换成数组
	str_2_array(str) {
		return str.split("");
	},
	// 替换字符串内容
	str_replace(str, query, rule) {
		return str.replace(query, rule);
	},
	// =====json转换=====
	// json字符串转换成json对象
	json_2_objcet(str) {
		return JSON.parse(str)
	},
	// json对象转换成json字符串
	objcet_2_json(str) {
		return JSON.stringify(str)
	},
	// =====数组=====
	// 获取数组最大值
	arr_max(arr) {
		return Math.max.apply(null, arr);
	},
	// 获取数组最小值
	arr_min(arr) {
		return Math.min.apply(null, arr);
	},
	// 数组排序从小到大
	arr_min_to_max(arr) {
		return arr.sort(function(a, z) {
			return a - z;
		});
	},
	// 数组排序从大到小
	arr_max_to_min(arr) {
		return arr.sort(function(a, z) {
			return z - a;
		});
	},

	// =====数字=====
	// 四舍五入
	num_4_or_5(num) {
		return Math.round(num);
	},
	// 绝对值
	num_abs(num) {
		return Math.abs(num);
	},
	// 随机数
	num_0_to_1() {
		return Math.random();
	},
	// =====暂未固定=====

}

qzgcs.prototype.init.prototype = qzgcs.prototype;
