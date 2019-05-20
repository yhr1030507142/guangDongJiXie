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

    

    var str=location.href; //取得整个地址栏
    // alert(str);
     var num=str.indexOf("?") 
     str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
     var arr=str.split("&"); //各个参数放到数组里
     for(var i=0;i < arr.length;i++){ 
         num=arr[i].indexOf("="); 
         if(num>0){ 
             name=arr[i].substring(0,num);
          //   alert(name);
             value=arr[i].substr(num+1);
         //    alert(value);
             this[name]=value;
         } 
     } 
     console.log(value)
     var nn = parseInt(value)-1
   //  alert(nn)
   $(".a_word_left_nav ul li").removeClass('about_active')
    $(".a_word_left_nav ul li").eq(nn).addClass('about_active')
    var title = $('.a_word_right_top p')
    title.text( $('.a_word_left_nav ul li').eq(nn).find('.li_word').text())
    var address1 =$('.a_word_left_nav_title p').eq(0).text()
    $('.address1').text(address1)
    $('.address2').text($('.a_word_left_nav ul li').eq(nn).find('.li_word').text())
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