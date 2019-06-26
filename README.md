# Staff-Management-System-PC
## 项目必备软件
- **安装MongoDB**。检测方法：在浏览器地址栏中输入`localhost:27017`，如果出现一行小字说明MongoDB已经安装成功
- **安装git**。检测方法：在任一文件夹下右键，是否有`git bash`这个选项。如果有该选项，则安装成功。
- **安装node**。检测方法：在`cmd`中输入`node --version`，是否会打印出版本号信息。如果打印，则安装成功。
## 项目启动
### 导入数据库模式
- 进入`/Staff-Management-System-Mobile/backend/MongoDB_Backup`文件夹中的`README.txt`文件，在cmd中使用`mongorestore`命令导入数据库模式。
### 启动项目的后端程序
- **安装依赖包**。进入`/Staff-Management-System-Mobile/backend`文件夹，右键选择`git bash`进入git命令行，在其中输入命令`npm install`安装依赖包。如果在安装过程中出现报错信息，则需要再次输入该命令，直到没有报错信息。
- **启动后端程序**。进入该文件夹下的`server`目录，右键进入git命令行，输入命令`node server.js`以启动整个项目的后端程序。
### 启动项目的PC端程序
- **安装依赖包**。进入`/Staff-Management-System-PC/sms`，右键进入git命令行，输入命令`npm install`安装依赖包。
- **启动前端程序**。安装完成后，在git命令行中继续输入命令`npm start`。浏览器会自动弹出一个窗口。在地址栏中输入`localhost:3000/login`即可进入员工考勤系统PC端登录界面。
### 启动项目的手机端程序
- **进入微信开发者工具**。打开微信开发者工具，打开`/Staff-Management-System-Mobile/WeChat-3`项目后即可进行调试
- **真机调试**。在小程序上方的菜单栏中选择`真机调试`按钮。通过手机扫描二维码后，即可在手机上调试微信小程序。（注：目前整个小程序还处于调试阶段，其它非项目人员不能通过微信搜索功能搜索到该小程序）
- **注意**：
	- 需要将该文件夹下的`app.js`文件中的第46行修改为`http://自己主机的IP地址:9093`。否则无法在手机端上调试小程序。
	- 由于程序中并没有使用到知晓云插件，进入项目后，如发现有`插件未授权使用`错误，可以删除`app.json`文件中的第21行到第26行。
## 测试方法
- **常用账号密码**：
	- 员工：用户名41621302，密码123，手机号123
	- 部门主管：用户名41621328，密码123，选择身份 为“主管”
	- 经理：用户名admin，密码admin，选择身份为“经理”
## 其它
- **统计代码行**：可以使用 `git ls-files | xargs wc -l` 命令。已去除`package.json`等配置文件和框架文件
	 + 微信小程序代码行：约4600
	 + PC前端代码行：约5500
	 + 后端代码行：约2200
	 + 总计代码行：约12300
