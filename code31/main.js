// 속성으로 이벤트 핸들러 등록
function changetext(){
    document.getElementById("text").innerHTML = "클릭 이벤트!";
}


var idx = 0;
function changeText(){
    var textArr = ["html", "css", "js", "python"];
    document.getElementById("test").innerHTML = textArr[idx++]; 
    if(idx == textArr.length){
        idx = 0;            // idx 값이 textArr의 길이(length)와 같아지면, 0으로 초기화
    }
}    
// 범위 벗어날 시 undefined 되는 것을 막기 위해서 idx 값을 초기화
// 즉, html > css > js > python 요 순서를 계속 반복하게 됨!




// DOM 객체 탐색으로 이벤트 핸들러 등록
document.getElementById("btn").onclick = function(){            // 익명 함수 이용
    changeText();
}