$(function () {
    $(".lunbo>div").click(function () {
        var index=$(this).index()
        num=index;
        $(".lunbo>div").filter(".active").removeClass("active").end().eq(index).addClass("active")
        $(".banner-tu>a").filter(".active").removeClass("active").end().eq(index).addClass("active")
    })
    var t=setInterval(move,2000)
    var num=0;
    function move() {
        num++;
        if(num== $(".lunbo>div").length){
            num=0;
        }
        $(".lunbo>div").filter(".active").removeClass("active").end().eq(num).addClass("active")
        $(".banner-tu>a").filter(".active").removeClass("active").end().eq(num).addClass("active")
    }
    $(".banner").hover(function () {
        clearInterval(t)
    },function () {
        t=setInterval(move,2000);
    })
})