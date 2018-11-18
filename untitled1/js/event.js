// // 给一个 element 绑定一个针对 event 事件的响应，响应函数为 listener
// function addEvent(element, event, listener) {
//     element.addEventListener(event,listener,false)
// }
// // 例如：
// function show(event) {
//     console.log('hello world');
// }
// // function clicklistener(event) {
// //
// //
// // }
// // addEvent($("#doma"), "click", a);
// // // 移除 element 对象对于 event 事件发生时执行 listener 的响应
// function removeEvent(element, event, listener) {
// // your implement
//     element.removeEventListener(event,listener,false);
// }
// $.click = function () {
//
// }

function clickListener(event) {
    console.log(event);
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
