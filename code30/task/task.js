function getDate(){
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;      //getMonth 메서드 (0부터 1월을 나타냄)
    var day = new Date().getDate();
    var result = "";
    result = year + "-" + month + "-" + day;
    document.getElementById("test").innerHTML = result;
}


// a태그의 href속성으로 자바스크립트 함수를 불러올 수 있음
// <a href="javascript:함수명();"></a>