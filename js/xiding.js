// var oWrap = document.querySelector('#wrap');
// window.onscroll = function(){
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if(scrollTop >= 58){
//         oWrap.style.cssText = "position:fixed;top:0;z-index:1000;" ;
//     }else{
//         oWrap.style.cssText = "position:static;"
//     }
// }

window.scroll(function(){
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop >= 58){
        // oWrap.style.cssText = "position:fixed;top:0;z-index:1000;" ;
        $('#wrap').css({
            'position':'fixed',
            'top' : 0,
            'z-index' : '1000'
        })
    }else{
        $('#wrap').css('position','static')
    }
})