# CSS学习笔记

### 样式

#### 背景
background-color 背景色
background-image :url（默认值是 none，表示背景上没有放置任何图像）
background-repeat 背景图像平铺（repeat-x 和 repeat-y 分别导致图像只在水平或垂直方向上重复，no-repeat 则不允许图像在任何方向上平铺）
background-position 改变图像在背景中的位置

#### 文本
colour      direction      line-height      letter-spacing设置字符间距     
text-align对齐元素中的文本
(值 left、right 和 center 会导致元素中的文本分别左对齐、右对齐和居中，justify两端对齐）
text-decoration向文本添加修饰                   text-indent缩进元素中文本的首行      
text-transform控制元素中的字母                unicode-bidi设置文本方向      
white-space设置元素中空白的处理方式      word-spacing设置字间距

#### 链接

##### 链接的四种状态：（后接大括号设置样式）（设置样式要按顺序！！）
- a:link - 未被访问
- a:visited - 已访问
- a:hover - 鼠标指针位于上方
- a:active - 被点击时

### 框模型
- 像素px（auto==20px）
- 顺序一般围绕top顺时针（即上右下左）
#### 内边距padding
- 接受长度值或百分比值，但不允许使用负值
- 顺序：上右下左  （如只有一个值，则是对应各边）
- 单独属性：padding后接"-top""-right""-bottom""left"
#### 外边距margin
- 接受任何长度单位
- 默认值是0
- 值复制：
  - 如果缺少左外边距的值，则使用右外边距的值。
  - 如果缺少下外边距的值，则使用上外边距的值。
  - 如果缺少右外边距的值，则使用上外边距的值。
- 外边距合并：当两个垂直外边距相遇时，它们将形成一个外边距，合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。
#### 边框border
- solid实线      dotted点线      dashed虚线      double双线
- 顺序：上右下左
- border-width宽度（也可自主定义thin、medium 和 thick）
- border-style默认none
#### 颜色（border-colour）
- 一次最多接受四种颜色
- 默认的边框颜色与元素的文本颜色相同，如果元素没有任何文本，那么继承其父元素的文本颜色



#### display 属性

用于定义建立布局时元素生成的显示框类型



### 定位

**1、position属性**

static正常    relative相对定位    absolute绝对定位（相对于其包含块定位）      

fixed固定定位（类似于将 position 设置为 absolute，不过其包含块是视窗本身）

**2、浮动**


### 选择器
####  ID选择器
- 语法：ID 选择器前面有一个 #
- 引用id属性中的值
- 在一个HTML文档中，只能使用一次
- 不能结合使用
#### 属性选择器（）
- 在头部设置，例：
  - [title] {color:red;}把包含标题（title）的所有元素变为红色
  - a[href] {color:red;}只对有 href 属性的锚（a 元素）应用
- 可叠加多个属性（多个中括号并行）
#### 后代选择器/包含~
左边的选择器一端包括两个或多个用空格分隔的选择器，选择器之间的空格是一种结合符，后为子代。例：
h1 em {color:red;}    “作为 h1 元素后代的任何 em 元素”（不论嵌套有多深）
#### 子元素选择器
只能选择作为某元素子元素的元素，例：
h1 > strong {color:red;}，只会选择第一个h1的strong(">"两边的空格可有可无)
#### 相邻兄弟选择器
可选择紧接在另一元素后的元素，且二者有相同父元素（最近的上一级）例：
h1 + p {margin-top:50px;}，解释为”要增加紧接在 h1 元素后出现的段落的上边距“
#### 伪类 (Pseudo-classes)
CSS 伪类用于向某些选择器添加特殊的效果
语法：selector : pseudo-class {property: value}
- first-child 伪类
   - 匹配第一个 <p> 元素：p:first-child {}
   - 匹配所有 <p> 元素中的第一个 <i> 元素：p > i:first-child {}
   - 匹配所有作为第一个子元素的 <p> 元素中的所有 <i> 元素:p:first-child i {}
#### 伪元素 (Pseudo-elements)
用于向某些选择器设置特殊效果
语法：selector:pseudo-element {property:value;}
- **伪元素**
 :first-letter 向文本的第一个字母添加特殊样式
 :first-line 向文本的首行添加特殊样式
 :before 在元素之前添加内容
 :after在元素之后添加内容





