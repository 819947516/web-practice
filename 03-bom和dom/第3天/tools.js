/**
 * Created by Administrator on 2017/8/5.
 */
/**
 * 获取id标签打的元素
 * @param id
 * @returns {Element}
 */
function getEleId(id) {
    return document.getElementById(id);
}
/**
 * 获取第一个元素子节点
 * @param ele
 */
function getFirstNode(ele) {
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}
/**
 * 获取最后一个元素子节点
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele) {
    var node = ele.lastElementChild || ele.lastChild;
    return node;
}
//下一个元素兄弟节点
function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}
//给定元素查找他的上一个兄弟元素节点，并返回
function getPrevNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}
/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index) {
    return ele.parentNode.children[index];
}
/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblingNodes(ele) {
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        if (arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}