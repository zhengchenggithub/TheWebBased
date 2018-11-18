//JavaScript数据类型及语言基础

/**
 * 判断arr是否是一个数组
 *
 * @param {any} arr 数组
 * @returns
 */
function isArray(arr) {
    //方法一：利用instance操作符判断类型，但是它假设只有一个全局执行环境(js88)
    //var res = arr instanceof Array;
    //方法二：利用Array.isArray方法(js88)
    //var res = Array.isArray(arr);
    //方法三：原型检测(js597)
    var res = Object.prototype.toString.call(arr);
    if (res === "[object Array]") {
        return true;
    } else {
        return false;
    }
}

/**
 * 判断fn是否是一个函数
 *
 * @param {any} fn 函数
 * @returns
 */
function isFunction(fn) {
    //同数组判断
    var res = Object.prototype.toString.call(fn);
    if (res === "[object Function]") {
        return true;
    } else {
        return false;
    }
}

/**
 * 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
 * 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
 *
 * @param {any} src 要克隆的对象
 * @returns
 */
function cloneObject(src) {
    // your implement
    var res;
    switch (toString.call(src)) {
        case "[object Number]":
            res = src;
            break;
        case "[object String]":
            res = src;
            break;
        case "[object Boolean]":
            res = src;
            break;
        case "[object Array]":
            var tmp = [];
            for (var i = 0; i < src.length; i++) {
                tmp[i] = cloneObject(src[i]);
            }
            res = tmp;
            break;
        case "[object Object]":
            res = new Object();
            for (var propName in src) {
                if (isFunction(src[propName])) {
                    break;
                }
                res[propName] = src[propName];
            }
            break;
    }
    return res;
}

/**
 * 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
 *
 * @param {any} arr 数组
 * @returns
 */
function uniqArray(arr) {
    // your implement
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (!isContain(res, arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

function isContain(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true;
        }
    }
    return false;
}

/**
 * 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
 * 假定空白字符只有半角空格、Tab
 * 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
 *
 * @param {any} str 字符串
 * @returns
 */
function simpleTrim(str) {
    // your implement
    var head = 0,
        tail = str.length - 1;
    while (str[head] == " ") {
        head++;
    }
    while (str[tail] == " ") {
        tail--;
    }
    return str.substring(head, tail + 1);
}

/**
 * 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
 * 尝试使用一行简洁的正则表达式完成该题目
 *
 * @param {any} str 字符串
 * @returns
 */
function trim(str) {
    // your implement
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
 *
 * @param {any} arr 数组
 * @param {any} fn 函数
 */
function each(arr, fn) {
    // your implement
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}

/**
 * 获取一个对象里面第一层元素的数量，返回一个整数
 *
 * @param {any} obj 要判断属性数量的对象
 * @returns
 */
function getObjectLength(obj) {
    var i = 0;
    for (protoName in obj) {
        i++;
    }
    return i;
}

/**
 * 判断是否为邮箱地址
 *
 * @param {any} emailStr 邮件地址
 * @returns
 */
function isEmail(emailStr) {
    // your implement
    var reg = /^\w+@\w+\.{1}\w+$/g;
    if (reg.test(emailStr)) {
        return true;
    } else {
        return false;
    }
}

/**
 * 判断是否为手机号
 *
 * @param {any} phone 手机号码
 * @returns
 */
function isMobilePhone(phone) {
    // your implement
    var reg = /^[0-9]{11}$/g;
    if (reg.test(phone)) {
        return true;
    } else {
        return false;
    }
}

//DOM

/**
 * 为element增加一个样式名为newClassName的新样式
 *
 * @param {any} element 节点
 * @param {any} className 类名
 * @returns
 */
function hasClass(element, className) {
    //首先判断elment有没有这个样式
    var classNames = element.className;
    if (!classNames) {
        return false;
    }
    classNames = classNames.split(/\s+/);
    for (var i = 0, len = classNames.length; i < len; i++) {
        if (classNames[i] === className) {
            return true;
        }
    }
    return false;
}

function addClass(element, newClassName) {
    if (!hasClass(element, newClassName)) {
        element.className += " " + newClassName;
    }
}

/**
 * 移除element中的样式oldClassName
 *
 * @param {any} element 节点
 * @param {any} oldClassName 已存在的类名
 */
function removeClass(element, oldClassName) {
    if (hasClass(element.className)) {
        element.className.replace(pattern, "");
    }
}

/**
 * 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
 *
 * @param {any} element 节点
 * @param {any} siblingNode 下一个同级节点
 * @returns
 */
function isSimbingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

/**
 * 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
 *
 * @param {any} element 节点
 * @returns
 */
function getPosition(element) {
    var x = 0;
    var y = 0;
    var current = element;
    while (current != null) {
        x += current.offsetLeft;
        y += current.offsetTop;
        current = current.offsetParent;
    }
    return {
        x: x,
        y: y
    };
}

/**
 * 接下来挑战一个mini $，它和之前的$是不兼容的，它应该是document.querySelector的功能子集，在不直接使用document.querySelector的情况下
 *
 * @param {any} selector 选择器名称
 * @returns
 */
function $(selector) {
    var res;
    var tag = selector.charAt(0);
    switch (tag){
        case '#':
            res = document.getElementById(selector.substring(1));
            break;
        case '.':
            res = document.getElementsByClassName(selector.substring(1))[0];
            break;
        default:
            res = document.getElementsByTagName(selector)[0];
            break;
    }
    return res;
}
// 给一个 element 绑定一个针对 event 事件的响应，响应函数为 listener
function addEvent(element, event, listener) {
    element.addEventListener(event,listener,false);
}
// 例如：
function show(event) {
    console.log('hello world');
}
// function clicklistener(event) {
//
//
// }
// addEvent($("#doma"), "click", a);
// // 移除 element 对象对于 event 事件发生时执行 listener 的响应
function removeEvent(element, event, listener) {
// your implement
    element.removeEventListener(event,listener,false);
}
$.click = function (element,listener) {
        addClickEvent(element,listener);
}
// $.un = function (element,event,listener) {
//     removeEvent(element,event,listener);
// }
function addClickEvent(element,listener) {
    addEvent(element,'click',listener);

}

function clickListener(event) {
    console.log(event.target);
    var target=event.target;
    target.style.background='red';

}
function renderList() {
    $("#list").innerHTML += '<li>new item</li>';
}
function init() {
    each($("#list").getElementsByTagName('li'), function(item) {
        $.click(item, clickListener);
    });
    $.click($("#btn"), renderList);
}
init();
function delegateEvent(element,tag,eventName,listener) {
    $.click(element,function (event) {
        // console.log(event.target.tagName);
        if (event.target.tagName == tag.toUpperCase()) {
            listener(event);
        }
    })
}
$.delegate = delegateEvent;
$.delegate($('#list'),"li","click",clickListener);

// 判断是否为 IE 浏览器，返回-1 或者版本号
function isIE() {
    var uUserAgent = navigator.userAgent; //保存浏览器的userAgent
    var ieAgent = uUserAgent.match(/msie (\d+.\d+)/i);
    if (ieAgent) {
        return ieAgent[1];
    } else {
        if (uUserAgent.match(/Trident\/7.0;/i)) { //处理到ie11.
            ieAgent = uUserAgent.match(/rv:(\d+.\d+)/i);
            return ieAgent[1];
        }
        return -1; //不是ie浏览器。
    }
}
// 设置 cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + expiredays);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + oDate;
}
// 获取 cookie 值
function getCookie(cookieName) {
    var arr = document.cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        if (arr2[0] == cookieName) {
            return arr2[1];
        }
    }
    return "";
}
//删除cookies
function removeCookie(cookieName) {
    setCookie(cookieName, "1", -1)
}

/**
 * AJAX函数封装
 * @param {string} url     请求地址（必须）
 * @param {object} options 发送请求的选项参数
 *   @config {string} [options.type] 请求发送的类型。默认为GET。
 *   @config {Object} [options.data] 需要发送的数据。
 *   @config {Function} [options.onsuccess] 请求成功时触发，function(oAjax.responseText, oAjax)。（必须）
 *   @config {Function} [options.onfail] 请求失败时触发，function(oAjax)。(oAJax为XMLHttpRequest对象)
 *
 *@returns {XMLHttpRequest} 发送请求的XMLHttpRequest对象
 */
function ajax(url, options) {
    //1.创建ajax对象
    var oAjax = null;
    /**
     * 此处必须需要使用window.的方式,表示为window对象的一个属性.不存在时值为undefined,进入else
     * 若直接使用XMLHttpRequest,在不支持的情况下会报错
     **/
    if (window.XMLHttpRequest) {
        //IE6以上
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.连接服务器
    //open(方法,url,是否异步)
    var param = ""; //请求参数。
    //只有data存在，且为对象使才执行
    var data = options.data ? options.data : -1; //缓存data
    if (typeof (data) === "object") {
        for (var key in data) { //请求参数拼接
            if (data.hasOwnProperty(key)) {
                param += key + "=" + data[key] + "&";
            }
        }
        param.replace(/&$/, "");
    } else {
        param = "timestamp=" + new Date().getTime();
    }

    //3.发送请求
    var type = options.type ? options.type.toUpperCase() : "GET";
    if (type === "GET") {
        oAjax.open("GET", url + "?" + param, true);
        oAjax.send();
    } else {
        oAjax.open("POST", url, true);
        oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oAjax.send(param);
    }

    //4.接收返回
    //OnRedayStateChange事件
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
            if (oAjax.status === 200) {
                //请求成功。形参为获取到的字符串形式的响应数据
                options.onsuccess(oAjax.responseText, oAjax);
            } else {
                //先判断是否存在请求失败函数
                //存在时，形参为XMLHttpRequest对象，便于进行错误进行处理
                if (options.onfail) {
                    options.onfail(oAjax);
                }
            }
        }
    };
    return oAjax;//发送请求的XMLHttpRequest对象
}