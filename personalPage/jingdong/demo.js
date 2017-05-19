
// //秒杀
// var hourele=document.querySelector(".hour");
// // console.log(hours);
// var minuteele=document.querySelector(".minute")
// var secondele=document.querySelector(".second");
// function getTime(){
//     var now=new Date();
//     var after=new Date(2017,5,19,0,0,0);
//     var cha=after.getTime()-now.getTime();
//     var hour=Math.floor(cha/(1000*60*60));
//     hourele.innerHTML=hour<10?"0"+hour:hour;
//     var minute=Math.floor(cha/(1000*60)%60);
//     minuteele.innerHTML=minute<10?"0"+minute:minute;
//     var second=Math.floor(cha/1000%60);
//     secondele.innerHTML=second<10?"0"+second:second;
// }
// getTime();
// setInterval(getTime,1000)

var time =10800;
var mins = 0;
var secs = 0;
var hours=0;
var x= setInterval(times, 1000);
function times() {
    time--;
    console.log(time);
    hours=Math.floor(time/3600);
    mins = Math.floor((time-hours*3600)/60);
    secs = Math.floor((time-hours*3600)% 60);
    var s3 = (secs < 10 ? "0" + secs : secs);
    var s2 = (mins < 10 ? "0" +mins : mins);
    var s1 = (hours < 10 ? "0" +hours : hours);

    $(".hour").html(s1);
    $(".minute").html(s2);
    $(".second").html(s3);
}
if(time==0){
    clearInterval(x);
}else{
    x= setInterval(times, 1000);
}

