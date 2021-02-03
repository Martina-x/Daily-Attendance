# JavaScript学习笔记

JavaScript是属于 HTML 和 Web 的编程语言，对网页行为进行编程

## JS使用

### <script> 标签

在 HTML 中，JavaScript 代码必须位于 <script> 与 </script> 标签之间

## 输出

1、JavaScript 显示方案

- 使用 window.alert() 写入警告框
- 使用 document.write() 写入 HTML 输出
- 使用 innerHTML 写入 HTML 元素
- 使用 console.log() 写入浏览器控制台
  2、使用 innerHTML
  如需访问 HTML 元素，JavaScript 可使用* *document.getElementById(id) =**方法。
  id 属性定义 HTML 元素。
  3、使用 document.write()：便于且仅用于测试

## 语句

**关键词:**
break          continue    跳出循环并在顶端开始    
debugger    停止执行 JS，并调用调试函数。
do ... while    执行语句块，并在条件为真时重复代码块
function    声明函数
switch    标记需被执行的语句块，根据不同的情况
try ... catch    对语句块实现错误处理
var    声明变量（可逗号分隔一次多个，可跨行）(var x,y ; var x = 7)

## 注释

单行注释以 // 开头
多行注释以 /* 开头，以 */ 结尾

## 运算符
% 系数    ++ 递加    --
===等值等型
&& 与    || 或    ! 非
**类型运算符：**
typeof 返回变量的类型（数组对应object）
instanceof 返回 true，如果对象是对象类型的实例
**位运算符：**（处理 32 位的数，结果会被转换回 JavaScript 数）

|  &   |  \|  |  ~   |  ^   |      <<      |      >>      |     >>>      |
| :--: | :--: | :--: | :--: | :----------: | :----------: | :----------: |
|  与  |  或  |  非  | 异或 | 零填充左位移 | 有符号右位移 | 零填充右位移 |

1、0互非 , 填充默认0

## 数据类型
布尔值：true，false        数组：["",""]        对象：{xxx:"",xxxxx:""}    
- Null（相当于nothing）被看做不存在的事物，数据类型是对象
- Underfined没有值的变量的值和类型
- 空值（“ ”），类型是string

## 函数
1、定义：function +函数名+（参数1，参数2）{
                         要执行的代码  
                         }
2、调用：函数名(参数1，参数2)
【定义顺序可在调用之后】【局部变量局部使用】

## 对象
1、this关键词，指的是它所属的对象,即其拥有者。如下，this 指的是“拥有” fullName 函数的 person 对象（因为 person 对象“拥有” fullName 方法），this.firstName 的意思是 this 对象的 firstName 属性（”.“看作”的“，）

```html
var person = {
  firstName: "Bill",
  lastName : "Gates",
  id       : 678,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

>>>Bill Gates
```
- 在方法中，this 指的是所有者对象。
- 单独的情况下，this 指的是全局对象（object Window）。
- 在函数中，this 指的是全局对象。
- 在函数中，严格模式下，this 是 undefined。
- 在事件中，this 指的是接收事件的元素。
(像 call() 和 apply() 这样的方法可以将 this 引用到任何对象)

2、访问对象属性
对象名称.属性名称  或  对象名称.["属性名称"]
3、访问对象方法
对象名称.方法名称（）

4、如果通过关键词 "new" 来声明 JavaScript 变量，则该变量会被创建为对象。如：
```html
var x = new String();        // 把 x 声明为 String 对象
```
5、对象无法比较
var x = new Number(500);             
var y = new Number(500);
// (x == y) 为 false

## 案件
1、HTML 事件是发生在 HTML 元素上的“事情”，通过 JavaScript 代码，HTML 允许您向 HTML 元素添加事件处理程序
2、常见事件
| onchange          | onclick          | onmouseover              | onmouseout           | onkeydown    | onload                 |
| ----------------- | ---------------- | ------------------------ | -------------------- | ------------ | ---------------------- |
| HTML 元素已被改变 | 点击了 HTML 元素 | 把鼠标移动到 HTML 元素上 | 把鼠标移开 HTML 元素 | 按下键盘按键 | 浏览器已经完成页面加载 |

## 字符串
1、长度（调用内建属性length）
2、特殊字符(\转义字符)【相当于将字符串中的字符非特殊化】
| \ '  | \ '' | \ \  |
| ---- | ---- | ---- |
| '    | ''   | \    |
| \b   | 退格键  |
| ---- | ---------- |
| \f   | 换页       |
| \n   | 新行(字符串中的换行只需一个反斜杠) |
| \r   | 回车       |
| \t   | 水平制表符 |
| \v   | 垂直制表符 |
3、字符串可以是对象
var x = "Bill";     // typeof x 将返回 string
var y = new String("Bill");     // typeof y 将返回 object

4、字符串方法：

**（1）查找字符串**
- indexOf()    返回字符串中指定文本*首次*出现的索引（位置）
  lastIndexOf()    方法返回指定文本在字符串中*最后一次*出现的索引
  - （如果未找到文本， indexOf() 和 lastIndexOf() 均返回 -1）
  - （第二个参数为起始位置。第三个参数为起始位置后的查询范围）
  - （IndexOf是从左向右查，LastIndexOf是从右向左查，不管是IndexOf还是LastIndexOf，索引序列都是固定的从左到右从0开始）
  - （计数每个字符，包括空格！！！）

**（2）检索字符串**
- search()  （与search()相等）
  - search() 方法无法设置第二个开始位置参数。
  - indexOf() 方法无法设置更强大的搜索值（正则表达式） 

**（3）提取字符串**
- slice(start, end)   
   - 如果省略第二个参数，则该方法将裁剪字符串的剩余部分] 
   - [最后一位从-1开始]
- substring()
   - 类似于slice()，但不接受负的索引
   - 如果省略第二个参数，则将裁剪字符串的剩余部分
- substr() 
   - 类似于 slice()，不同之处在于第二个参数规定被提取部分的长度
   - 如果省略第二个参数，则将裁剪字符串的剩余部分

**（4）替换字符串内容**
- replace(被替、替)  
  - 对大小写敏感，除非使用正则表达式  /字符串/i
  - 默认只替换第一个，除非使用正则表达式  /字符串/g

**（5）转换为大写和小写**
-  toUpperCase()    把字符串转换为大写
- toLowerCase()     把字符串转换为小写

**（8）提取字符串字符**
- charAt(序列)    返回字符串中指定下标（位置）的字符串
- 属性访问(只读)：str[ ]
- charCodeAt序列()    返回字符串中指定索引的字符 unicode 编码


**（7）其他**
- concat()     连接两个或多个字符串（下列两个语句等效）
 var text = "Hello" + " " + "World!";
 var text = "Hello".concat(" ","World!");
- String.trim()删除字符串两端的空白符
- alert（）弹出一个对话框
- split(”分隔号“)    将字符串转换为数组

## 数字
- 科学计数法  var x = 123e5;    // 12300000 
-相加  （按顺序组合，不得跳过合并）
   - 数+数=数
   - 字符串+字符串=字符串级联（“10”+“20”=“1020”）
   - 字符串+数=字符串级联（10+“20”=“1020”）
- 乘/除/减：字符串可以拥有数字内容（“10”*“10”=100）
- NaN - 非数值 
   - isNaN() 来确定某个值是否是数（返回true）
   - typeof NaN;             // 返回 "number"
- toString(n) 把数输出为n进制
- 数值可以是对象：
var x = 123;
var y = new Number(123);
// typeof x 返回 number
// typeof y 返回 object

##数值方法
使原始值也能拥有方法和属性
- toString() 以字符串返回数值


