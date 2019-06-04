// 聊天框
$('.send .btn').click(() => {
    var createP = $('<p></p>');
    var val = $('.send textarea').val();
    createP.html(val);
    $('.content').append(createP);
    $('.send textarea').val('');
})