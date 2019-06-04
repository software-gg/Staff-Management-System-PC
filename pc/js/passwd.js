function save() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    var newpass = document.getElementById("newpasswd");

    if (username.value == "") {

        alert("请输入用户名");

    } else if (pass.value == "") {

        alert("请输入原密码");

    } else if (newpass.value == "") {

        alert("请输入新密码")
    } else if (username.value == "admin" && pass.value == "123456") {

        pass.value = newpass.value;

    } else {

        alert("请输入正确的用户名和密码！")

    }
}