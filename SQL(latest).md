# 数据库

## 一、基本概念

### 1.数据库

是存放数据的仓库，用户可以对文件中的数据运行新增、截取、更新、删除等操作

所谓“数据库”系以一定方式储存在一起、能予多个用户共享、具有尽可能小的冗余度、与应用程序彼此独立的数据集合

### 2.数据库管理系统

是为管理数据库而设计的电脑软件系统，一般具有存储、截取、安全保障、备份等基础功能 ，主要分类：

**2.1关系数据库**
关系数据库是创建在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。
典型代表有：MySQL、Oracle、Microsoft SQL Server、Access及PostgreSQL等
**2.1非关系型数据库 NoSQL**
非关系型数据库是对不同于传统的关系数据库的数据库管理系统的统称。与关系数据库最大的不同点是不使用SQL作为查询语言。
典型代表有：BigTable（Google）、Cassandra、MongoDB、CouchDB；
还包括键值数据库：Apache Cassandra（Facebook）、LevelDB（Google）

- 数据库由若干张表(Table)组成，一个Table存储一个类别的数据，每一行是一条数据，每一列是这种数据的一个属性； Table就像一个二维的表格，列(columns)是有限固定的，行(rows)是无限不固定的

### 数据库架构
 数据库的架构可以大致区分为三个概括层次：
内层：最接近实际存储体，亦即有关数据的实际存储方式。
外层：最接近用户，即有关个别用户观看数据的方式。
概念层：介于两者之间的间接层

# SQL
## 一、概念
SQL（Structured Query Language 结构化查询语句）是一种特定目的程序语言，用于管理关系数据库管理系统（RDBMS），或在关系流数据管理系统（RDSMS）中进行流处理。
SQL基于关系代数和元组关系演算，包括一个数据定义语言和数据操纵语言。SQL的范围包括数据插入、查询、更新和删除，数据库模式创建和修改，以及数据访问控制。

## 二、SQL语法
**1.运算符**
- <>不等于    例：Dept <> 'Sales'
- （NOT）BETWEEN在一个范围内   例： Cost BETWEEN 100 AND 500
- LIKE字符模式匹配   例：First_Name LIKE 'Will&'
- （NOT）IN等于多个可能的值之一   例：DeptCode IN (101, 103, 209)   [IN+列表]  (如果需要比较生日则写作‘2000-01-01’)
- IS 或IS NOT 与空值（数据缺失）比较
- IS NOT DISTINCT FROM 等于值或均为空值（数据缺失）
- AS 用于在查看结果时更改字段名称   例：SELECT employee AS 'Receivables'

**2.DDL数据定义语言**
2.1  创建库
create database 【if not exists】 库名；

2.2  删除库
drop database 【if not exists】 库名；

2.3  查询库
show database ；

2.4  创建表

```
crate table 表名（ 

            字段名称  字段类型  [字段约束],
            ...
            字段名称  字段类型  [字段约束]

）；
```
-  字段约束

①主键（非空+唯一）primary key 

②外键 

③唯一 unique

④非空 not null

⑤默认为空

- PK - Belongs to primary key作为主键
- NN - Not Null非空
- UQ - Unique index不能重复
- BIN - Is binary column存放二进制数据的列
- UN - Unsigned data type 无符号数据类型（例如-500 to 500替换成0 - 1000,需要整数形数据）
- ZF - Fill up values for that column with 0’s if it is numeric填充0位（例如指定3位小数，整数18就会变成18.000）
- AI - Auto Incremental自增长
- G - Generated column基于其他列的公式生成值的列

```
#将其他表的数据复制到另一个（新）表里
CREATE TABLE table_a
SELECT...
...
```

2.5  查看表
        1.SHOW CREATE TABLE 表名;
        2.DESC tbname;（排列）

2.6  修改表（字段名、字段约束、字段类型）

①修改字段类型 change

alter table 表名 change  name(原名)  newname（修改后的名字）[新的类型];

如：alter table stu change name newname varchar(40) not null;

②修改字段类型 modify

alter table 表名 modify name varchar(20);

③添加字段  add

alter table 表名 add score(字段名)  字段类型；

④删除字段  drop

alter table 表名 drop 字段名   字段类型；

⑤修改表名 rename

alter table 表名 rename 新表名；

2.7  删除表

drop table 表名



**3.DML 数据操纵语言**

3.1  添加数据 insert   load source replace
（1）单表插入单行
```
INSERT INTO table_name （col1，col2...）
#表名后可以添加需要加值的列名，便于一一对应，如果不加则默认依次填入每一列
VALUES(
    值1,
    值2
    ...);
#VALUES子句中按列依次输入要添加的数据
#字符串要用单引号或双引号，字符串之间逗号隔开
#若值为无则直接输入NULL
#类似id这样的列一般会有自动递增的属性设定，故可直接写作DEFAULT(默认值)，此时输入显式值（即具体数值）则会报错，因为id需唯一
#如果第一行表名后有指定列名则可不用写DEFAULT（会自动跳过）
#DEFAULT也有可能是NULL（具体看设定）
#上下可以乱序但要对应
```
（2）单表插入多行
例：
```
insert into stu values("003","wangwu",20,"woman"),
      ("004","zhaoliu",21,"man"),
      ("005","kaixin",17,"woman"),
      ("006","gaoxin",16,"woman");
```
#若是有插入的有删除了的行，那么id一样会被记住，不会重新递增

（3）多表插入
- 内置函数的使用（查看最新。。。）
```
INSERT INTO table_a(col1,col2...)
VALUES(value1，value2...);
SELECT LAST_INSERT_ID()
#会得到表a中的最新id数
```
- 利用上述查到的最新id插入子记录
```
INSERT INTO table_b(col3,col4...)
VALUES(LAST_INSERT_ID()，value4...),
      (LAST_INSERT_ID()，value5...) 
```
相当于将在table_a中新加入的内容（特别是id）同步到table_b中，还另外加入了table_b中其他列的数据


load 大批量插入
   replace insert



3.2  删除数据 delete  ，truncate
```
DELETE FROM table_name 
where condition
#若无where，则全删
```

   
   
   delete from stu where id = "005";



3.3  修改数据 UPDATE
（1）更新单个/多个数据
```
UPDATE table_name 
set col_name = newvalue (可值可表达式)
WHERE...;
```

(2)在更新语句中使用子查询
```sql
以id为例，要查id
UPDATE...
SET...
WHERE id =
      (SELECT id
      FROM table_name
      WHERE condition)
#如果子查询语句的值不止一个，那么要将 id 后的 = 换成 IN ！！
```
3.4  查询

- 先选中某个表（USE datatable_name）

3.4.1基本语法

SQL中最常见的操作是查询，它是通过陈述性SELECT语句执行的。SELECT从一个或多个表或表达式中检索数据。

1）*SQL法则（三段式）*
SELECT col,col,col,*（列名）【找什么属性(找所有属性加 星号)】
FROM table（表名） 【从哪找】
WHERE col 条件 【条件是什么】

2）SELECT是最复杂的SQL语句，可选的关键词和子句包括：

- select 后选取的column为了防止混淆，可以写作  表名.列名

- FROM 子句指定了选择的数据表。

  - 简化表名：FROM orders o（直接加在后面，则后面提及orders时都用o代替）【JOIN 同理】【一处简化后，前面的也要简化】
- WHERE 子句后接一个比较谓词以限制返回的行。WHERE 子句仅保留返回结果里 使得比较谓词的值为TRUE  的行（即用来描述哪些行应该进入结果，类比成筛子）

  具体就是通过 condition条件 限定这些行的属性满足某些具体条件，如：
```
  SELECT...
  FROM...
  WHERE (NOT) condition
      AND/OR another_condition
      AND/OR...;
```
  (注：这里的 condition 都是描述属性列的，根据表格具体描述)

- AND 比 OR 优先，需要适当适用括号以满足运算顺序 


  - 筛选数字类型
  - 筛选字符串类型（同样要用‘’  ‘’）

| Operator（操作符） | **Condition（解释）**      | **Example（例子）**                                          |
| ------------------ | -------------------------- | ------------------------------------------------------------ |
| =                  | 完全等于                   | col_name = "abc"                                             |
| != or <>           | 不等于                     | col_name != "abcd"                                           |
| LIKE               | 没有用通配符等价于 =       | col_name LIKE "ABC"                                          |
| NOT LIKE           | 没有用通配符等价于 !=      | col_name NOT LIKE "ABCD"                                     |
| %                  | 通配符，表示任意数量的字符 | col_name LIKE "%AT%"<br/>(matches "AT", "ATTIC", "CAT" or even "BATS") "%AT%" 代表AT 前后可以有任意字符 |
| _(下划)            | 和% 相似，代表1个字符      | col_name LIKE "AN_"<br/>(matches "AND", but not "AN")        |

“=”是照本宣科，“like”是模式相似

- DISTINCT 语法(使不重)

  (i)介绍：我们拿之前的 Movies表来说，可能很多电影都是同一年Year发布的，如果你想要按年份排重，一年只能出现一部电影到结果中， 你可以用 DISTINCT 关键字来指定某个或某些属性列唯一返回。写作：DISTINCT Year

  (ii)语法：
  选取出唯一的结果的语法

```
  SELECT  DISTINCT  column, another_column, …
  FROM mytable 
  WHERE condition(s)
```

  (iii)因为 DISTINCT语法会直接删除重复的行, 我们还会  学习GROUP BY 语句， GROUP BY 也会返回唯一的行，不过可以对具有相同的 属性值的行做一些统计计算，比如：求和.

- GROUP BY 子句用于将若干含有相同值的行合并。GROUP BY通常与SQL聚合函数连用，或者聚合函数也可以放到其谓词中。

- ORDER BY 【结果排序】子句指明将哪个字段用作排序关键词，以及排序顺序，如果无此子句，那么返回结果的顺序不能保证有序

   我们可以用 ORDER BY col_name 排序的语法来让结果按一个或多个属性列做排序：
   SELECT column, another_column, … 
   FROM mytable WHERE condition(s) 
   ORDER BY column ASC/DESC;

   - ORDER BY col_name 这句话的意思就是让结果按照 col_name 列的具体值做 ASC升序 或 DESC 降序，对数字来说就是升序 1，2，3，... 或降序 ... 3,2,1 . 对于文本列，升序和降序指的是按文本的字母序。

-  LIMIT和 OFFSET子句通常和ORDER BY 语句一起使用，当我们对整个结果集排序之后，我们可以 LIMIT来指定只返回多少行结果 ,用 OFFSET来指定从哪一行开始返回，例：
   
  ```
     limited查询
     SELECT column, another_column, …
     FROM mytable
     WHERE condition(s)
     ORDER BY column ASC/DESC
     LIMIT num_limit OFFSET num_offset
  ```

​      若输入LIMIT 6,3   其中6是偏移量，相当于取“7”，“8”，“9”  

- HAVING 子句后接一个谓词 来过滤从GROUP BY子句中获得的结果，由于其作用于GROUP BY子句之上，所以聚合函数也可以放到其谓词中。

（3）用JOINs进行**多表联合查询**
主键(primary key), 一般关系数据表中，都会有一个属性列设置为主键。主键是唯一标识一条数据的，不会重复复（想象你的身份证号码)。一个最常见的主键就是auto-incrementing integer(自增ID，每写入一行数据ID+1, 当然字符串，hash值等只要是每条数据是唯一的也可以设为主键.
借助主键（或其他唯一性的属性），我们可以把两个表中具有相同主键ID的数据连接起来（因为一个ID可以简要的识别一条数据，所以连接之后还是表达的同一条数据）（你可以想象一个左右连线游戏）。

```
用INNER JOIN 连接表的语法
SELECT column, another_table_column, …
FROM mytable （主表）
INNER JOIN another_table （要连接的表）
    ON mytable.id = another_table.id (想象一下刚才讲的主键连接，两个相同的连成1条)
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;
```
- 通过ON条件描述的关联关系;INNER JOIN 先将两个表数据连接到一起. 两个表中如果通过ID互相找不到的数据将会舍弃。此时，你可以将连表后的数据看作两个表的合并，SQL中的其他语句会在这个合并基础上 继续执行
- INNER JOIN 可以简写做 JOIN. 两者是相同的意思，但我们还是会继续写作 INNER JOIN 以便和后面的 LEFT JOIN， RIGHT JOIN等相比较.
- *理解：“FROM my_table”相当于以···作为原表（主），“JOIN another——table”（字面翻译）加入一个新表，“ON···”意指新表的加入是在···的基础上*

(4)外连接（OUTER JOINs）
```
用LEFT/RIGHT/FULL JOINs 做多表查询
SELECT column, another_column, …
FROM mytable
INNER/LEFT/RIGHT/FULL JOIN another_table
    ON mytable.id = another_table.matching_id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;
```
- 工作原理：（在表A连接 B）
    - LEFT JOIN保留A的所有行，不管有没有能匹配上B 反过来
    - RIGHT JOIN则保留所有B里的行
    - FULL JOIN 不管有没有匹配上，同时保留A和B里的所有行
- 这些Join也可以写作 LEFT OUTER JOIN, RIGHT OUTER JOIN, 或 FULL OUTER JOIN, 和 LEFT JOIN, RIGHT JOIN, and FULL JOIN 等价.

(5)加入自己
*理解：相当于在自己的表里寻找对应的项，然后进行替代，比如‘人名-号码-人名’*
例：获得每个员工及其对应的经理名字

```
SELECT
    e.employee_id,
    e.first_name,
    m.first_name AS manager
FROM Employees e
JOIN Employees m
    ON e.reports_to = m.employee_id
    #加入表m的条件是：repoets_to 与employee_id实现号码对齐，然后提取表m中的employee_id（员工id）对应的员工人名（即repoets_to对应的员工人名），用人名取代表e中reports_to中的员工id（可以理解为在表m中根据ON语句一条一条抽取所需经理信息即m.employee_id对应的人名first_name安放到manager列）
    #但这个操作不能看到经理的工号等个人信息，因为ON语句的写法只能返回有经理的人，要想实现这个操作要进行左连接（在JOIN前加LEFT），以
```


- 如果ON语句后要连接的列名一样则可以用一个更简短的语句代替，如：

-- ON orders.customer_id = customers.customer_id

-- USING (customer_id)

(6)NATURAL JOIN自然联接
```
SELECT *
FROM table-a
NATURAL JOIN table_b
```
在两个具有一对或多对同名的列的表中挑具有一样的值的（那一排的）数据，合并成一行
【较难控制】

（7）CROSS JOIN交叉联接 
相当于即将每一个表格每一行搭配两两搭配

```
显性语法：
FROM table_a
CROSS JOIIN table_b
隐性语法：
FROM table_a , table_b
```

(8)在查询中使用表达式（相当于公式）
在SQL中可以用col_name的地方，都可以用表达式 来指定对属性进行一定的计算或处理
例：假设有一个col_name是出生日期，现在要求SQL返回当前的年龄，这就可以用一个时间计算表达式对 出生日期做计算得到年龄。表达式可以对 数字运算，对字符串运算，也可以在表达式中只包含常量不包含col_name(如：SELECT 1+1）

```
包含表达式的例子
SELECT  particle_speed / 2.0 AS half_particle_speed (对结果做了一个除2）
FROM physics_data
WHERE ABS(particle_position) * 10.0 >500
            （条件要求这个属性绝对值乘以10大于500）;
```
当我们用表达式对col属性计算时，很多事可以在SQL内完成，这让SQL更加灵活，但表达式如果长了则很难一下子读懂。所以SQL提供了AS关键字， 来给表达式取一个别名.
```
AS使用别名
SELECT col_expression AS expr_description, …
FROM mytable;
```
实际上AS不仅用在表达式别名上，普通的属性列甚至是表（table）都可以取一个别名，这让SQL更容易理解.
```
属性列和表取别名的例子
SELECT column AS better_column_name, …
FROM a_long_widgets_table_name AS mywidgets
INNER JOIN widget_sales
  ON mywidgets.id = widget_sales.widget_id;
```

(9)在查询中进行统计
```
对全部结果数据做统计
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
```
- 常见统计函数

| Function                                  | Description                                                  |
| ----------------------------------------- | ------------------------------------------------------------ |
| **COUNT(*****)**, **COUNT(***column***)** | 计数！COUNT(*) 统计数据行数，COUNT(column) 统计column非NULL的行数. |
| **MIN(***column***)**                     | 找column最小的一行                                           |
| **MAX(***column***)**                     | 找column最大的一行.                                          |
| **AVG(***column*)                         | 对column所有行取平均值.                                      |
| **SUM(***column***)**                     | 对column所有行求和.                                          |

- 分组统计
```
用分组的方式统计
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
GROUP BY column

```
(先条件筛选后分组)

```
用HAVING进行筛选
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
FROM mytable
WHERE condition
GROUP BY column
HAVING group_condition
```
(对分组完的数据再筛选)
[HAVING和WHERE语法一样]

(10)Unions
在两个select语句中单独一行写UNION，会返回两个select结果内容合并的表格(返回列数需相等)（第一个查询用于命名）
- 在最后才作排序命令



SELECT 后的函数名括号内不加条件！！！！相当于直接计数了

3.4.2  执行顺序

```
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY ncolumn ASC/DESC
    LIMIT count OFFSET COUNT
```

Tips:
1)计算公式中的便量名用原始column名或原始数据名（如COUNT(column)）
2)多列合并的数据：column之间不能靠单纯加运算符号得到最后的值，最后还是要前缀公式
   单列对应的数据：column之间直接加运算符号即可（本来就是一一对应）
3)基本表成后在附加条件进行筛选需要用having语句而非where
如：下述例2中的“过滤只有···”步骤
4)select后可用新列名
5)select后可直接添加新的字符串，比如添加‘Active’会返回以Active为列名，Active为内容的column；若输入‘Active’ AS status则会返回以status为列名，Active为内容的column
（定义）新状态！！！
6)半冒号“；”用于终止选择语句（换行即可开始下一串SELECT），但是返回的结果是最新的语句内容

3.4.3  复杂事件！！！
例1：**出现对于同一条件的不同判断和体现**

按角色分组算出每个角色按有办公室和没办公室的统计人数(列出角色，数量，有无办公室,注意一个角色如果部分有办公室，部分没有需分开统计） 


```
SELECT Role,case when building is null then "0" 
else "1" end as 有无办公室 , COUNT(Name)
FROM Employees
GROUP BY Role,有无办公室
```

模板：case when column_condition then ... when column_condition then ... else ... end as column_newname
...
(GROUP BY column_newname,...)



例2：**出现对于同一条件的不同判断和体现**

按角色和就职年份统计人数,年份按0-3，3-6，6-9这种阶梯分组，最后按角色+阶梯分组排序 

```
select Role,case when Years_employed<3 then "0-3"
when Years_employed<6 then "3-6"
else "6-9" end as "就职年份"
,count(*)
from Employees
group by Role,"就职年份" 
```



例3：**HAVING的应用环境**

按导演分组计算销售总额,求出平均销售额冠军（统计结果过滤掉只有单部电影的导演，列出导演名，总销量，电影数量，平均销量)

```
SELECT Director,SUM(Domestic_sales+International_sales) as 销售总额,
COUNT(Director) as 电影数量,
SUM(Domestic_sales+International_sales)/COUNT(Director) as 平均销量
FROM Movies
LEFT JOIN Boxoffice
ON Movies.Id = Boxoffice.Movie_id
GROUP BY Director
HAVING 电影数量>1
ORDER BY 平均销量 DESC
LIMIT 1
```



例4：**SELECT语句的“相互嵌套”**

找出每部电影和单部电影销售冠军之间的销售差，列出电影名，销售额差额

*理解：先在旧表2（ boxoffice）中选取单部电影销售额的最大值（将这个值连同 select···from··· 用括号括起来，表示 select 完成），再定义新表中新列的计算模式*

```
SELECT Title,
(select max(international_sales+domestic_sales) from boxoffice)
-(international_sales+domestic_sales)
AS 销售额差额
FROM Movies
LEFT JOIN Boxoffice
ON Movies.Id =  Boxoffice.Movie_id
```

另：WHERE price < (SELECT AVG(price) FROM Book)
*理解：需要提取不能直接得出的（要靠函数公式）数据时需要用到 select from*

