window.onscroll = function(){
    var  scrollTop = document.documentElement.scrollTop;
    if(scrollTop <= 30){
        $('.scTop').css('display','none');
    }else{
        $('.scTop').css('display','block');
    }
};

$('.scTop .goTop').click(function(){
    var  scrollTop = document.documentElement.scrollTop;
    var timer = setInterval(function(){
        scrollTop -= 30;
        document.documentElement.scrollTop = scrollTop;
        if(scrollTop <= 0){
            $('.scTop').css('display','none');
            clearInterval(timer);
        }
    },10)
   
})



