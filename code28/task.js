document.getElementById("head").innerHTML = "h1 태그입니다.";
//선택자 문법으로 특정 엘리먼트에 접근할 수 있습니다.
document.querySelector("p").innerHTML = "p 태그입니다.";


document.querySelectorAll("div#list > p.body")[0].innerHTML = "p 태그";
document.querySelectorAll("div#list > p.body")[1].innerHTML = "p 태그2";
// querySelectorAll을 해주었기 때문에, index 순서[n]를 별도로 지정해서 접근