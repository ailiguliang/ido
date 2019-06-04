// var oShadow = document.querySelectorAll('.shadow'),
//     oIbox = document.querySelectorAll('.iBox');

//     for(var i = 0 ; i <= oIbox.length ; i ++ ){
//         oIbox[i].onmouseover = function
//     }


$('#pic .rightImg .iBox').mouseover(function(){
    // console.log($('#pic .rightImg .iBox'))
    var index = $(this).index();
    // console.log(index);
    $('#pic .rightImg .iBox .shadow').eq(index).css('display','block');
})
$('#pic .rightImg .iBox').mouseout(function(){
    // console.log($('#pic .rightImg .iBox'))
    var index = $(this).index();
    console.log(index);
    $('#pic .rightImg .iBox .shadow').eq(index).css('display','none');
})



$('.ringShow .ringBox .imBox').mouseover(function(){
    // console.log($('#pic .rightImg .iBox'))
    var index = $(this).index();
    // console.log(index);
    $('.ringShow .ringBox .imBox p').eq(index).css('display','block');
})
$('.ringShow .ringBox .imBox').mouseout(function(){
    // console.log($('#pic .rightImg .iBox'))
    var index = $(this).index();
    // console.log(index);
    $('.ringShow .ringBox .imBox p').eq(index).css('display','none');
})
