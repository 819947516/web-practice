/**
 * Created by Lenovo on 2016/9/2.
 */
/**
 *
 * @param ele
 * @param attr
 * @returns {*}
 */
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}


function show(ele) {
    ele.style.display = "block";
}
function hide(ele) {
    ele.style.display = "none";
}
/**
 *
 * @returns {*}
 */
function client() {
    if (window.innerWidth !== undefined){
        return {
            "width":window.innerWidth,
            "height":window.innerHeight
        }
    }else if (document.compatMode === "CSS1Compat"){
        return {
            "width":document.documentElement.clientWidth,
            "height":document.documentElement.clientHeight
        }
    }else {
        return {
            "width":document.body.clientWidth,
            "height":document.body.clientHeight
        }
    }
}
/**
 *
 * @returns {*}
 */
function scroll() {
    if (window.pageYOffset !== undefined) {
        var json = {
            "top": window.pageYOffset,
            "left": window.pageXOffset
        }
        return json;
    } else if (document.compatMode === "CSS1compat") {
        return {
            "top": document.documentElement.scrollTop,
            "left": document.documentElement.scrollLeft
        }
    } else {
        return {
            "top": document.body.scrollTop,
            "left": document.body.scrollLeft
        }
    }
}
/**
 *
 * @param ele
 * @param json
 * @param fn
 */

function animate(ele,json,fn) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for (var k in json){
            var leader =parseInt(getStyle(ele,k)) || 0;
            var step = (json[k] - leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);

            //               ele.style[attr] = leader + step + "px";
            leader = leader + step ;
            ele.style[k] = leader + "px";
            console.log(1);
//                    if (Math.abs(step)>=Math.abs(json[k] - leader)){
//                        ele.style[k] = json[k] + "px";
//                        clearInterval(ele.timer);
//                    }
//                    if (json[k] !== leader){
//                        bool = false;
//                    }
            if (Math.abs(step)<Math.abs(json[k]-leader)){
                bool = false;
            }
        }
        if (bool){
            for (var k in json){
                ele.style[k] = json[k] + "px";
            }
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }

    },20)
}

/**
 * 通过传递不同的参数获取不同的元素
 * @param str
 * @returns {*}
 */
function $(str){
    var str1 = str.charAt(0);
    if(str1==="#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断，如果不是传递过来的元素本身，那么添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}