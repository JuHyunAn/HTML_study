/* 날짜 객체 */

// getTime() 함수 : 1970-01-01 이후 경과한 시간을 milliseconds 단위로 반환한다.

var date = new Date("1970-01-01");      // 1970-01-01는 js의 기본 초기화 시간 (값은 0)
console.log(date.getTime());


var date = new Date("1970-01-02");      // 86400000
console.log(date.getTime());
// 1970-01-01(0)을 기준으로, 하루가 더해진 시점!
// (하루 24시간 = 1,440분 = 86,400초 = 86,400,000밀리초)


var date = new Date("2019-07-25");      // 1564099200000
console.log(date.getTime());
// 1970-01-01(0)을 기준으로, 18103일(49년6개월25일) 더해진 시점!
// (434,472시간 = 26,068,320분 = 1,564,099,200초 = 1,564,099,200,000밀리초)




/* 문자열 객체 */

var str1 = "korea";
var str2 = "Juhyun An";
var str3 = "java,script"
console.log(str1.length);       // 5 (5자리)
console.log(str2.length);       // 9 (공백 포함 9자리)


// charAt(index) 함수 : 해당 인덱스 순서에 있는 값을 가져옴 (index는 0부터 시작...)
console.log(str2.charAt(5));    // n (인덱스 5번에 위치한 문자)
console.log(str1.charAt(0));    // k            ..  
console.log(str2.charAt(3));    // y            ..


// split(구분자) 함수 : 값을 지정한 method로 구분지어서 표기
console.log(str1.split(""));    // ["k", "o", "r", "e", "a"]
console.log(str2.split(""));    // ["J", "u", "h", "y", "u", "n", " ", "A", "n"]
console.log(str3.split(","));   // ["java", "script"]

// ""(모든 문자열을 나눔), ","(,를 기준으로 문자열을 나눔)..등 구분 기준을 통해 나눔


// indexOf(찾을 문자) 함수 : 해당 문자가 몇번째 index에 위치하는지 표기
console.log(str1.indexOf("e"));     // 3 (세번째 인덱스에 위치)
console.log(str2.indexOf("A"));     // 7        ..
console.log(str3.indexOf(","));     // 4        ..
console.log(str3.indexOf("3"));     // -1 (찾는 값이 없을 경우 -1을 반환)