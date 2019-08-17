/*
var test = document.getElementById("test")
function multiply(x, y){                            // multiply라는 함수를 선언한 상태
    return x * y;                                   // 해당 함수의 반환값
}
test.innerHTML = multiply(2, 2);              // 결과는 2 * 2 = 4
*/



/*
var x = 0;
function interval(){
    test.innerHTML = ++x;
}
window.setInterval("interval()", 1000);     // x를 0부터 1초마다 하나씩 증가시킴
*/



/*
function myFunc(){
    var x = 10;
    test.innerHTML = x;                     // 결과는 10
}
myFunc();

test.innerHTML = x;    // 실행되지 않음, 함수안에서 선언된 변수(x)는 해당 함수에만 적용됨
*/



var multiply = function(x, y){              // 변수에 함수를 선언 (= 익명 함수)
    return x * y;
}
test.innerHTML = multiply(2, 4);            // 결과는 2 * 4 = 8