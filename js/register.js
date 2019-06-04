// 正则验证

// var
//     tishi = document.querySelector('.tishi'),
//     zhuceBtn = document.querySelector('.zhuceBtn')
//     ;



// 验证码的验证
// yanzhneg.onblur = function () {
//     var yanzhnegVal = yanzhneg.value;
//     var reg = /^\d{6}$/;
//     var yzTest = reg.test(yanzhnegVal);
//     if (yzTest == true) {
//         tishi.innerHTML = '验证通过';
//     } else {
//         tishi.innerHTML = '请输入正确的验证码';
//     }
// }


// 登录密码
// var sr = document.querySelector('.shuru'),
//     sc = document.querySelector('.queren');

// sc.onblur = function () {
//     var srValue = sr.value,
//         scValue = sc.value;
//     var reg = /^\w{6,10}$/;
//     var pwdTest = reg.test(srValue);
//     if (pwdTest == true) {
//         if (srValue == scValue) {
//             tishi.innerHTML = '密码正确';
//         } else {
//             alert('请重新确认密码')
//         }
//     } else {
//         tishi.innerHTML = '请输入正确格式的密码';
//     }
// }


// 勾选
// var ckBox = document.querySelector('.ckBox');
// zhuceBtn.onclick = function () {
//     if (ckBox.checked != true) {
//         tishi.innerHTML = '请接受条款';
//     }
// }



// 数据库验证手机号
function Register() {
    this.yanzhengma = document.querySelector('.yanzhengma');
    this.shuchu = document.querySelector('.queren');
    this.phoneNum = document.querySelector('.phoneNum');
    this.tishi = document.querySelector('.tishi');
    this.tishi = document.querySelector('.tishi');
    this.tishi = document.querySelector('.tishi');
    this.sr = document.querySelector('.shuru');
    this.sc = document.querySelector('.queren');
    this.ckBox = document.querySelector('.ckBox');
    this.zhuceBtn = document.querySelector('.zhuceBtn');
    this.yanzhneg = document.querySelector('.yanzhneg');
    this.phoneNum = document.querySelector('.phoneNum');
    this.shuru = document.querySelector('.shuru');
    this.init();
}

Register.prototype = {
    init: function () {
        this.eventBind();
    },
    getDate: function () {
        var phoneNumVal = this.phoneNum.value,
            shuruVla = this.shuru.value;
        axios({
            method: 'get',
            url: 'http://localhost/php/IDO/php/register.php',
            data: {
                phone: phoneNumVal,
                pwd: shuruVla
            }

        }).then((data) => {
            if (data.state == '0') {
                this.tishi.innerHTML = data.info;
            } else {
                alert(data.info);
                //切换到登陆窗口
                location.href = "http://localhost/php/IDO/html/login.html";
            }
        }).catch((info) => {
            console.log(info);
        })
    },

    phoneTest: function () {
        var _this = this;
        var phoneNumVal = this.phoneNum.value;
        var reg = /^(13|15|16|17|18|19)\d{9}$/;
        var phoneTest = reg.test(phoneNumVal);
        if (phoneTest == true) {
            _this.getDate();
        } else {
            this.tishi.innerHTML = '请输入正确的手机号';
        }
    },
    yzTest: function () {
        var _this = this;
        var yanzhnegVal = this.yanzhneg.value;
        var reg = /^\d{6}$/;
        var yzTest = reg.test(yanzhnegVal);
        if (yzTest == true) {
            this.tishi.innerHTML = '验证通过';
            _this.phoneTest();
        } else {
            this.tishi.innerHTML = '请输入正确的验证码';
        }
    },
    pwdTest: function () {
        var _this = this;
        var srValue = this.sr.value,
            scValue = this.sc.value;
        var reg = /^\w{6,10}$/;
        var pwdTest = reg.test(srValue);
        if (pwdTest == true) {
            if (srValue == scValue) {
                this.tishi.innerHTML = '密码正确';
                _this.yzTest();
            } else {
                alert('请重新确认密码')
            }
        } else {
            this.tishi.innerHTML = '请输入正确格式的密码';
        }
    },
    xuanzhong: function () {
        var _this = this;
        if (this.ckBox.checked != true) {
            this.tishi.innerHTML = '请接受条款';
        } else {
            _this.pwdTest();
        }
    },
    eventBind: function () {
        var _this = this;
        this.zhuceBtn.onclick = function () {
            _this.xuanzhong();
        }
    }
}
new Register();