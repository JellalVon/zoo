# zoo
## 数据库配置

### 导入
从`src/main/sql`文件夹中导入数据库

### 配置
在`src/main/resources/`目录下新建配置文件`jdbc.properties`
```
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/database?useUnicode=true&characterEncoding=utf8
jdbc.username=user
jdbc.password=password
```
`database`、`user`、`password`改为本地配置。