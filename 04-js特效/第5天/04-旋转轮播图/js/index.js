/**
 * Created by Administrator on 2017/8/17.
 */
window.onload = function () {
    var arrow = document.getElementById("arrow");
    var prev = arrow.children[0];
    var next = arrow.children[1];
    var arrowChildren = arrow.children;
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var flag = true;
    var arr = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            z:2
        }
    ];

    slide.onmouseenter = function () {
        // animate(prev,{"opacity":100})
        // animate(next,{"opacity":100})
        animate(arrow,{"opacity":100})
    }
    slide.onmouseleave = function () {
        animate(arrow,{"opacity":0})
    }
    // for(var i=0;i<liArr.length;i++){
    //     animate(liArr[i],{
    //         "width":arr[i].width,
    //         "top":arr[i].top,
    //         "left":arr[i].left,
    //         "opacity":arr[i].opacity,
    //         "zIndex":arr[i].z
    //     })
    // }
    move();
    next.onclick = function () {
       if (flag){
           flag = false;
           move(false);
       }
    }
    prev.onclick = function () {
        if (flag){
            flag = false;
            move(true);
        }
    }
    // //利用for...in...绑定事件。绑定后利用元素的className属性知道是前一个还是后一个，然后调用函数。
    // for(var k in arrowChildren){
    //     arrowChildren[k].onclick = function () {
    //         if(this.className === "prev"){
    //             if(flag === true){
    //                 flag = false;
    //                 move(true);
    //                 //点击一次立刻修改为false，这样儿别人就不能在点击。（点击也不执行move()）
    //             }
    //         }else{
    //             if(flag){
    //                 flag = false;
    //                 move(false);
    //             }
    //         }
    //     }
    // }
    function move(bool) {
        if (bool === undefined){

        }else {
            if (bool) {
                var json = arr.pop();
                arr.unshift(json);
                //arr.unshift(arr.pop());
            } else {
                var json = arr.shift();
                arr.push(json);
                //arr.push(arr.shift);
            }
        }
            for(var i=0;i<liArr.length;i++){
                animate(liArr[i],{//arr中z 改成zIndex就可以直接调用arr[i]；
                    "width":arr[i].width,
                    "top":arr[i].top,
                    "left":arr[i].left,
                    "opacity":arr[i].opacity,
                    "zIndex":arr[i].z
                },function () {
                    flag = true;
                })
            }
    }








}