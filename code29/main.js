// window는 BOM 객체의 최상위 객체, 기존 document 앞에 사용 가능..(생략해도 문제 없음)

var test = document.getElementById("test");
// window.open("https://www.google.com");      // .open 메서드는 특정 사이트를 오픈시켜줌
// window.close();                             // .close 메서드는 기존 사이트를 닫음
// window.confirm("ture or false");            // .confirm 사용자에게 응답을 나타내는 메서드


var TrueOrFalse = window.confirm("true or false");
test.innerHTML = TrueOrFalse;               // 컨펌창에서 [확인]은 true / [취소]는 false를 반환


// 브라우저의 크기를 보여주는 프로퍼티 (현재 열려있는 창의 너비/높이를 산출)
test.innerHTML = "width: " + window.innerWidth + " height: " + window.innerHeight;


window.alert("알림창입니다.");                // .alert 메서드는 브라우저에 알람창을 띄움


// 브라우저에 0부터 1000까지 하나씩 더해지면서 계속 커지는 숫자(p태그)를 산출 (타이머 같은 방식..)
var x = 0;
window.setInterval("interval()", 1000);
function interval(){
    test.innerHTML = ++x;
}
