$(function(){
    var lenth =  $(".wLi").length
    var fli = $(".wrapper ul li").clone(true);
    var oul = $(".wrapper ul");
    oul.append(fli);
    oul.width($(".wrapper ul li").eq(0).width()*$(".wrapper ul li").length);
    var inow = 0;
    var timer = null;
    
    $(".wrapper").mouseover(function(){
        clearInterval(timer);
    })
    $(".wrapper").mouseout(function(){
        autoplay();
    })
    
    $("#next").click(function(){
        console.log(inow)
        console.log(lenth)

        if(inow >= lenth-1){
            inow = lenth-1
        }else{
            inow++;
        }
      //   if(inow == $(".wrapper ul li").length/2){
      //       oul.css("left","0px");
      //       inow = 1;
      //   }else{
      //       inow++;
      //   }
        var leng = -inow*$(".wrapper ul li").eq(0).width()+"px"; 
        console.log(leng)
        oul.animate({"left":leng});
    })
    $("#prev").click(function(){
        console.log(inow)
        if(inow <= 0){
            inow =0
        }else{
            inow--;
        }
        var leng = -inow*$(".wrapper ul li").eq(0).width()+"px";
        oul.animate({"left":leng});
    })
   
  autoplay(); 
  function autoplay(){
       
    timer = setInterval(function(){
    if(inow >= lenth-1){
        oul.css("left","0px");
        inow = 1;
    }   
    else{
        inow++;
    }
    var leng = -inow*$(".wrapper ul li").eq(0).width()+"px";
    console.log(leng)
    oul.animate({"left":leng});
},3000);
}
})
  
