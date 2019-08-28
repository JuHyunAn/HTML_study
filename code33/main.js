document.getElementsByName("testText")[0].onkeydown = function(e) {
    var eventCode = e.code;
    if(eventCode == 'Digit1') {
        document.getElementById("test").innerHTML = "<img src='static/image1.jpg'>";
    }else if(eventCode == 'Digit2') {
        document.getElementById("test").innerHTML = "<img src='static/image2.jpg'>";
    }
};
// 매개 변수로 (e)를 사용, 이벤트를 핸들링 하겠다라는 의미
// 1을 입력하면 image1, 2를 입력하면 image2를 불러옴


document.getElementsByName("testText")[0].onkeyup = function(e) {
    if(e.code == 'Backspace') {
        document.getElementById("test").innerHTML = "";
    }
};
// Backspace를 눌렀다가 때면, 불러온 이미지가 지워지도록 공백("")처리

document.getElementsByClassName("btn")[0].onfocus = function() {
    document.getElementById("test").innerHTML = "onfocus -> onmouseon과 대응";
};
// "btn(버튼)" 0번째를 포커싱중일때...

document.getElementsByClassName("btn")[0].onblur = function() {
    document.getElementById("test").innerHTML = "onblur -> onmouseout과 대응";
}
// "btn(버튼)" 0번째를 포커싱중이 아닐때... (1,2,3번째 버튼 부터는 onblur)