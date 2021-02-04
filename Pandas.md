# Pandas

## 一、文件读取与写入

### 1.读取(pd.read_格式（‘路径.格式’））

- head()

1）csv格式

```python
df = pd.read_csv('路径.csv')
df
```

2)txt格式

```python
df_txt = pd.read_table('路径.txt') 
#可设置sep分隔符参数
df_txt
```

3）xls或xlsx格式
```python
df_excel = pd.read_excel('路径.xlsx')
df_excel
```

### 2、写入（df.to_格式（‘路径.格式’））
1）csv格式
```python
df.to_csv('路径.csv')
#df.to_csv('data/new_table.csv',index=False) #保存时除去行索引
```
2)xls或xlsx格式
```python
df.to_excel('路径.xlsx', sheet_name='Sheet1')
```

## 二、基本数据结构
### 1、Series
对于一个Series，其中最常用的属性为值（values），
索引（index），名字（name），类型（dtype)
1)创建一个Series
```python
s = pd.Series(np.random.randn(5),index=['a','b','c','d','e'],name='这是一个Series',dtype='float64')
s
```
2)访问Series属性
Series名+ . +属性名(如：s.index)

3)取出某一个元素（如：s['a']）
4)调用方法
s.mean( )   值的平均数

### 2.DataFrame
1）创建一个DataFrame
```python
import pandas as pd
df =                       pd.DataFrame({'col1':list('abcde'),'col2':range(5,10),'col3':[1.3,2.5,3.6,4.6,5.8]},
                 index=list('一二三四五'))
df

>>>    col1	col2  col3
   一	a	5	 1.3
   二	b	6	 2.5
   三	c	7	 3.6
   四	d	8	 4.6
   五	e	9	 5.
```
2)从DataFrame取出一列为Series
```python
df['col1']

>>>   一    a
      二    b
      三    c
      四    d
      五    e
      Name: col1, dtype: object
```

- type(df)    >>>pandas.core.frame.DataFrame
- type(df['col1'])   >>>pandas.core.series.Series

3)修改行或列名（columns/index={'原名'：'新改名'}）
如：将col1改为new_col1;将一改为one
```python
df.rename(index={'一':'one'},columns={'col1':'new_col1'})
```
4）调用属性和方法（同series）
- df.index    >>>Index(['一', '二', '三', '四', '五'], dtype='object')
- df.columns   >>>Index(['col1', 'col2', 'col3'], dtype='object')
- df.values   >>>array([['a', 5, 1.3],
                 ['b', 6, 2.5],
                 ['c', 7, 3.6],
                 ['d', 8, 4.6],
                 ['e', 9, 5.8]], dtype=object)
- df.shape   >>>(5, 3)
- df.mean()   >>> col2    7.00
             col3    3.56
             dtype: float64

5)索引对齐特性
```python
df1 = pd.DataFrame({'A':[1,2,3]},index=[1,2,3])
df2 = pd.DataFrame({'A':[1,2,3]},index=[3,1,2])
df1-df2 #由于索引(index)对齐对应，因此结果不是0

>>>      A
    1	 -1
    2	 -1
    3     2

6）列的删除与添加
a)对于删除而言，可以使用drop函数或del或pop 
- df.drop(index/columns='行/列名'))
- df['col1']=[1,2,3,4,5]
  del df['col1']
b)pop方法直接在原来的DataFrame上操作，且返回被删除的列，与python中的pop函数类似
- df['col1']=[1,2,3,4,5]
  df.pop('col1')
c)可以直接增加新的列，也可以使用assign方法
- df1['B']=list('abc')   
  #多了一列按索引为1、2、3的a\b\c
- df1.assign(C=pd.Series(list('def')))
  >>>   A	B	C
    1	1	a	e
    2	2	b	f
    3	3	c	NaN
  #assign左右两边的索引不一样，这里出现NaN是因为索引对齐   特性，'def’的索引分别对应[0,1,2]，因此C列索引3为NaN。
  #但assign方法不会对原DataFrame做修改(即df1无C列)
  df.assign(score=np.random.randint(60,100,size=3))
  #注意有"pd."和"np."的使用区别
  

