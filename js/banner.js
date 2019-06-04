
 $(function(){
    function ImgMove(){
    this.oImgBox = $('.imgBox');
    this.oShow = $('.banner');
    this.pre = $('.banner p').eq(0);
    this.next = $('.banner p').eq(1);
    this.radiusBox = $('.radiusBox');
    this.count = 0;
    this.distance = $('.imgBox img').width();
    this.timer = null;
    this.init();
}
ImgMove.prototype = {
    init : function(){
        $('.imgBox img').first().clone().appendTo($('.imgBox'));
        this.img = $('.imgBox img');
        this.addLi();
        this.autoPlay();
        this.eventBind();
    },
    imgBoxMove : function(){
        this.oImgBox.stop(true).animate({
            left : -this.distance * this.count
        },500)
    },
    preImg : function(){
        if(this.count <= 0){
            this.oImgBox.css('left',-(this.img.length- 1 ) * this.distance);
            this.count = this.img.length - 2 ;
        }else{
           
            this.count -- ;
        }
        this.imgBoxMove();
        this.changeStyle();
    },
    nextImg : function(){
        if(this.count >= this.img.length - 1){
            this.oImgBox.css('left',0);
            this.count = 1;
        }else{
            this.count ++ ;
        }
        this.imgBoxMove();
        this.changeStyle();
    },
    autoPlay : function(){
        var _this = this ;
        this.timer = setInterval(function(){
            _this.nextImg();
        },5000)
    },
    addLi : function(){
        for(var i = 0 ; i < $('.imgBox img').length - 1 ; i++){
            var createLi = $('<li></li>');
            createLi.appendTo(this.radiusBox);
        }
        // 第一个添加类名
        $('.radiusBox li:first').addClass('active');
    },
    changeStyle : function(){
        $('.radiusBox li').eq(this.count > $('.imgBox img').length - 2? 0 : this.count).addClass('active').siblings().removeClass('active');
    },
    radiusChange : function(index){
        $('.radiusBox li').eq(index).addClass('active').siblings().removeClass('active');
    },
    eventBind : function(){
        var _this = this ;
        this.pre.click(function(){
            _this.preImg();
        })
        this.next.click(function(){
            _this.nextImg();
        })
        this.oShow.mouseover(function(){
            clearInterval(_this.timer)
        })
        this.oShow.mouseout(function(){
            _this.autoPlay();
        })
        $('.radiusBox li').mouseover(function(index){
            var index = $(this).index();
            _this.radiusChange(index);
            _this.count = index;
            _this.imgBoxMove();
        })
    }
}
new ImgMove();

})