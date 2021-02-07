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
- （NOT）IN等于多个可能的值之一   例：DeptCode IN (101, 103, 209)   [IN+列表]
- IS 或IS NOT 与空值（数据缺失）比较
- IS NOT DISTINCT FROM 等于值或均为空值（数据缺失）
- AS 用于在查看结果时更改字段名称   例：SELECT employee AS 'Receivables'

**2.查询**
SQL中最常见的操作是查询，它是通过陈述性SELECT语句执行的。SELECT从一个或多个表或表达式中检索数据。

1）*SQL法则（三段式）*
SELECT col,col,col,*（列名）【找什么属性(找所有属性加 星号)】
FROM table（表名） 【从哪找】
WHERE col 条件 【条件是什么】

2）SELECT是最复杂的SQL语句，可选的关键词和子句包括：
- FROM 子句指定了选择的数据表。FROM子句也可以包含JOIN二层子句来为数据表的连接设置规则

- WHERE 子句后接一个比较谓词以限制返回的行。WHERE 子句仅保留返回结果里 使得比较谓词的值为TRUE  的行（即用来描述哪些行应该进入结果，类比成筛子）

  具体就是通过 condition条件 限定这些行的属性满足某些具体条件，如：
```
  SELECT...
  FROM...
  WHERE condition
      AND/OR another_condition
      AND/OR...;
```
  (注：这里的 condition 都是描述属性列的，根据表格具体描述)


  - 筛选数字类型
  - 筛选字符串类型（同样要用‘’  ‘’）

| Operator（操作符） | **Condition（解释）**         | **Example（例子）**                                          |
| ------------------ | ----------------------------- | ------------------------------------------------------------ |
| =                  | 完全等于                      | col_name = "abc"                                             |
| != or <>           | 不等于                        | col_name != "abcd"                                           |
| LIKE               | 没有用通配符等价于 =          | col_name LIKE "ABC"                                          |
| NOT LIKE           | 没有用通配符等价于 !=         | col_name NOT LIKE "ABCD"                                     |
| %                  | 通配符，代表匹配0个以上的字符 | col_name LIKE "%AT%"<br/>(matches "AT", "ATTIC", "CAT" or even "BATS") "%AT%" 代表AT 前后可以有任意字符 |
| _                  | 和% 相似，代表1个字符         | col_name LIKE "AN_"<br/>(matches "AND", but not "AN")        |

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

- ORDER BY 子句指明将哪个字段用作排序关键词，以及排序顺序，如果无此子句，那么返回结果的顺序不能保证有序

   我们可以用 ORDER BY col_name 排序的语法来让结果按一个或多个属性列做排序：
   SELECT column, another_column, … 
   FROM mytable WHERE condition(s) 
   ORDER BY column ASC/DESC;

   - ORDER BY col_name 这句话的意思就是让结果按照 col_name 列的具体值做 ASC升序 或 DESC 降序，对数字来说就是升序 1，2，3，... 或降序 ... 3,2,1 . 对于文本列，升序和降序指的是按文本的字母序。

   - LIMIT和 OFFSET子句通常和ORDER BY 语句一起使用，当我们对整个结果集排序之后，我们可以 LIMIT来指定只返回多少行结果 ,用 OFFSET来指定从哪一行开始返回，例：
     ```
     limited查询
     SELECT column, another_column, …
     FROM mytable
     WHERE condition(s)
     ORDER BY column ASC/DESC
     LIMIT num_limit OFFSET num_offset
     ```



- HAVING 子句后接一个谓词 来过滤从GROUP BY子句中获得的结果，由于其作用于GROUP BY子句之上，所以聚合函数也可以放到其谓词中。


