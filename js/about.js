$(function(){
    var title = $('.a_word_right_top p')
    title.text( $('.a_word_left_nav ul li').eq(0).find('.li_word').text())
    var address1 =$('.a_word_left_nav_title p').eq(0).text()
    $('.address1').text(address1)
    $('.address2').text($('.a_word_left_nav ul li').eq(0).find('.li_word').text())
    $('.a_word_left_nav ul li').click(function(){
        var index = $(".a_word_left_nav ul li").index(this);
        var li = $(".a_word_left_nav ul li")

        var span = li.eq(index).find('.li_word').text()
        title.text(span)
        $('.address2').text(span)
        console.log(span)
        // 
        // title.text(span)
        li.removeClass('about_active')
        // for(var i=0;i<li.length;i++){
        //     li[i].removeClass('active_nav')
        // }
        // alert(index);
        li.eq(index).addClass('about_active')
    })

    

})