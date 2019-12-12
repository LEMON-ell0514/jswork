function $(id) {
    return document.getElementById(id);
}
$('smallBox').onmouseout = function () {
    $('mask').style.display = 'block';
    $('bigBox').style.display = 'block';
}
$('smallBox').onmousemove = function (event) {
    var event = event || window.event;
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
    var boxX = pageX - $('box').offsetLeft;
    var boxY = pageY - $('box').offsetTop;
    var maskX = boxX - $('mask').offsetWidth / 2;
    var maskY = boxY - $('mask').offsetHeight / 2;
    if (mask < 0) {
        mask = 0;
    }
    if (maskX > $('smallBox').offsetWidth - $('mask').offsetWidth){
        maskX = $('smallBox').offsetWidth - $('mask').offsetWidth;
    }
    if (mask < 0) {
        mask = 0;
    }
    if (mask > $('smallBox').offsetHeight - $('mask').offsetHeight){
        mask = $('smallBox').offsetHeight - $('mask').offsetHeight;
    }
    $('mask').style.left = maskX + 'px';
    $('mask').style.top = maskY + 'px';
    var bigImgToMove = $('bigImg').offsetWidth - $('bigBox').offsetWidth;
    var maskToMove = $('smallBox').offsetWidth - $('mask').offsetWidth;
    var rate = bigImgToMove / maskToMove;
    $('bigImg').style.left = -rate * maskX + 'px';
    $('bigImg').style.top = -rate * maskY + 'px';
};