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
                $("#next").hide();
            }
            else{
                $("#next").show();
            }
        },
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

    //在输入信息的时候隐藏下一页的指示（防止挡住输入框）
    $("#page_inv_3 .input").focusin(function(){
        $("#next").hide();
    });
    $("#page_inv_3 .input").focusout(function(){
        $("#next").show();
    });

    $(".share").click(function(){
        $(".shareop").css({display:'block'});
    });
    $(".shareop").click(function(){
        $(this).css({display:'none'});
    });

});
