

// 登录页面判断
function Login() {
    this.userName = document.querySelector('.userName');
    this.pwd = document.querySelector('.pwd');
    this.logBtn = document.querySelector('.logBtn');
    this.tishi = document.querySelector('.tishi');
    this.init();
}
Login.prototype = {
    init: function () {
        this.eventBind();
    },
    getData: function () {
        var _this = this;
        var uName = this.userName.value,
            uPwd = this.pwd.value;
        axios({
            method: 'get',
            url: 'http://localhost/php/IDO/php/login.php',
            data: {
                phone: uName,
                pwd: uPwd
            }
        }).then(function (data) {
            if (data.state == '1') {
                alert(data.info);
                location.href = "http://localhost/php/IDO/index.html";
            } else {
                _this.tishi.innerHTML = data.info;

            }
        }).catch(function (info) {
            console.log(info);
        })
    },
    eventBind: function () {
        this.logBtn.addEventListener('click', this.getData.bind(this))
    }
}
new Login();



var str = `
        <p class="regesterTitle">I Do会员登录</p>
        <input type="text" value placeholder="用户名/手机号*" class="userName info">
        <div class="yanzheng">
            <p class="drag"></p>
            <p class="dragTxt">滑动模块至右侧</p>
            <a href="" class="bgShow"></a>
        </div>
        <div class="yanzhengma infoBox">
            <input type="text" class="yanzhneg" placeholder="验证码*">
            <input type="text" class="yanzhengBtn" placeholder="获取验证码">
        </div>
        <div class="loginStyle">
            <p class="zhLog">账号密码登录</p>
            <p class="toscan">第三方账号登录<span></span></p>
        </div>
        <p class="regBtn logBtn">登录</p>
        <span class="tishi"></span>
`
var str1 = `
         <p class="regesterTitle">I Do会员登录</p>
        <input type="text" value placeholder="用户名/手机号*" class="userName info">
        <div class="yanzheng">
            <p class="drag"></p>
            <p class="dragTxt">滑动模块至右侧</p>
            <a href="" class="bgShow"></a>
        </div>
        <input type="text" value placeholder="请输入密码" class="pwd info">
        <div class="loginStyle">
            <p class="yzLog">验证码登录</p>
            <p>忘记密码</p>
            <p class="toscan">第三方账号登录<span></span></p>
        </div>
        <p class="regBtn logBtn">登录</p>
        <span class="tishi"></span>
`
function YzLogin() {
    this.yzLog = document.querySelector('.yzLog');
    this.loginCon = document.querySelector('.loginCon');
    this.toscan = document.querySelector('.toscan');
    this.erweima = document.querySelector('#erweima');
    this.hide = document.querySelector('.hide');
    this.init();
}
YzLogin.prototype = {
    init: function () {
        this.eventBind();
    },
    getData: function () {
        var _this = this;
        var uName = this.userName.value,
            uPwd = this.pwd.value;
        axios({
            method: 'get',
            url: 'http://localhost/php/IDO/php/login.php',
            data: {
                phone: uName,
                pwd: uPwd
            }
        }).then(function (data) {
            if (data.state == '1') {
                alert(data.info);
                location.href = "http://localhost/php/IDO/index.html";
            } else {
                _this.tishi.innerHTML = data.info;

            }
        }).catch(function (info) {
            console.log(info);
        })
    },
    eventBind: function () {
        var _this = this;
        // 点击忘记密码   切换到验证码登录版面
        this.yzLog.onclick = function () {
            _this.loginCon.innerHTML = str;
            this.zhLog = document.querySelector('.zhLog');
            this.zhLog.onclick = function () {
                _this.loginCon.innerHTML = str1;
            }
        }
        // 点击第三方账号登录  切换到二维码页面
        this.toscan.onclick = function () {
            _this.erweima.style.display = 'block';
        }
        this.hide.onclick = function () {
            _this.erweima.style.display = 'none';
        }
    }
}
new YzLogin();