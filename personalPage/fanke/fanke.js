var banners=document.querySelectorAll(".banner-box a");
var dians=document.querySelectorAll(".dian .dian1");
var banner=document.querySelector(".banner");
var zj=document.querySelector(".zj");
var yj=document.querySelector(".yj");
var obj=banners[0];
var obj1=dians[0];
Array.from(dians).forEach(function (v,i) {
    dians[i].onmouseover=function () {
        num=i;
        obj.style.opacity=0;
        obj.style.zIndex=1;
        banners[i].style.opacity=1;
        banners[i].style.zIndex=2
        obj=banners[i];
        obj1.style.background="#dddddd";
        dians[i].style.background="#a10000";
        obj1=dians[i];

    }
})
var num=0;
var r=setInterval(move,2000);
function move() {
    num++;
    if(num==banners.length){
        num=0;
    }
    if(num==-1){
        num=banners.length-1;
    }
    obj.style.opacity=0;
    obj.style.zIndex=1;
    banners[num].style.opacity=1;
    banners[num].style.zIndex=2
    obj=banners[num];
    obj1.style.background="#dddddd";
    dians[num].style.background="#a10000";
    obj1=dians[num];
}
banner.onmouseover=function () {
    clearInterval(r);
}
banner.onmouseout=function () {
    r=setInterval(move,2000);
}

yj.onmouseover=function () {
   yj.style.background="#B9B9B2";
}
yj.onclick=function () {
    move();
}
yj.onmouseout=function () {
    yj.style.background="";
}
zj.onmouseover=function () {
    zj.style.background="#B9B9B2";
}
zj.onclick=function () {
    num-=2;
    move();
}
zj.onmouseout=function () {
    zj.style.background="";
}

var lis=document.querySelectorAll(".lists>li");
var seclists=document.querySelectorAll(".seclists");
var arr=[];
Array.from(lis).forEach(function(li,index){
        var cc=li.querySelectorAll(".seclists li");
        var height=cc.length*30-20;
        arr.push(height);
        lis[index].onmouseover=function () {
            seclists[index].style.height=arr[index]+"px";

        }
        lis[index].onmouseout=function () {
            seclists[index].style.height=0;

        }
    }
)


var weixin=document.querySelector(".weixin");
var saoma=document.querySelector(".saoma");
weixin.onmouseover=function () {
    saoma.style.display="block";
}
weixin.onmouseout=function () {
    saoma.style.display="none";
}
// 回到顶部开始
var dingbu=document.querySelector(".dingbu");
dingbu.onclick=function (){
    animate(document.body,{scrollTop:0},500)
}
// 回到顶部结束

// 购物车开始
var gwc=document.querySelector(".gwc");
var gwcin=document.querySelector(".gwc-in");
gwc.onmouseover=function () {
    gwcin.style.display="block";
}
gwc.onmouseout=function () {
    gwcin.style.display="none";
}
// 购物车结束