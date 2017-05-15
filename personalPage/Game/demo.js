// 游戏开始界面different点击部分开始
var startbox=document.querySelector(".startbox");
var choose=document.querySelector(".choose");
var start=document.querySelector(".start");
var difficult=document.querySelector(".difficult");
var back=document.querySelector(".back");
var easy=document.querySelector(".easy");
var medium=document.querySelector(".medium");
var hard=document.querySelector(".hard");
choose.onclick=function () {
    startbox.style.display="none";
    difficult.style.display="block"
}
back.onclick=function () {
    startbox.style.display="block";
    difficult.style.display="none";
};

// 游戏开始界面different点击部分结束


// 点击Start game游戏部分开始
var sence=document.querySelector(".con");
var mask=document.querySelector(".mask");
var score=document.querySelector(".score");
var maxscore=document.querySelector(".maxscore");
var name1=document.querySelector(".name1");
var name2=document.querySelector(".name2");
var name3=document.querySelector(".name3");
var ranklist=document.querySelector(".rank-list");
console.log(name1)
class Game{
    constructor(sence,num, scor, life,score,maxscore) {
        this.sence = sence;
        this.num = num;
        this.obj = {};
        this.scorele = scor;
        this.scor = 0;
        this.speed = 5;
        this.lifeele = life;
        this.life= 100;
        this.height =window.innerHeight;
        this.startControl = true;
        this.score=score;
        this.maxscore=maxscore;
        // this.bestscor=localStorage.bestscor?localStorage.bestscor:0;
        this.bestscor=localStorage.bestscor?JSON.parse(localStorage.bestscor):[];
    }
    _createLetter(){
        var div=document.createElement("div");
        div.className="letter";
        do{
            var zm=Math.floor(Math.random()*26+65);
            var ch=String.fromCharCode(zm);
        }while(this.obj[ch])
        div.style.backgroundImage="url(img/"+ch+".png)";
        do{
            var le=Math.random()*1236;
        }while(this._check(le));
        var to=-Math.random()*100;
        div.style.left=le+"px";
        div.style.top=to+"px";
        this.obj[ch]={left:le,top:to,el:div};
        this.sence.appendChild(div);
    }
    _check(left){
        for(var i in this.obj){
            if(this.obj[i].left-130<left&&this.obj[i].left+130>left){
                return true;
            }
        }
    }
    _play(){
        for(var i=0;i<this.num;i++){//创建play函数来调用函数createLetter完成三个字母的随机创建
            this._createLetter();
        }
        this._move();
        this._onkeydown();
        this.startControl=false;
        mask.style.display="none";
        show.style.display="block";
    }
    _move(){
        this.st=setInterval(function () {
            for(var i in this.obj){
                var t=this.obj[i].top;
                t+=this.speed;
                this.obj[i].top=t;
                this.obj[i].el.style.top=t+"px";
                if(t>this.height){
                    this.life-=20;
                    this.lifeele.style.backgroundSize=this.life+"%"+"100%";
                    this.sence.removeChild(this.obj[i].el);
                    delete this.obj[i];
                    this._createLetter();
                    if(this.life==0){
                        this._gameover();
                        mask.style.display="block";
                        return;
                    }
                }
            }
        }.bind(this),50)
    }
    _onkeydown(){
        document.onkeydown=function (e) {
            var keycode=e.keyCode;
            var l=String.fromCharCode(keycode);
            if(this.obj[l]){
                this.sence.removeChild(this.obj[l].el);
                delete this.obj[l];
                this._upscor();
                this._createLetter();
            }
        }.bind(this)
    }
    _upscor(){
        this.scor++;
        this.scorele.innerHTML=this.scor;
    }
    _gameover(){
        // if(this.scor<this.bestscor){
        //     this.score.innerHTML=this.scor;
        //     this.maxscore.innerHTML=this.bestscor;
        // }else{
        //     this.score.innerHTML=this.scor;
        //     this.maxscore.innerHTML=this.scor;
        //     localStorage.bestscor=this.scor;
        // }
        if(this.bestscor.length<3||(this.bestscor.length>=3&&this.scor>this.bestscor[2].scor)){
            var player=prompt("请输入姓名");
            this.bestscor.push({player ,scor:this.scor});
            this.bestscor.sort(function (a,b) {
                if(a.scor>b.scor){
                    return -1;
                }else{
                    return 1;
                }
            })
            if(this.bestscor.length>3){
                this.bestscor.pop();
            }
            localStorage.bestscor=JSON.stringify(this.bestscor);
        }
        this.score.innerHTML=this.scor;
        this._clearzm();
        mask.style.display="block";
        name1.innerHTML=`${this.bestscor[0].player}`;
        name2.innerHTML=`${this.bestscor[1].player}`;
        name3.innerHTML=`${this.bestscor[2].player}`;
        this.maxscore.innerHTML=this.bestscor[0].scor;

    }

    _clearzm(){
        this.sence.innerHTML="";
        this.obj={};
        this.speed=5;
        this.scor=0;
        this.scorele.innerHTML=0;
        this.life=100;
        this.lifeele.style.backgroundSize="100% 100%"
        this.startControl=true;
        clearInterval(this.st);
    }
    pause(){
        clearInterval(this.st);
        document.onkeydown=null;
    }
    play(){
        this._move();
        this._onkeydown();
    }

}
    var scor=document.querySelector(".scorinner");
    var life=document.querySelector(".lifeinner");
    var stop=document.querySelector(".stop");
    var show=document.querySelector(".show");
    var mask2=document.querySelector(".mask2");
    var continuebtn=document.querySelector(".continue");
    var stoprestart=document.querySelector(".stop-restart");
    var stopquit=document.querySelector(".stop-quit");
    var quit=document.querySelector(".quit");
    var restart=document.querySelector(".restart");
    var r=new Game(sence,4,scor,life,score,maxscore);
    function sp() {
        if(r.startControl){
            r.startControl=false;
            r._play();
        }
        startbox.style.display="none";
        show.style.display="block";
    }
    start.onclick=function () {
        sp();

    };
    // var flag=true;
    stop.onclick=function () {
        // if(flag){
            mask2.style.display="block";
            // stop.innerHTML="继续";
            r.pause();
        // }else{
        //     stop.innerHTML="暂停";
        //     r.play();
        // }
        // flag=!flag;

    };
    continuebtn.onclick=function () {
        mask2.style.display="none";
        r.play();
    }
    stoprestart.onclick=function () {
        mask2.style.display="none";
        r._gameover();
        r._play()
    }
    stopquit.onclick=function () {
        startbox.style.display="block";
        mask2.style.display="none";
        show.style.display="none";
        r._clearzm();
    };
    quit.onclick=function () {
        mask.style.display="none";
        show.style.display="none";
        r._clearzm();
        startbox.style.display="block";
    };
    restart.onclick=function () {
        mask.style.display="none";
        r._gameover();
        r._play();
    };

// 难度选择
    easy.onclick=function () {
        easy.style.border="1px solid red";
        medium.style.border="none";
        hard.style.border="none";
        r=new Game(sence,3,scor,life,score,maxscore);
        back.onclick=function () {
            startbox.style.display="block";
            difficult.style.display="none";
        };


    };
    medium.onclick=function () {
        medium.style.border="1px solid red";
        easy.style.border="none";
        hard.style.border="none";
        r=new Game(sence,4,scor,life,score,maxscore);
        back.onclick=function () {
            startbox.style.display="block";
            difficult.style.display="none";
        };
    };
    hard.onclick=function () {
        hard.style.border="1px solid red";
        easy.style.border="none";
        medium.style.border="none";
        r=new Game(sence,5,scor,life,score,maxscore);
        back.onclick=function () {
            startbox.style.display="block";
            difficult.style.display="none";
        };
    };
// 点击Start game游戏部分结束


