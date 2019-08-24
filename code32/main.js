var colorArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var p = document.getElementById("test");

p.onmouseover = function() {
    var rand = Math.floor(Math.random() * colorArr.length);
    p.style.backgroundColor = colorArr[rand];
}

p.onmouseout = function() {
    p.style.backgroundColor = "white";
}

/*
var idx = 0;                                        전역 변수! 로 인덱스를 설정,
p.onmouseover = function() {
    p.style.backgroundColor = colorArr[idx++];      인덱스를 하나씩 늘리면서 그에 해당하는 color를 불러옴
    if(idx == colorArr.length) {                    반복시키기 위해, 마지막 idx = 6(violet) 다음, idx = 7(미지정)이 되는 시점에서,
        idx = 0;                                    idx = 0(red)으로 다시 초기화  
    }
}                                                   즉, red > ... > violet > red > ... 순으로 반복
*/

document.getElementById("btn1").addEventListener("click", function() {
    alert("실행문1");
}, false);

document.getElementById("btn1").addEventListener("click", function() {
    alert("실행문2");
}, false);

document.getElementById("btn1").addEventListener("click", function() {
    alert("실행문3");
}, false);
// 한 번에 여러 이벤트를 중복 등록하여 실행시키기 위해, addEventListener를 사용