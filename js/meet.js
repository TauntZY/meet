$(function(){

    $(".more").click(function(){
        var s = $(this).parent().parent().parent();
        $(".moreInfo").animate({marginLeft:"500px"},100,function(){
            $(".moreInfo").css({display:"none"});
        });//先隐藏所有的info
        setTimeout(function(){
            s.siblings().css({display:"block"});
            s.siblings().animate({"marginLeft":"0px"},250);
        },200);

    });
    $(".return").click(function(){
        $(this).parent().animate({marginLeft:"500px"},300,function(){
            $(".moreInfo").css({display:"none"});
        });

    });

    $(".closeBoot").click(function(){
        $("#page_boot_user").css({display:"none"});
        $("#page_boot_all").css({display:"none"});
    })

    $("#cBtn").click(function(){
        if($(this).hasClass("show")){
            $("#classify").animate({marginLeft:"-250px"});
            $("#meet_con").animate({marginLeft:"65px"});
            $(this).removeClass("show");
        }else{
            $("#classify").animate({marginLeft:"-2px"});
            $("#meet_con").animate({marginLeft:"315px"});
            $(this).addClass("show");
        }
    });
    $("#center .lev").click(function(){
        if($(this).hasClass("show")){
            $(this).parent().stop().animate({height:"63"});
            $(this).parent().find("span:first-child").removeClass("ani");
            $(this).removeClass("show");
        }else{
            $(this).parent().stop().animate({height:"268"});
            $(this).parent().find("span:first-child").addClass("ani");
            $(this).addClass("show");
        };
    });
    $(".ewm").click(function(){
        var m_qrcode = $(this).attr("meeting_qrcode");
        var m_id = $(this).attr("meeting_id");
        $("#page_ewm").css({display:"block"});
        $("#page_ewm img").attr("src",m_qrcode);
        $("#page_ewm .id span").text(m_id);
    });
    $(".close").click(function(){
        $("#page_ewm").css({display:"none"});
    });
    document.getElementById("page_meet").addEventListener("touchstart",function(e)
    {
        _xs =e.touches[0].pageX;
        //console.log("start",_xs);
    });
    document.getElementById("page_meet").addEventListener("touchend",function(e)
    {
        _xe=e.changedTouches[0].pageX;
        //console.log("end",_xe);
        //先判断是否纯在 cBtn
        if(document.getElementById("cBtn")){
            if( _xe - _xs > 80){
                if(!$("#cBtn").hasClass("show")){
                    $("#classify").animate({marginLeft:"-2px"});
                    $("#meet_con").animate({marginLeft:"315px"});
                    $("#cBtn").addClass("show");
                }
            }
            if(_xe - _xs < -80){
                if($("#cBtn").hasClass("show")){
                    $("#classify").animate({marginLeft:"-250px"});
                    $("#meet_con").animate({marginLeft:"65px"});
                    $("#cBtn").removeClass("show");
                }
            }
        }
    })
});