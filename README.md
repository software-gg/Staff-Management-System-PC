# 员工考勤系统

## 项目启动和测试
### 项目必备软件
- **安装MongoDB**。检测方法：在浏览器地址栏中输入`localhost:27017`，如果出现一行小字说明MongoDB已经安装成功
- **安装git**。检测方法：在任一文件夹下右键，是否有`git bash`这个选项。如果有该选项，则安装成功。
- **安装node**。检测方法：在`cmd`中输入`node --version`，是否会打印出版本号信息。如果打印，则安装成功。
### 项目启动
#### 导入数据库模式
- 进入`/Staff-Management-System-Mobile/backend/MongoDB_Backup`文件夹中的`README.txt`文件，在cmd中使用`mongorestore`命令导入数据库模式。
#### 启动项目的后端程序
- **安装依赖包**。进入`/Staff-Management-System-Mobile/backend`文件夹，右键选择`git bash`进入git命令行，在其中输入命令`npm install`安装依赖包。如果在安装过程中出现报错信息，则需要再次输入该命令，直到没有报错信息。
- **启动后端程序**。进入该文件夹下的`server`目录，右键进入git命令行，输入命令`node server.js`以启动整个项目的后端程序。
#### 启动项目的PC端程序
- **安装依赖包**。进入`/Staff-Management-System-PC/sms`，右键进入git命令行，输入命令`npm install`安装依赖包。
- **启动前端程序**。安装完成后，在git命令行中继续输入命令`npm start`。浏览器会自动弹出一个窗口。在地址栏中输入`localhost:3000/login`即可进入员工考勤系统PC端登录界面。
#### 启动项目的手机端程序
- **进入微信开发者工具**。打开微信开发者工具，打开`/Staff-Management-System-Mobile/WeChat-3`项目后即可进行调试
- **真机调试**。在小程序上方的菜单栏中选择`真机调试`按钮。通过手机扫描二维码后，即可在手机上调试微信小程序。（注：目前整个小程序还处于调试阶段，其它非项目人员不能通过微信搜索功能搜索到该小程序）
- **注意**：
	- 需要将该文件夹下的`app.js`文件中的第46行修改为`http://自己主机的IP地址:9093`。否则无法在手机端上调试小程序。
	- 由于程序中并没有使用到知晓云插件，进入项目后，如发现有`插件未授权使用`错误，可以删除`app.json`文件中的第21行到第26行。
### 测试方法
- **常用账号密码**：
	- 员工：用户名41621302，密码123，手机号123
	- 部门主管：用户名41621328，密码123，选择身份 为“主管”
	- 经理：用户名admin，密码admin，选择身份为“经理”

## 软件使用说明
### 使用前说明
- **在PC端登录经理账号**：在系统使用之前，数据库中已经保存了一个经理账号。用以下信息以经理身份登录系统：工号：admin，密码：admin，身份：经理。
- **经理添加员工**：经理可利用系统在线一个个添加和编辑员工，也可以通过Excel表格的方式快捷地向系统中导入员工。**请注意**：为了保证Excel表格的正确导入，**系统会校验Excel表头的格式是否与系统中要求的格式相同**。为了成功导入，需要操作者首先导出一下Excel表格，然后在这张表格的基础之上进行员工信息的编辑操作。如果员工没有修改密码，那么添加员工时所设置的初始密码即为员工的登录密码。
- **经理添加部门**：经理进入“部门管理”页面，添加公司的部门并任职和免职主管。任职主管之后，该职员即可通过PC端以部门主管的身份登录系统。
- **部门主管添加整体班次安排**：各部门主管登录部门主管账号，进入“整体安排”页面，为该部门的所有员工批量添加工作班次安排。
- **部门主管调整班次安排**：部门主管可进入“细致安排”页面，为整体安排进行细致班次安排。
- **经过以上步骤后，系统即可正常进行员工考勤和管理！**
### 员工使用说明
- **登录与注销**：通过小程序码扫描等方式进入“员工考勤系统-员工端”小程序，利用自己的用户名、密码和手机号登录系统。如果希望注销系统，则可以点击“我的”导航栏中的“退出登录”。
- **打卡**：登录成功后，系统直接进入打卡界面。员工可点击下方导航栏中的“我的工作”进行二维码+地理定位打卡；或者点击“人脸考勤”进行人脸识别打卡，但前提是需要提前到公司录入自己的人脸。打卡成功后，可在“我的工作”页面的“工作情况”中看到打卡情况；部门主管和经理也可以通过“工作情况”界面查看到员工的考勤信息。
	- **二维码+地理定位打卡**：点击“点我扫码”进入扫码界面，扫码成功后，当系统返回打卡成功的信息时即可打卡成功
	- **人脸考勤**：点击“人脸考勤”中的“进入人脸识别”，将人脸对准摄像头后即可进行打卡。
- **查询工作安排和工作情况**：员工的工作情况和工作安排查询均可在“我的工作”页面进行。
	- **查询**：查询是按天查询，可以通过点击日历中的任何一天对这一天的工作安排和工作情况进行查询。
	- **自动上下班提醒**：员工可在工作安排查询界面设置是否自动上下班提醒。
- **编辑申请**：员工可进入“我的”页面，点击“编辑申请”按钮即可进入申请编辑页面。在这里，员工需要填写申请类型（加班、事假、病假）、起始时间和结束时间和申请理由，点击确定后即可提交。
- **查询申请状态**：员工可进入“我的申请”页面查询待审核申请、已通过申请和未通过申请。
	- **待审核申请**：员工可对待审核申请进行取消操作。
	- **已通过申请**：员工可对已通过的事假病假申请进行销假操作。
	- **未通过申请**：员工可对未通过申请进行删除操作。
- **查看消息**：员工可进入“我的消息”界面查看到提醒加班的消息。若员工在下班后一小时到两小时之间打卡，那么系统将发送消息提示员工可以申请加班。如果员工设置了自动上下班提醒，系统将通过发送消息的方式在员工上班前一小时和下班前一小时提醒员工进行打卡，员工也将在“我的消息”界面查看到该提醒。点击打卡提醒的消息之后，系统将自动跳转到打卡界面；点击提醒加班消息后，系统将自动跳转到申请编辑界面，并自动设置“申请类型”这个参数为“加班”。
- **修改个人信息**：员工可进入“我的”，点击“编辑个人信息”修改信息，修改完成后点击“保存”按钮后即可完成信息修改操作。
- **修改密码**：员工进入“我的”，点击“修改密码”进行密码修改，修改完成后点击“修改并重新登录”。系统将跳转到登录界面。此时员工可通过新密码登录系统。

### 部门主管使用说明
- **登录和注销**：打开PC端浏览器，输入 “http://考勤系统域名/login” 即可进入“员工考勤系统-主管端”系统的登录界面，利用自己的用户名、密码登录系统（职位一栏选择“主管”）。如果希望注销系统，则可以点击左侧导航栏的“安全退出”。
- **审批申请**：部门主管可点击左侧导航栏中的“加班审批”和“请假审批”进入审批界面。界面中将以列表的形式展现该部门员工的请假申请情况和加班申请情况。部门主管可点击操作栏中的“详情”按钮查看申请详情；通过点击操作栏中的“通过”或“回绝”进行申请审批。审批成功后，也可通过点击操作栏中的“撤销”撤销刚才的审批。审批完成后，员工也可通过微信小程序查询到申请状态，部门主管可在“系统消息”中查看到变更该员工班次安排的通知。
- **批量安排工作**：部门主管可点击左侧导航栏中的“整体安排”进入到相应界面。界面将按月显示该部门所有员工的整体班次安排。
	- **在线添加编辑安排**：部门主管可通过点击左上角的“添加工作安排”后，点击“编辑”按钮即可编辑安排。完成后点击“完成”，并点击“安排员工”按钮批量添加员工。此时，进入细致安排页面后即可看到整体安排已经全部添加到细致安排中了。这样部门主管就可以对每个员工的班次安排进行细微调整了。
- **细致安排工作**：部门主管可点击“细致安排”
进入到细致安排界面，对每位员工每个月的各项工作安排进行细致调整。
	- **永久调整和临时调整**：部门主管可点击右侧复选框进行选择。选择之后，系统将会在每月一号自动根据每一项安排是永久调整还是临时调整导入所有过往安排。
	- **在线添加编辑安排**：调整方法类似于调整整体安排的方法。
	- **通过导入导出Excel编辑安排**：可点击右上角的“导入安排”和“导出安排”进行导入导出安排操作。此时导入导出的是当月该部门的所有安排。
	- **可通过Excel实现复制粘贴工作安排、存储导入过往的工作安排等最高需求。**
	- **按员工显示工作安排**：通过右上角的搜索功能即可实现该需求：在左侧输入员工关键字，在右侧选择“姓名”，点击查询后，系统即可显示该员工当月的所有细致工作安排。
- **查询工作情况**：部门主管可点击“工作情况”查询员工的打卡时间、打卡状态等等。
- **员工管理**：部门主管可点击“员工管理”查询员工的个人信息，但是增删改查员工只能由经理完成。
- **部门管理**：部门主管可点击“部门管理”查看本部门信息，但不能进行删除、添加和修改操作。

### 经理使用说明
- **功能与部门主管相近，但以下功能是经理的特权**
- **添加临时性加班**：经理可点击“整体安排”的左上角的“添加临时性加班”按钮，为公司各部门的所有职员添加一个临时性加班。
- **增删改员工**：经理可进入“员工管理”界面对员工的信息进行增删改操作。操作步骤类似于细致班次安排的操作。
	- **通过导入导出Excel编辑员工**：可点击右上角的“导入员工”和“导出员工”进行导入导出员工。注意：系统对导入导出的Excel有格式要求，需要在导出员工的基础之上修改员工信息，之后再将Excel导入到系统中。
- **增删改部门**：经理进入“部门管理”界面，对部门进行编辑。
	- **任职免职主管**：经理可通过编辑部门的主管信息进行任职主管和免职主管的操作。在部门管理界面任职免职主管就可以保证每个部门只有一个主管。

## 其它
- **统计代码行**：可以使用 `git ls-files | xargs wc -l` 命令。已去除`package.json`等配置文件和框架文件
	 + 微信小程序代码行：约5000
	 + PC前端代码行：约5500
	 + 后端代码行：约2200
	 + 总计代码行：约12700
