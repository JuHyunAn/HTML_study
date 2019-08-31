// 결과 리스트를 나타낼 변수
var autocomplete = document.getElementById("autocomplete");
// input 태그의 값을 받아올 변수
var search = document.getElementById("search");
// 특정 키워드 입력 값에 대한 결과를 반환할 배열
var wordlist = ["galaxy_tab", "galaxy_note", "iphone", "ipad"];
// 문자열 결합을 위한 변수
var word = "";

search.addEventListener("keyup", function(e) {
    var keyword = search.value; // input 태그에 입력한 값을 나타낼 변수
    // 문자열 결합
    if(keyword == "phone") {
        for(var i = 0; i < wordlist.length; ++i) {
            // 반복문으로 부터 배열을 별도로 불러오기 위해 word 변수에 할당
            word += wordlist[i] + "\n"
        }
        autocomplete.innerHTML = word;
    }else if(keyword == "") {   // 키워드 값(입력 값)이 없는 경우
        autocomplete.innerHTML = "";
    }else {     // "phone"이 아닌 다른 값을 입력했을 경우
        autocomplete.innerHTML = "검색 결과가 없습니다.";
    }
    word = "";  // 이벤트 종료, word 값 초기화
}, false);