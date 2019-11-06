$(document).ready(function(){
         //-- Click on detail
         $("ul.menu-items > li").on("click",function(){
             $("ul.menu-items > li").removeClass("active");
             $(this).addClass("active");
         })

         $(".attr,.attr2").on("click",function(){
             var clase = $(this).attr("class");

             $("." + clase).removeClass("active");
             $(this).addClass("active");
         })

         //-- Click on QUANTITY
         $(".btn-minus").on("click",function(){
            console.log('btn minus clicked');
             var now = $(".section > div > input").val();
             if ($.isNumeric(now)){
                 if (parseInt(now) -1 > 0){ now--;}
                 $(".section > div > input").val(now);
             }else{
                 $(".section > div > input").val("1");
             }
         })
         $(".btn-plus").on("click",function(){
            console.log('btn plus clicked');
             var now = $(".section > div > input").val();
             if ($.isNumeric(now)){
                if (parseInt(now) < 5) {now++;}
                 $(".section > div > input").val(parseInt(now));
             }else{
                 $(".section > div > input").val("1");
             }
         })
     })
