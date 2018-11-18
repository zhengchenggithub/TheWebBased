//第一题：判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
//第一种方法：利用instance操作符判断类型
    var res = arr instanceof Array;
//第二种方法：利用Array.isArray方法
    var res = Array.isArray(arr);
//第三种方法：原型检测法
    var res =Object.prototype.toString.call(arr);
    if (res ==="[object Array]"){
        return true;
    } else {
        return false;
    }
}
//第二题：判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    if ( typeof fn == "function") {
        console.log("true");
    }else {
        console.log("false");
    }
}

//第三题：使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
//  被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object 对象。不会包含
// 函数、正则对象等
 function cloneObject(src) {
     //1、准确判断src数据类型
     //基础数据类型直接赋值（=）、引用类型拆分
    //2、如果是数组，迭代每个元素，进行递归cloneObject
     //3、如果是对象，迭代每个元素，进行递归cloneObject
var  res;
switch (toString.call(src)) {
    case "[object Boolean]":
        res = src;
        break;
    case "[object Number]":
        res = src;
        break;
    case "[object String]":
        res = src;
        break;
    case  "[object Array]":
        var temp = [];
        for (var i = 0; i < src.length; i++) {
            temp[i] = cloneObject(src[i]);
        }
        res = temp;
        break;
}
}
 // 测试用例：
// var srcObj = {
//     a: 1,
//     b: {
//         b1: ["hello", "hi"],
//         b2: "JavaScript"
//     }
// };
// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);
//
// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";
//
// console.log(abObj.a);
// console.log(abObj.b.b1[0]);
//
// console.log(tarObj.a);      // 1
// console.log(tarObj.b.b1[0]);    // "hello"

// 第四题：对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
//第一种方法：
function isContain(arr,ele) {
    for (var i = 0; i < arr.length;i++){
        if (arr[i] === ele){
            return true;
        }
    }
    return false;
}
function uniqArray(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++){
        if(!isContain(temp,arr[i])){
            temp.push(arr[i]);
        }
    }
    return temp;
}
//第二种方法：
function uniqArray(arr) {
    var n = [];
    for (var i = 0; i<arr.length;i++){
        //如果当前已经保存到临时数组，则跳过，否者则加入。
        if (n.indexOf(arr[i]) ==-1){
            n.push(arr[i]);
        }
    }
    return n;
}
// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]
//第五题：尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    var pattern = /^\s+|\s+$/g;
    //RegExp方法
    if (pattern.test(str)) {
        //字符串替换方法
        return str.replace(pattern, "");
    } else {
        return str;
    }
}
// 使用示例
var str = ' hi! ';
str = trim(str);
console.log(str); // 'hi!'
//第六题： 实现一个遍历数组的方法，针对数组中每一个元素执行 fn 函数，并将数组索引和元素作为
//参数传递
function each(arr, fn) {
      for(var i=0;i<length;i++){
        fn(arr[i],i);
    }
}
// 其中 fn 函数可以接受两个参数：item 和 index
// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output); // java, c, php, html
// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output); // 0:java, 1:c, 2:php, 3:html
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {}
// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3


//第七题：// 判断是否为邮箱地址
function isEmail(emailStr) {
    var pattern = /^\w+@\w+\.com$/;
    var i=emailStr.search(pattern)!==-1;
    return i;
}
// 判断是否为手机号
function isMobilePhone(phone) {
    var  pattern = /^1\d{10}$/;
    var i = phone.search(pattern)!==-1;
    return i;

}

//第八题：为 element 增加一个样式名为 newClassName 的新样式
function hasclass(element,sClass) {
    return element.className.match(new RegExp("(\\s|^)"+sClass+"(\\s|$)"))
}
function addClass(element, newClassName) {
    if(!hasclass(element,newClassName)){
        element.className += "" + newClassName;
    }
}
// 移除 element 中的样式 oldClassName
function removeClass(element, oldClassName) {
    if (hasClass(element, oldClassName)) {
        var reg = new RegExp("(\\s|^)" + oldClassName + "(\\s|$)");
        element.className = element.className.replace(reg, "");
    }
}

// 第九题：判断 siblingNode 和 element 是否为同一个父元素下的同一级的元素，返回 bool 值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}
// 获取 element 相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var position = {};
    position.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);//获取相对位置+滚动距离=绝对位置.
    position.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return position;
}
//第十题：(写不来，所以抄网上的，但还是看不懂！)
// 接下来挑战一个 mini $，它和之前的$是不兼容的，它应该是
// document.querySelector 的功能子集，在不直接使用 document.querySelector 的
// 情况下，在你的 util.js 中完成以下任务：
// 实现一个简单的 Query
function $(selector) {
    /**
     * $函数的依赖函数，选择器函数
     * @param   {string} selector CSS方式的选择器
     * @param   {object} root     可选参数，selector的父对象。不存在时，为document
     * @returns {Array}  返回获取到的节点数组，需要注意的是使用ID选择器返的也是数组
     */
    function VQuery(selector, root) {
        //用来保存选择的元素
        var elements = []; //保存结果节点数组
        var allChildren = null; //用来保存获取到的临时节点数组
        root = root || document; //若没有给root，赋值document
        switch (selector.charAt(0)) {
            case "#": //id选择器
                elements.push(root.getElementById(selector.substring(1)));
                break;
            case ".": //class选择器
                if (root.getElementsByClassName) { //标准
                    elements = root.getElementsByClassName(selector.substring(1));
                } else { //兼容低版本浏览器
                    var reg = new RegExp("\\b" + selector.substring(1) + "\\b");
                    allChildren = root.getElementsByTagName("*");
                    for (var i = 0, len = allChildren.length; i < len; i++) {
                        if (reg.test(allChildren[i].className)) {
                            elements.push(allChildren[i]);
                        }
                    }
                }
                break;
            case "[": //属性选择器

                if (selector.indexOf("=") === -1) {
                    //只有属性没有值的情况
                    allChildren = root.getElementsByTagName("*");
                    for (var i = 0, len = allChildren.length; i < len; i++) {
                        if (allChildren[i].getAttribute(selector.slice(1, -1)) !== null) {
                            elements.push(allChildren[i]);
                        }
                    }
                } else {
                    //既有属性又有值的情况
                    var index = selector.indexOf("="); //缓存=出现的索引位置。
                    allChildren = root.getElementsByTagName("*");
                    for (var i = 0, len = allChildren.length; i < len; i++) {
                        if (allChildren[i].getAttribute(selector.slice(1, index)) === selector.slice(index + 1, -1)) {
                            elements.push(allChildren[i]);
                        }
                    }
                }
                break;
            default: //tagName
                elements = root.getElementsByTagName(selector);
        }
        return elements
    }
    /**
     * 模仿jQuery的迷你$选择符。
     * @param   {string} selector CSS方式的选择器，支持简单的后代选择器（只支持一级）
     * @returns {object} 返回获取到的第一个节点对象，后代选择器时，返回第一个对象中的第一个符合条件的对象
     */
    function $(selector) {
//这里trim处理输入时两端出现空格的情况，支持ie9+。但是这个函数实现起来也特别简单，可以参考我task0002（-）前面有trim函数的实现。稍微修改一下，这样就没兼容性问题了。
        if (selector == document) {
            return document;
        }
        selector = selector.trim();
        //存在空格时，使用后代选择器
        if (selector.indexOf(" ") !== -1) {
            var selectorArr = selector.split(/\s+/); //分割成数组，第一项为parent，第二项为chlid。
            //这里没去考虑特别多的情况了，只是简单的把参数传入。
            return VQuery(selectorArr[1], VQuery(selectorArr[0])[0])[0];
        } else { //普通情况,只返回获取到的第一个对象
            return VQuery(selector,document)[0];
        }
    }

}
// 可以通过 id 获取 DOM 对象，通过#标示，例如
$("#adom"); // 返回 id 为 adom 的 DOM 对象
// 可以通过 tagName 获取 DOM 对象，例如
$("a"); // 返回第一个<a>对象
// 可以通过样式名称获取 DOM 对象，例如
$(".classa"); // 返回第一个样式定义包含 classa 的对象
// 可以通过 attribute 匹配获取 DOM 对象，例如
$("[data-log]"); // 返回第一个包含属性 data-log 的对象
$("[data-time=2015]"); // 返回第一个包含属性 data-time 且值为 2015 的对象
// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回 id 为 adom 的 DOM 所包含的所有子节点中，第一个样式定义包含 classa 的对象