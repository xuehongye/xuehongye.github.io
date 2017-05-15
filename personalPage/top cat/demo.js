var huibo=document.querySelectorAll(".huibo li");
var xiaotu=document.querySelectorAll(".xiaotu li");
var lianzuo=document.querySelector(".lianzuo");
var xiao=document.querySelector(".xiaotu");
var masks=document.querySelectorAll(".mask");
var xxms=document.querySelectorAll(".xxm");
var zj=document.querySelector(".zj");
var yj=document.querySelector(".yj");
zj.onclick=function () {
    zj.style.display="none";
    yj.style.display="block";
    xiao.style.marginLeft=0;
}
yj.onclick=function () {
    yj.style.display="none";
    zj.style.display="block";
    xiao.style.marginLeft=-480+"px";
}
Array.from(xiaotu).forEach(function (v,n) {
    num=n;
    v.onmouseover=function () {

        for(var i=0;i<xiaotu.length;i++){
            huibo[i].style.display="none";
            masks[i].style.opacity=0;
            xxms[i].style.opacity=0;
        }
        huibo[n].style.display="block";
        masks[n].style.opacity=1;
        xxms[n].style.opacity=1;
    }
});
    var num=0;
    var r=setInterval(move,2000);
    function move() {
        num++;
        if(num==xiaotu.length){
            num=0;
        }
        for(var i=0;i<xiaotu.length;i++){
            huibo[i].style.display="none";
        }
        huibo[num].style.display="block";
    }
    lianzuo.onmouseover=function(){
        clearInterval(r);
    }
    lianzuo.onmouseout=function(){
        r=setInterval(move,2000);
    }


var juxings=document.querySelectorAll(".lianyou ul li .juxing");
Array.from(juxings).forEach(function(v,i){
    v.onmouseover=function () {
            juxings[i].style.opacity=1;
}
    v.onmouseout=function () {
        juxings[i].style.opacity=0;
}
});

var banners=document.querySelectorAll(".ban-box a");
var btns=document.querySelectorAll(".yuan a");
var box=document.querySelector(".banner-main");
var bann=document.querySelectorAll(".bann .ban");
var obj=btns[0];
var obj1=banners[0];
var obj2=bann[0];
Array.from(btns).forEach(function (ele,index) {
    num1=index;
    ele.onmouseover=function () {
        obj.style.background="rgba(0,0,0,0.5)";
        obj.style.zIndex=0;
        obj2.style.opacity=0;
        obj2.style.zIndex=1;
        obj2.style.opacity=0;
        btns[index].style.background="rgba(255,255,255,0.5)";
        btns[index].style.zIndex=1;
        bann[index].style.opacity=1;
        bann[index].style.zIndex=2;
        bann[index].style.opacity=1;
        obj=btns[index];
        obj2=bann[index];
        obj1.style.opacity=0;
        obj1.style.zIndex=1;
        banners[index].style.opacity=1;
        banners[index].style.zIndex=2;
        obj1=banners[index];
    }
})
var num1=0;
var t=setInterval(move1,2000);
function move1() {
    num1++;
    if(num1==btns.length){
        num1=0;
    }
    obj.style.background="rgba(0,0,0,0.5)";
    obj.style.zIndex=2;
    obj2.style.opacity=0;
    obj2.style.zIndex=1;
    obj2.style.opacity=0;
    btns[num1].style.background="rgba(255,255,255,0.5)";
    btns[num1].style.zIndex=3;
    bann[num1].style.opacity=1;
    bann[num1].style.zIndex=2;
    bann[num1].style.opacity=1;
    obj=btns[num1];
    obj2=bann[num1];
    obj1.style.opacity=0;
    obj1.style.zIndex=1;
    banners[num1].style.opacity=1;
    banners[num1].style.zIndex=2;
    obj1=banners[num1];
}
box.onmouseover=function () {
    clearInterval(t);
}
box.onmouseout=function () {
    t=setInterval(move1,2000);
}


var lis=document.querySelectorAll(".store-main ul li");
var maotous=document.querySelectorAll(".store-main ul li img")
Array.from(lis).forEach(function (v,i) {
    lis[i].onmouseover=function () {
        maotous[i].style.top="-14px";
        maotous[i].style.opacity=1;
    }
    lis[i].onmouseout=function () {
        maotous[i].style.top="0";
        maotous[i].style.opacity=0;
    }
})



var inner=document.querySelector(".inner");
var num3=0;
setInterval(function () {
    if(num3==0){
        inner.style.transition="all 1s";
    }
    num3++;
    inner.style.marginTop=-66*num3+"px";
},3000)
inner.addEventListener("transitionend",function () {
    if(num3==3){
        inner.style.transition="none";
        inner.style.marginTop=0;
        num3=0;
    }
})


var floors=document.querySelectorAll(".box .floor");
var m2s=document.querySelectorAll(".guzuo ul .m2");
var guzuo=document.querySelector(".guzuo");
var db=document.querySelector(".guzuo .db");
var totop=document.querySelector(".totop");
// console.log(mls);
window.onscroll=function () {
    var f=document.body.scrollTop;

    if(f>500){
        guzuo.style.width="35px";
        guzuo.style.height="332px";
        totop.style.top=0;
    }else{
        guzuo.style.width=0;
        guzuo.style.height=0;
        totop.style.top="-50px";
    }
}
Array.from(m2s).forEach(function (m2,findex) {
    var fl=floors[findex].offsetTop;
    m2.onclick=function () {
        // document.body.scrollTop=fl;
        animate(document.body,{scrollTop:fl},500);

    }
})
db.onclick=function () {
    animate(document.body,{scrollTop:0});
}


var myous=document.querySelectorAll(".miao .m-you .hy");
var ers=document.querySelectorAll(".miao .m-you .hy .erji");
Array.from(myous).forEach(function (myou,e) {
    myou.onmouseover=function () {
        ers[e].style.display="block";
        myou.style.background="#fff"
    }
    myou.onmouseout=function () {
        ers[e].style.display="none";
        myou.style.background=""
    }
})


var erjis=document.querySelectorAll(".guding .erji");
var tips=document.querySelectorAll(".guding .erji .tip");
var t;
Array.from(erjis).forEach(function (erji,i) {
    hover(erji,function () {
        clearTimeout(t);
        t=setTimeout(function () {
            tips[i].classList.add("show")
        },200)
    },function () {
        clearTimeout(t);
        if(tips[i].classList.contains("show")){
            tips[i].classList.remove("show");
            tips[i].classList.add("hidden");
        }
    })
})
Array.from(tips).forEach(function (tip) {
    tip.addEventListener("animationend",function () {
        if(tip.classList.contains("hidden")){
            tip.classList.remove("hidden")
        }
    })
})


var fens=document.querySelectorAll(".banner ul .fen");
var seconds=document.querySelectorAll(".fen .second");
Array.from(fens).forEach(function (fen,f) {
    fen.onmouseover=function () {
        seconds[f].style.display="block"
    }
    fen.onmouseout=function () {
        seconds[f].style.display="none";
    }
})