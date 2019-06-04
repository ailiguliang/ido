var
    oDrag = document.querySelector('.yanzheng .drag'),
    odragTxt = document.querySelector('.yanzheng .dragTxt'),
    oYanzheng = document.querySelector('.yanzheng'),
    oBgShow = document.querySelector('.yanzheng .bgShow');

oDrag.onmousedown = function (e) {
    preventDefault(e);
    e = e || window.event;
    var x = e.offsetX;
    document.onmousemove = function (e) {
        e = e || window.event;
        preventDefault(e);
        var
            ow = oYanzheng.offsetLeft,
            a = oYanzheng.offsetWidth - oDrag.offsetWidth,
            l = e.clientX - x - ow,
            w = e.clientX - x - ow;
        l = l < 0 ? 0 : (l > a ? a : l);
        w = w < 0 ? 0 : (w > oYanzheng.offsetWidth ? oYanzheng.offsetWidth : w);
        oDrag.style.left = l + 'px';
        if (l >= a) {
            oBgShow.innerText = '验证成功';
        }
        oBgShow.style.width = w + 'px';
    }
    document.onmouseup = function (e) {
        e = e || window.event;
        if (oDrag.offsetLeft <= 348) {
            oBgShow.innerText = '验证失败';
        }
        document.onmousemove = null;
    }
}

function preventDefault(e) {
    return e.preventDefault ? e.preventDefault() : e.returnvalue = false;
}

    // $('.yanzheng .drag').mousedown(function(e){
    //     console.log($('.drag'))
    //     e.preventDefault();
    //     var x = e.offsetX;
    //     document.mousemove((e) => {
    //         e.preventDefault();
    //         var l = e.clientX - x - $('.drag').width() / 2,
    //             w =  e.clientX - x -$('.drag').width();
    //         l = l < 0 ? 0 : (l > 350 ? 350 : l );
    //         console.log(l)
    //         $('.drag').css('left','l');
    //         $('.bgShow').css('width','w');
    //         $('.dragTxt').innerHtml = '验证成功';
    //     })
    //     document.mouseup((e) => {
    //         if($('.drag').css('left') <= 348){
    //             $('.dragTxt').innerHtml = '验证失败';
    //         }
    //         document.mousemove(null);
    //     })
    // })
