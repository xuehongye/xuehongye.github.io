var bannerbox=document.querySelector(".lm-middle");
var banners=document.querySelectorAll(".banner-box li");
var btns=document.querySelectorAll(".lunbo-box li");
var prebtn=document.querySelector(".zj");
var nextbtn=document.querySelector(".yj");
var num=0;
var z=5;
var flag=true;
var t=setInterval(move,2000);
function  move() {
    btns[num].classList.remove("active")
    banners[num].classList.add("leftOut");

    num++;
    if(num==banners.length){
        num=0;
    }
    btns[num].classList.add("active");
    banners[num].classList.add("leftIn");

    banners[num].style.zIndex=z++;
}
banners.forEach(function (v) {
    v.addEventListener("animationend", function () {
        v.className = "";
        flag=true;

    })
})
bannerbox.onmouseover=function () {
    clearInterval(t);
}
bannerbox.onmouseout=function () {
    t=setInterval(move,2000);
}
Array.from(btns).forEach(function (btn,index) {
    btn.onclick=function () {
        if(num==index){
            return;
        }
        if(num<index){
            banners[num].classList.add("leftOut");
            banners[index].classList.add("leftIn");
        }else{
            banners[num].classList.add("rightOut");
            banners[index].classList.add("rightIn");
        }
        btns[num].classList.remove("active");
        btn.classList.add("active");
        banners[index].style.zIndex=z++;
        num=index;
    }
})
nextbtn.onclick=function () {
    if(flag){
        move();
        flag=false;
    }
}
prebtn.onclick=function () {
    if(flag){
        banners[num].classList.add("rightOut");
        btns[num].classList.remove("active");
        num--;
        if(num==-1){
            num=banners.length-1;
        }
        banners[num].classList.add("rightIn");
        btns[num].classList.add("active");
        banners[num].style.zIndex=z++;
        flag=false;
    }
}


// 轮播开始
var lunbox=document.querySelector(".lun-box");
var lun=document.querySelector(".lun");
var pre=document.querySelector(".pre");
var next=document.querySelector(".next");
var num1=4;
var l=setInterval(move1,3000);
function move1() {
    lunbox.style.transition="all 1s";
    num1++;
    lunbox.style.marginLeft=-295*num1+"px";
}
lunbox.addEventListener("transitionend",function(){
    if(num1==12){
        lunbox.style.transition="none";
        num1=4;
        lunbox.style.marginLeft=-295*num1+"px";
    }
    else if(num1==0){
        lunbox.style.transition="none";
        num1=8;
        lunbox.style.marginLeft=-295*num1+"px";
    }
    flag1=true;
})
lun.onmouseover=function(){
    clearInterval(l);
}
lun.onmouseout=function(){
    l=setInterval(move1,3000);
}
var flag1=true;
pre.onclick=function(){
    if(flag1){
        num1-=2;
        move1();
        flag1=false;
    }
   
}

next.onclick=function(){
    if(flag1){
        move1();
        flag1=false;
    }
   
}
// 轮播结束

// 移动商城
var ses=document.querySelectorAll(".list .se");
var ers=document.querySelectorAll(".erji");
Array.from(ses).forEach(function(se,s){
    ses[s].onmouseover=function () {
        ers[s].style.display="block";
    }
    ses[s].onmouseout=function () {
        ers[s].style.display="none";
    }
})


// 固定浮动开始
var as=document.querySelectorAll(".float a");
Array.from(as).forEach(function (a) {
    a.onmouseover=function () {
        a.style.right=140+"px";
        a.style.transition="all 1s"
    }
    a.onmouseout=function () {
        a.style.right="";
        a.style.transition="all 1s";
    }
})