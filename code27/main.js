// document.DOM메서드("메서드 값").DOM프로퍼티 = "프로퍼티 값";

document.getElementById("heading").innerHTML = "h1 태그입니다.";
document.getElementsByClassName("paragraph")[0].innerHTML = "p 태그입니다.";
document.getElementsByClassName("paragraph")[2].innerHTML = "p 태그입니다.";
document.getElementsByTagName("p")[1].innerHTML = "p 태그";
document.getElementsByTagName("p")[3].innerHTML = "p 태그";

/* Elements처럼 s가 붙은 메서드의 경우, 복수의 값을 반환하려하기 때문에 특정 값에
접근하기 위해서는 해당 태그의 [index 순서]를 별도로 입력해줘야함 */


var tagName = document.getElementsByTagName("P");
var len = tagName.length;
for(var i = 0; i < len; ++i){                           // i = index 즉, [n]순서에 있는 p태그를 지정
    tagName[i].innerHTML = "p 태그 정렬입니다.";
}
document.querySelectorAll("div#container > h1#heading")[0].innerHTML = "h1 태그입니다!";
// 모든 쿼리를 선택(복수)하기 때문에 적용할 코드[index 순서]를 정해줘야함

// "div#container > h1#heading" 에서 자식선택자(>)를 이용하여 h1 태그로 접근!




/*
                            --- 정리 ---

위 for문의 경우, p태그의 index 순서를 0 부터 시작해 하나씩 늘려나가(++) 4까지 반복.
즉, 0 순서부터 시작하기 때문에 5개 p태그 전부 적용됨!
(만약, i = 1 이면 0번째는 제외하고 4개의 p태그만 적용되는 형태의 수식)

                        --- for 반복문 결과 ---
document.getElementsByTagName("p")[0].innerHTML = "p 태그 정렬입니다.";
document.getElementsByTagName("p")[1].innerHTML = "p 태그 정렬입니다.";
document.getElementsByTagName("p")[2].innerHTML = "p 태그 정렬입니다.";
document.getElementsByTagName("p")[3].innerHTML = "p 태그 정렬입니다.";
document.getElementsByTagName("p")[4].innerHTML = "p 태그 정렬입니다.";

위 결과를 산출하게 됨

*/