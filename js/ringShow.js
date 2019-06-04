
function ChangeImg(){
    this.imgBox = $('.ringBox');
    this.ringShow = $('.ringShow');
    this.lBtn = $('.btn img').eq(0);
    this.rBtn = $('.btn img').eq(1);
    this.img = $('.imBox img');
    this.count = 0;
    this.distance = $('.imBox img').width();
    this.init()
}
ChangeImg.prototype = {
    init : function(){
        //整合模块
        
        this.bindEvent();
    },

    //图片的移动方法。
    toImg : function(){                 
        this.imgBox.stop(true).animate({
            left: -this.distance * this.count
        },500)
    },

    nextImg : function(){
        if(this.count >=  this.img.length - 5){
            this.count = this.img.length - 5;
            this.rBtn.css('display','none')
        }else{
            this.count++;
        }
    },
    preImg : function(){
        if(this.count <= 0){
            this.count = 0
            this.lBtn.css('display','none')
        }else{
            this.count--;
        }
    },
    bindEvent : function(){
        var _this = this;
       this.rBtn.click(function(){
            _this.nextImg();
            _this.toImg();
       })
       this.lBtn.click(function(){
            _this.preImg();
            _this.toImg();
       })
    }

}
new ChangeImg();