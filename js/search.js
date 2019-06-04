$('.searchBtn').click(function () {
    $('.searchall').css('display', 'block')
    // var scrollTop = document.documentElement.scrollTop;
    // if(scrollTop >= 80){
    //     $('.searchall').css('display','none')
    // }
})
$('.searchClose').click(function () {
    $('.searchall').css('display', 'none')
})





function ringChange() {
    this.changeImgBox = $('.changeImgBox');
    this.removeBox = $('.removeBox');
    this.lBtn = $('.ringBtn').eq(0);
    this.rBtn = $('.ringBtn').eq(1);
    this.oLi = $('.removeBox li');
    this.count = 0;
    this.distance = $('.removeBox li img').width() * 2;
    $('.removeBox').css('width', 'this.oLi.length');
    this.init()
}
ringChange.prototype = {
    init: function () {
        //整合模块
        this.bindEvent();
    },

    //图片的移动方法。
    toImg: function () {
        this.removeBox.stop(true).animate({
            left: -this.distance * this.count
        }, 500)
    },

    nextImg: function () {
        if (this.count >= this.oLi.length - 4) {
            this.count = this.oLi.length - 4;
            // this.rBtn.css('display','none')
        } else {
            this.count++;
        }
    },
    preImg: function () {
        if (this.count <= 0) {
            this.count = 0
        } else {
            this.count--;
        }
    },
    bindEvent: function () {
        var _this = this;
        this.rBtn.click(function () {
            _this.nextImg();
            _this.toImg();
            console.log(_this.distance);
        })
        this.lBtn.click(function () {
            _this.preImg();
            _this.toImg();
        })
    }

}
new ringChange();