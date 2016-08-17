$(function(){

    //创建fullpage
    $('#con_inv').fullpage({
        anchors:['page1','page2','page3'],
        continuousVertical: false,
        scrollingSpeed:700,
        css3:true,
        easing:'ease-in-out',
        easingcss3:'ease-in-out',
        afterLoad: function(anchorLink, index){
            if(index == 3){
                $("#next").css({"display":"none"});
            }
            else{
                $("#next").css({"display":"block"});
            }
        }
    });

    //----禁止 微信下拉查看网址
    $('body').on('touchmove', function (event) {event.preventDefault();});

    //转发会议信息
    $(".share").click(function(){
        if($(".shareOP").hasClass('active')){
            $(".shareOP").css({display:"none"});
            $(".shareOP").removeClass('active');
        }else{
            $(".shareOP").css({display:"block"});
            $(".shareOP").addClass('active');
        }
    });
    $(".shareOP").click(function(){
        $(this).removeClass('active');
        $(this).css({display:"none"});
    });

    $(".share").click(function(){
        $(".shareop").css({display:'block'});
    });
    $(".shareop").click(function(){
        $(this).css({display:'none'});
    });

    // 防止键盘挡住input
    $(".up").focusin(function(){
        $("#sign").css({"marginTop":"-40%"});
    });
    $(".up").focusout(function(){
        $("#sign").css({"marginTop":"0px"});
    });

});
