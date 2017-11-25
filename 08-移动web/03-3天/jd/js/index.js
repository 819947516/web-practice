/**
 * Created by Administrator on 2017/10/12.
 */
window.onload = function () {
//顶部通栏
    var header = document.querySelector(".jd_header");
    var nav = document.querySelector(".jd_nav");
    var Distance = nav.offsetTop + nav.offsetHeight;
    header.style.backgroundColor = "rgba(201, 21, 35,0)";
    window.onscroll = function () {
        var bodyDistance = document.body.scrollTop;
        var perecent = bodyDistance/Distance;
        if (perecent>=1){
            perecent = 1;
        }
        header.style.backgroundColor = "rgba(201, 21, 35,"+perecent+")";
    };

    // 倒计时效果
    var totalHour = 31;
    var totalSec = totalHour * 60 *60;
    var liArr = document.querySelectorAll(".jd_main .main_content .content_top ul li");
    console.log(liArr);
    var timer = setInterval(function () {
        if (totalSec<=0){
            clearInterval(timer);
            console.log("gg");
            return;
        }

        totalSec--;
        var hour = Math.floor(totalSec/3600);
        var minute = Math.floor(totalSec%3600/60);
        var sec = totalSec%60;
        liArr[0].innerHTML = Math.floor(hour/10);
        liArr[1].innerHTML = hour%10;
        liArr[3].innerHTML = Math.floor(minute/10);
        liArr[4].innerHTML = minute%10;
        liArr[6].innerHTML = Math.floor(sec/10);
        liArr[7].innerHTML = sec%10;

    },1000);


//轮播图
    var screenWidth = document.body.offsetWidth;
    // console.log(screenWidth);
    // var UL = document.getElementsByClassName("banner_images");
    // var li = UL.getElementsByTagName("li");
    var ul = document.querySelector(".banner_images");
    var imgLiArr = document.querySelectorAll(".banner_images li");
    var indexLiArr = document.querySelectorAll(".banner_index li");
    var index = 1;
    //下面的高亮index计时器
    var timerid = setInterval(function () {
        index++;
        // if (index>9){
        //     index=1;
        // }
        var screenWidth = document.body.offsetWidth;
        ul.style.transition = "all .5s";
        ul.style.transform = "translateX("+screenWidth*index*-1+"px)";
    },1000);
    //过渡结束事件
    ul.addEventListener("webkitTransitionEnd",function () {
        console.log("end");
        if (index>8){
            index=1;
            ul.style.transition = "";
            ul.style.transform = "translateX("+index*screenWidth*-1+"px)";
        }else if (index < 1){
            index = 8;
            ul.style.transition = "";
            ul.style.transform = "translateX("+index*screenWidth*-1+"px)";
        }
        for (var i = 0; i < indexLiArr.length; i++) {
            indexLiArr[i].className = "";
        }
        indexLiArr[index-1].className = "current";
    });
    // 触摸事件touch
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    ul.addEventListener("touchstart",function (evevt) {
        clearInterval(timerid);
        console.log(evevt);
        startX = event.touches[0].clientX;
        ul.style.transition = "";
    });
    ul.addEventListener("touchmove",function (event) {
        console.log("move");
        moveX = event.touches[0].clientX-startX;
        console.log(event.touches[0].clientX);
        ul.style.transform = "translateX("+(moveX+screenWidth*index*-1)+"px)";

    });
    ul.addEventListener("touchend",function () {
        // distanceX =distanceX + moveX;
        ul.style.transition =  "all .5s";
        if (Math.abs(moveX) > screenWidth/3){
            if (moveX > 0){
                index--;
            }else{
                index++;
            }
            ul.style.transform = "translateX("+(screenWidth*index*-1)+"px)";
        }else{
            ul.style.transform = "translateX("+(screenWidth*index*-1)+"px)";
        }
        timerid = setInterval(function () {
            index++;
            ul.style.transition = "all .5s";
            ul.style.transform = "translateX("+screenWidth*index*-1+"px)";
        },1000);
    })















};