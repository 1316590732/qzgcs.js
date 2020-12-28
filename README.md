# qzgcs.js框架
### 一款属于全栈工程师的js框架
--------------------------------------------------
### qzgcs.js的优点和缺点
--------------------------------------------------
|优点|缺点|
|--	|--	|
|开发效率高|代码多|
|少敲重复代码|放弃性能|
--------------------------------------------------
# 案例(demo)
### 下面的代码是在控制台输出，随机生成20位长度的数字
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>欢迎使用qzgcs.js</title>
	</head>
	<body>
		  <p id="p">123</p>
	</body>
	<script type="text/javascript" src="qzgcs.js">
	
	</script>
	<script type="text/javascript">
		console.log(qzgcs().r_num(20))	
	</script>
</html>

```
## 分析案例（demo）
#### 1、在body后面引入qzgcs.js的js文件
```
<script type="text/javascript" src="qzgcs.js"></script>
```
#### 2、在qzgcs.js后面在引入一个我们自定义编写的js代码
```
<script type="text/javascript">
	console.log(qzgcs().r_num(20))	
</script>
```
#### 3、在我们编写的自定义js代码中，通过qzgcs()对象的方式，调用其内部的各种方法。
```
qzgcs().r_num(20)
```
#### 4、最终如下面代码所示，我们调用了qzgcs.js的r_num方法来实现生成随机数。
```
qzgcs().r_num(20)
```
#### 5、最终结果
```
89033664045192618373
```
# 未分类|命令详解
### 随机生成数字
|命令			|参数	|参数说明				|是否允许为空	|默认值	|备注	|返回值	|
|--				|--		|--						|--				|--		|--		|--		|
|r_num(max,min)	|max	|生成随机数字的最大值	|				|		|返回：556464		|int	|
|					|min			|生成随机数字的最小值|是						|0				|		|		|		|
### 显示当前网页的所有cookie
|命令				|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--					|--		|--			|--				|--		|--		|--		|
|doc_get_cookie()	|		|			|是				|		|返回当前网页的全部cookie		|string	|
### 显示当前网页的编码
|命令				|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--					|--		|--			|--				|--		|--		|--		|
|code()	|		|			|是				|		|返回："UTF-8"		|string	|
### 使用正则表达式判断是否包含某个字符串|此段代码有问题
|命令							|参数		|参数说明			|是否允许为空	|默认值	|备注		|返回值	|
|--								|--			|--					|--				|--		|--			|--		|
|reg(string, regexp, function)	|string		|需要查询的字符串	|				|		|返回：true	|bool	|
|								|regexp		|正则表达式			|				|		|			|		|
|								|function	|回调函数			|				|		|			|		|		|
# 浏览器对象|命令详解
### 显示浏览器访问的用户
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注																														|返回值	|
|--						|--		|--			|--				|--		|--																															|--		|
|browser_user_agent()	|		|			|是				|		|返回："Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"	|string	|
### 返回当前浏览器版本
|命令				|参数	|参数说明	|是否允许为空	|默认值	|备注																												|返回值	|
|--					|--		|--			|--				|--		|--																													|--		|
|browser_version()	|		|			|是				|		|返回："5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"	|string	|
### 显示浏览器的操作系统平台
|命令				|参数	|参数说明	|是否允许为空	|默认值	|备注			|返回值	|
|--					|--		|--			|--				|--		|--				|--		|
|browser_system()	|		|			|是				|		|返回："Win32"	|string	|
### 显示浏览器是否开启cookie
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注		|返回值	|
|--						|--		|--			|--				|--		|--			|--		|
|browser_is_cookice()	|		|			|是				|		|返回：true	|bool	|
# URL对象|命令详解
### 返回完整URL地址
|命令	|参数	|参数说明	|是否允许为空	|默认值	|备注											|返回值	|
|--		|--		|--			|--				|--		|--												|--		|
|url()	|		|			|是				|		|返回："http://www.quanzhangongchengshi.com/a/seo-ji-ben-ji-qiao.html"	|string	|
### 返回当前网站域名
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注											|返回值	|
|--				|--		|--			|--				|--		|--												|--		|
|url_domain()	|		|			|是				|		|返回："http://www.quanzhangongchengshi.com/"	|string	|
### 返回当前网站端口号
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注											|返回值	|
|--				|--		|--			|--				|--		|--												|--		|
|url_port()	|		|			|是				|		|返回：80	|string	|
### 返回URL域名后面的路径名
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注											|返回值	|
|--				|--		|--			|--				|--		|--												|--		|
|url_path()	|		|			|是				|		|返回："/a/seo-ji-ben-ji-qiao.html"	|string	|
### 返回URL的HTTP协议
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注											|返回值	|
|--				|--		|--			|--				|--		|--												|--		|
|url_protocol()	|		|			|是				|		|返回："https:"	|string	|
### 返回URL的get后面的查询,也就是？后面的内容
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注			|返回值	|
|--				|--		|--			|--				|--		|--				|--		|
|url_search()	|		|			|是				|		|返回："?aaa=23"|string	|
# 时间对象|命令详解
### 返回当前时间信息
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注			|返回值	|
|--				|--		|--			|--				|--		|--				|--		|
|date()	|		|			|是				|		|返回：Sun Dec 27 2020 19:08:49 GMT+0800 (中国标准时间)|string	|
### 返回时间戳,精确到秒,10位
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注			|返回值	|
|--				|--		|--			|--				|--		|--				|--		|
|time()	|		|			|是				|		|返回：1609067367|string	|
### 返回时间戳,精确到秒,13位
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注			|返回值	|
|--				|--		|--			|--				|--		|--				|--		|
|times()	|		|			|是				|		|返回：1609067398802|string	|
# 功能函数|命令详解
### 检测中国手机号码的合法性
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注			|返回值	|
|--				|--		|--			|--				|--		|--				|--		|
|is_iphone_number(int)	|手机号码		|			|				|		|返回：true|bool	|
### 检测是否为浮点数
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注			|返回值	|
|--				|--		|--			|--				|--		|--				|--		|
|is_float(int)	|输入浮点数		|			|				|		|返回：true|bool	|
# 计算代码运行时间|命令详解
### 开始计时代码运行时间
|命令			|参数			|参数说明|是否允许为空|默认值			|备注	|返回值		|
|--				|--				|--		|--			|--				|--		|--			|
|time_start()	|		|是			|				|		|直接调用	|无
### 结束计时代码运行时间
|命令			|参数	|参数说明	|是否允许为空	|默认值	|备注			|返回值	|
|--				|--		|--			|--				|--		|--				|--		|
|time_end()	|		|			|是				|		|返回：代码运行所消耗的时间为：2(毫秒/ms)|string	|
# 弹窗对象|命令详解
### 普通弹窗
|命令			|参数			|参数说明|是否允许为空|默认值			|备注	|返回值		|
|--				|--				|--		|--			|--				|--		|--			|
|msg(string)	|string		|弹窗内容			|				|		|	|
### 弹出可输入的对话框，返回字符串
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|msg_input(title,value)	|title	|弹窗标题	|				|		|		|string	|
|						|value	|弹窗内容	|是				|""		|		|string	|
### 弹出确定或取消的窗口
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|msg_choice(str)	|string	|弹窗内容	|				|		|返回：true		|bool	|
# 字符串对象|命令详解
### 字符串转换成大写
|命令			|参数			|参数说明|是否允许为空		|默认值			|备注	|返回值	|
|--				|--				|--		|--					|--				|--		|--		|
|str_big(string)|string	|需要操作的字符串	|				|		|ABC		|string
### 字符串转换成小写
|命令			|参数			|参数说明|是否允许为空		|默认值			|备注	|返回值	|
|--				|--				|--		|--					|--				|--		|--		|
|str_small(string)|string	|需要操作的字符串	|				|		|abc		|string
### 字符串转换成数组
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|str_2_array(string)	|string	|需要操作的字符串	|				|		|返回:["A", "B", "C"]		|string	|
### 替换字符串内容
|命令							|参数	|参数说明					|是否允许为空	|默认值	|备注		|返回值	|
|--								|--		|--							|--				|--		|--			|--		|
|str_replace(str, query, rule)	|string	|原字符串					|				|		|返回：AOC	|string	|
|								|query	|需要替换的字符串			|				|		|			|		|
|								|rule	|需要替换为什么后的字符串	|				|		|			|		|
# JSON对象|命令详解
### json字符串转换成json对象
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|json_2_objcet(string)	|string	|json字符串	|				|		|返回:Object		|Object	|
### json对象转换成json字符串
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|objcet_2_json(Object)	|Object	|json对象	|				|		|返回:string		|string	|
# 数组对象|命令详解
### 获取数组最大值
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|arr_max(array)	|array	|数组的值必须为数字	|				|		|返回:3		|string	|
### 获取数组最大值
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|arr_min(array)	|array	|数组的值必须为数字	|				|		|返回:3		|string	|
### 数组排序从小到大
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|arr_min_to_max(array)	|array	|数组的值必须为数字	|				|		|返回:["2", "3", "5"]		|string	|
### 数组排序从大到小
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|arr_max_to_min(array)	|array	|数组的值必须为数字	|				|		|返回:["5", "3", "2"]		|string	|
# 数字对象|命令详解
### 四舍五入
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|num_4_or_5(number)	|number	|需要操作的数字	|				|		|返回:4		|string	|
### 绝对值
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|num_abs(number)	|number	|需要操作的数字	|				|		|返回:4		|string	|
### 随机数
|命令					|参数	|参数说明	|是否允许为空	|默认值	|备注	|返回值	|
|--						|--		|--			|--				|--		|--		|--		|
|num_0_to_1()	|number	|需要操作的数字	|是				|		|返回:0.9089535361086836		|string	|
