$(function(){
  
    // $('.nav_li').click(function(){
    //     console.log('123')
    //     var index = $(".nav_li").index(this);
    //     var li = $(".nav_li")
    //     var ul=$('nav_li_child_ul')
    //     ul.css('display','block')
    //     ul.eq(index).css('display','block')
    // })
    $('.new_middle ul li').click(function(){
        window.location.href = './consult.html?id=1'
    })
    $('.make_left_content_ul li').click(function(){
        window.location.href = './brand.html?id=1'
    })
    $('.make_box_ul li').click(function(){
        window.location.href = './brand.html?id=1'
    }) 
    $('.quality_right li').click(function(){
        window.location.href = './quality.html?id=1'
    }) 
    $('.member_ul_3_li').eq(0).click(function(e){
        e.stopPropagation();
        window.location.href = './member.html?id=3'
    })
    $('.skill_ul li').click(function(){
        window.location.href = './teach.html?id=1'
    })
    $('.journal_ul_1 li').click(function(){
        window.location.href = './journals.html?id=1'
    })
    $('.journal_ul_2 li').click(function(){
        window.location.href = './journals.html?id=1'
    }) 
    $('.member_ul li').click(function(){
        window.location.href = './member.html?id=1'
    }) 

    $('.expert_right   li').click(function(){
        window.location.href = './expert.html?id=1'
    }) 
    
    
})

