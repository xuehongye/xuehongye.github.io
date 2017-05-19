var flag1=true;var flag2=true;
$(window).scroll(function () {
    var st=$(this).scrollTop();
    if(st>800){
        $(".topbar").css("top",0)
    }else{
        $(".topbar").css("top",-50)
    }
    if(st>1500){
        if(flag1){
            flag1=false;flag2=true;
            $(".floor").animate({width:36,height:450});//左边小楼层
        }
    }else{
        if(flag2){
            flag2=false;flag1=true;
            $(".floor").animate({width:0,height:0});//左边小楼层
        }
    }

})
//回到顶部
$(function () {
    $(".floor .item").click(function () {
        $("html,body").animate({scrollTop:0});
    })
    $(".floor .z").click(function () {
        var index = $(this).index();
        var tops=$(".fl").eq(index).offset().top;
        $("html,body").animate({scrollTop:tops})
    }).hover(function () {
        var index=$(this).index();
        $(this).css("background","#d70b1c");
    },function () {
        $(this).css("background","");
    })
})
var t;
$(window).scroll(function () {
    var st=$(this).scrollTop();
    clearTimeout(t);
    t=setTimeout(function () {
        $(".fl").each(function (i,e) {
            if(st>=$(e).offset().top){
                $(".floor .z").eq(i).addClass("active").siblings().removeClass("active")
            }
        })
    },100)
})
//固定栏右侧
$(function () {
  $(".fixr .index").each(function (i,e) {
      $(".fixr .index").eq(i).hover(function () {
          $(".fixr .index").eq(i).css("background","#c81623");
          $(".tip").eq(i).css({"right":28+"px","background":"#c81623"});
      },function () {
          $(".fixr .index").eq(i).css("background","")
          $(".tip").eq(i).css({"right":"","background":""});
      })
  })
})
//banner
$(function () {
    function banner(lun,banli,box,pre,next) {
        lun.mouseover(function () {
            var index=$(this).index()
            lun.filter(".active").removeClass("active").end().eq(index).addClass("active"),
                banli.filter(".active").removeClass("active").end().eq(index).addClass("active")
            num=index;
        })
        var num=0;
        var t=setInterval(move,3000)
        function move() {
            num++;
            if(num==lun.length){
                num=0
            }
            lun.filter(".active").removeClass("active").end().eq(num).addClass("active"),
                banli.filter(".active").removeClass("active").end().eq(num).addClass("active")
        }
        box.hover(function () {
            clearInterval(t)
        },function () {
            t=setInterval(move,3000)
        })
        next.click(function () {
            move()
        })
        pre.click(function () {
            num-=2;
            if(num==-2){
                num=lun.length-2;
            }
            move()
        })
    }
    banner($(".bn-ct .lunbo li"),$(".bn-ct .pic li"), $(".bn-ct"),$(".bn-ct .flag .left"),$(".bn-ct .flag .right"));
    banner($(".found .bottom .lunbo li"),$(".found .bottom .coninclu .includes"), $(".coninclu"),$(".coninclu .flag .left"),$(".coninclu .flag .right"));
    banner($(".enjoy .zhibo .bottom .lunbo li"),$(".enjoy .zhibo .bottom .zhiboz li"), $(".enjoy .zhibo .bottom"),$(".enjoy .zhibo .bottom .prev"),$(".enjoy .zhibo .bottom .next"));

})
//排行榜
$(function () {
    var num=1;
    $(".found .title li").each(function (i,v) {
        num++;
        $(this).mouseover(function () {
            $(".found .content").filter(".disp").removeClass("disp").end().eq(i).css("display","block")
        })
    }) 
})

//头部
$(function () {
    $(".listss").each(function (i,v) {
        console.log(i)
        $(this).hover(function () {
            $(".list").eq(i).css("display","block")
        },function () {
            $(".list").eq(i).css("display","none")
            console.log(2)
        })
    })
})
//小图函数
$(function () {
    function tranlate(val,pres,nexts,i) {
        var num=0;
        var flag=true;
        function move() {
            val.css("transition","all 1s linear");
            num++;
            val.css("margin-left",-num*i+"px");
            if(num==3){
                val.css("margin-left",0);
                val.css("transition","none");
                num=0;
            }

            // val.css("transition","all 1s")
            flag=false;
        }
        pres.click(function () {
            num-=2;
            if(num==-2){
                num=0
                val.css("transition","none");
            }
            move()
        })
        nexts.click(function () {
            move()
        })
    }
    tranlate($(".g1 .brands"),$(".g1 .ic-pre"),$(".g1 .ic-next"),570)
    tranlate($(".g2 .brands"),$(".g2 .ic-pre"),$(".g2 .ic-next"),570)
    tranlate($(".g3 .brands"),$(".g3 .ic-pre"),$(".g3 .ic-next"),570)
    tranlate($(".g4 .brands"),$(".g4 .ic-pre"),$(".g4 .ic-next"),570)
    tranlate($(".g5 .brands"),$(".g5 .ic-pre"),$(".g5 .ic-next"),1200)
    tranlate($(".g6 .brands"),$(".g6 .ic-pre"),$(".g6 .ic-next"),570)
    tranlate($(".g7 .brands"),$(".g7 .ic-pre"),$(".g7 .ic-next"),570)
    tranlate($(".g8 .brands"),$(".g8 .ic-pre"),$(".g8 .ic-next"),1200)
    tranlate($(".g9 .brands"),$(".g9 .ic-pre"),$(".g9 .ic-next"),570)
    tranlate($(".g10 .brands"),$(".g10 .ic-pre"),$(".g10 .ic-next"),570)
    tranlate($(".g11 .brands"),$(".g11 .ic-pre"),$(".g11 .ic-next"),570)
    tranlate($(".g12 .brands"),$(".g12 .ic-pre"),$(".g12 .ic-next"),570)
    tranlate($(".ic1 ul"),$(".ic1 .you-pre"),$(".ic1 .you-next"),380)
    tranlate($(".ic2 ul"),$(".ic2 .you-pre"),$(".ic2 .you-next"),380)
    tranlate($(".ic3 ul"),$(".ic3 .you-pre"),$(".ic3 .you-next"),380) 
})
