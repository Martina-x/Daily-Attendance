# HTML学习笔记

**·标签、元素**

HTML网页实际上就是由许许多多各种各样的HTML元素构成的文本文件,标签就是用来标记HTML元素的。位于起始标签和结束标签之间的文本就是HTML元素的内容

**·属性**

为HTML元素提供各种附加信息的就是HTML属性，它总是以"属性名=属性值"这种名值对的形式出现，而且属性总是在HTML元素的开始标签中进行定义,属性值始终被包括在引号内。

## 常用标签

1)标题<h>

2)段落<p>

3)折行(不产生新段落，并以后接文本为换行对象)<br/>

4)水平线<hr/>

5)链接<a>

```html
<a href="http://www.w3school.com.cn">
This is a link</a>
>>>This is a link
```

·href 属性 - 创建指向另一个文档的链接

·name 属性 - 创建文档内的书签

·target="_blank新窗口打开

6)图像< img >

7)注释<!--    -->

8)定义粗体文本<b>

9)定义大号字<big>

10)定义小号字<small>

11)定义着重文字<em>

12)定义斜体字<i>

13)定义加重语气<strong>

14)定义下标字<sub>

15)定义上标字<sup>

## 样式

·【相当于是style的子属性，放置在始标签尖括号中】style="background-colour:yellow"

## 表格

定义：<table>      行：<tr>       每个单元格的数据：<td>      表头：<th>

## 列表

有序：<ol>      无序：<ul>      

(每一列表项均有<li>)

## 类

块级元素<div>      行内元素<span>

（对起始标签内的内容进行处理）

#### 例1

**设置：**

.cities {

​     “类”的内容（相当于模板），每一项后加分号

}

**调用：**

```html
<div class="cities">
```

#### 例2

**设置&调用：**

```html
<style>
  span.red {color:red;}   <!-- span. 名称{“属性”内容} -->
</style>
...
<h1>My <span class="red">Important</span> Heading</h1>
```

## 头部

1)base标签为页面上的所有链接规定默认地址或默认目标（target）

```html
<base href="...">
```

2)link标签定义文档与外部资源之间的关系

3)meta标签提供关于 HTML 文档的元数据

## 表单

#### 元素

<input> 出现输入框      <select>下拉列表（下拉出现选项）       <button>可点击的按钮

#### 输入类型

text文本     password掩码    submit提交    

#### 输入属性

*value* 规定初始值      readonly     *disabled* 禁止输入（不需要值）   placeholder 提示信息

required 必填           patterrn 正则表达式
