var banners=document.querySelectorAll(".banner-box a");
var dians=document.querySelectorAll(".dian .dian1");
var banner=document.querySelector(".banner");
var zj=document.querySelector(".zj");
var yj=document.querySelector(".yj");
var asidelis=document.querySelectorAll("aside ul li");
var aside=document.querySelector("aside");
console.log(asidelis)
var erjis=document.querySelectorAll("aside ul li .erji");
// console.log(banners[0])
var obj=banners[0];
var obj1=dians[0];

Array.from(dians).forEach(function (v,i) {
    v.onmouseover=function () {
        num=i;
        obj.style.opacity=0;
        obj.style.zIndex=1;
        banners[i].style.opacity=1;
        banners[i].style.zIndex=2;
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


zj.onmouseover=function () {
    zj.style.background="rgba(90, 82, 74, 0.5)";
    zj.style.color="#fff";
}
zj.onmouseout=function () {
    zj.style.background="";
    zj.style.color="";
}
yj.onmouseover=function () {
    yj.style.background="rgba(90, 82, 74, 0.5)";
    yj.style.color="#fff";
}
yj.onmouseout=function () {
    yj.style.background="";
    yj.style.color="";
}
zj.onclick=function () {
    num-=2
    move();
}
yj.onclick=function () {
    move();
}

Array.from(asidelis).forEach(function (a,index) {
    a.onmouseover=function () {
        erjis[index].style.display="block";
    }
    a.onmouseout=function () {
        erjis[index].style.display="none";
    }
})