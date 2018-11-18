
// 判断arr是否为一个数组，返回一个bool值
//第一种方法：
// function isArray(arr) {
//     var str = arr.__proto__.constructor;
//     var reg = /function ([\w]+)\(/;
//     return reg.exec(str)[1]==="Array";
// }
// console.log(isArray([]))
//第二种方法：
// function isArray(arr) {
//     var str = {}.toString.call(arr);
//     var reg = /\[object (\w+)\]/;
//     return reg.exec(str)[1]==="Array";
// }
// console.log(isArray([]));
// 判断fn是否为一个函数，返回一个bool值
// function isFunction(fn) {
//     return (typeof fn)==="function";
// }
//
// console.log(isFunction(function(){}))
// console.log("Hello world");

// function $(id) {
//     return document.getElementById(id);
// }
// function add(num1, num2) {
//     return num1 + num2;
// }
// function renderResult(result) {
//     $("result").innerHTML = result;
// }
// function addEventHandle() {
//     var num1 = parseInt($("number1").value);
//     var num2 = parseInt($("number2").value);
//     var result = add(num1, num2);
//     renderResult(result);
// }
// function initEvent() {
//     $("addbtn").addEventListener("click", addEventHandle, false);
// }
// initEvent();
// function isArray(arr) {
//     if(toString.call(arr) == "[object Array]"){
//         console.log(true);
//     }else{}
//     console.log(false);
//
// }
// // 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// // 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
// function cloneObject(src) {
//     //1、准确判断src数据类型
//     //基础数据类型直接赋值（=）、引用类型拆分
//
//     //2、如果是数组，迭代每个元素，进行递归cloneObject
//
//     //3、如果是对象，迭代每个元素，进行递归cloneObject
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
                        var  temp =[];
                        for (var i= 0; i < src.length;i++){
                            temp[i] = cloneObject(src[i]);
                    }
                    res = temp;
                        break;

                }




//}
//
// // 测试用例：
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


// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
// function uniqArray(arr) {
//     var n = [];
//     for (var i = 0; i<arr.length;i++){
//         //如果当前已经保存到临时数组，则跳过，否者则加入。
//         if (n.indexOf(arr[i]) ==-1){
//             n.push(arr[i]);
//         }
//     }
//     return n;
// }
// 使用示例
// var a = [1, 3, 5, 7, 5, 3];
// var b = uniqArray(a);
// console.log(b); // [1, 3, 5, 7]
// // 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个 trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab 等，返回一个字符串
//  尝试使用一行简洁的正则表达式完成该题目
// function trim(str) {
//     var pattern = /^\s+|\s+$/g;
//     //RegExp方法
//     if (pattern.test(str)) {
//         //字符串替换方法
//         return str.replace(pattern, "");
//     } else {
//         return str;
//     }
// }
// 思路：这里用到了正则表达式，还有正则的test()和string的replace()方法.
    // 注意:正则里的“|”代表或运算符;
// // 使用示例
// var str = ' hi! ';
// str = trim(str);
// console.log(str); // 'hi!'
// // 实现一个遍历数组的方法，针对数组中每一个元素执行 fn 函数，并将数组索引和元素作为
// 参数传递
// function each(arr, fn) {
//     for(var i=0;i<length;i++){
//         fn(arr[i],i);
//     }
// }
// // 其中 fn 函数可以接受两个参数：item 和 index
// // 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item) {
//     console.log(item)
// }
// each(arr, output); // java, c, php, html
// // 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item, index) {
//     console.log(index + ': ' + item)
// }
// each(arr, output); // 0:java, 1:c, 2:php, 3:html
// // 获取一个对象里面第一层元素的数量，返回一个整数
//第一种：
// function getObjectLength(obj){
// //     var length=0;
// //     for(var propName in obj){
// //         if(obj.hasOwnProperty(propName)){
// //             length++;
// //         }
// //     }
// //     return length;
// // }
// // //第二种:
// // function getObjectLength(obj){
// //     var length=0;
// //     return Object.keys(obj).length;//键值
// // }
// 思路：for in语句会枚举出对象的所有属性，我们这里不需要全部属性，只需要对象的实例属性，所以还要用hasOwnProperty属性过滤一遍.
//     第二种：直接用Object.keys(obj)方法,返回的也是实例属性.但是貌似是es5里面的.
    // 另外提一下，Object.getOwnPropertyNames(obj),可以返回obj的所有属性，但是好像也是es5的.
// // 使用示例
// var obj = {
//     a: 1,
//     b: 2,
//     c: {
//         c1: 3,
//         c2: 4
//     }
// };   
// console.log(getObjectLength(obj)); // 3
 // 学习正则表达式，在 util.js 完成以下代码
// // 判断是否为邮箱地址
// function isEmail(emailStr) {
//     var pattern=/^\w+@\w+\.com/;
//     var i=emailStr.search(pattern)!==-1;
//     return i;
// }
// // 判断是否为手机号
// function isMobilePhone(phone) {
//      var pattern=/^1\d{10}$/;
//     var i=phone.search(pattern)!==-1;
//     return i;
// }
// 先来一些简单的，在你的 util.js 中完成以下任务：
// // 为 element 增加一个样式名为 newClassName 的新样式
// function addClass(element, newClassName) {
//     // your implement
// }
// // 移除 element 中的样式 oldClassName
// function removeClass(element, oldClassName) {
//     // your implement
// }
// // 判断 siblingNode 和 element 是否为同一个父元素下的同一级的元素，返回 bool 值
// function isSiblingNode(element, siblingNode) {
//     // your implement
// }
// // 获取 element 相对于浏览器窗口的位置，返回一个对象{x, y}
// function getPosition(element) {
//     // your implement
// }
// // your implement
// 接下来挑战一个 mini $，它和之前的$是不兼容的，它应该是
// document.querySelector 的功能子集，在不直接使用 document.querySelector 的
// 情况下，在你的 util.js 中完成以下任务：
// // 实现一个简单的 Query
// function $(selector) {
//
// }
// // 可以通过 id 获取 DOM 对象，通过#标示，例如
// $("#adom"); // 返回 id 为 adom 的 DOM 对象
// // 可以通过 tagName 获取 DOM 对象，例如
// $("a"); // 返回第一个<a>对象
// // 可以通过样式名称获取 DOM 对象，例如
// $(".classa"); // 返回第一个样式定义包含 classa 的对象
// // 可以通过 attribute 匹配获取 DOM 对象，例如
// $("[data-log]"); // 返回第一个包含属性 data-log 的对象
// $("[data-time=2015]"); // 返回第一个包含属性 data-time 且值为 2015 的对象
// // 可以通过简单的组合提高查询便利性，例如
// $("#adom .classa"); // 返回 id 为 adom 的 DOM 所包含的所有子节点中，第一个样式定义
// 包含 classa 的对象

