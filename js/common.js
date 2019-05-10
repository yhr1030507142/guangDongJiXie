$(function(){
    $('.quality_left ul li').click(function(){
        var index = $(".quality_left ul li").index(this);
        var li = $(".quality_left ul li")
        li.removeClass('active_nav')
        // for(var i=0;i<li.length;i++){
        //     li[i].removeClass('active_nav')
        // }
        // alert(index);
        li.eq(index).addClass('active_nav')
    })
})

