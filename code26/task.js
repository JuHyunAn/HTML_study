var now = new Date();   // 오늘 날짜
var count = new Date("2019-08-05");     //D-day 날짜
var gap = now.getTime() - count.getTime();      // 오늘 날짜와 D-day 날짜의 차

// 두 날짜 사이의 차를 하루로 나눈 값을 소수점 이하 버림 연산
gap = Math.floor(gap/86400000);

var result = ""; // 결과를 반환할 변수

// D-day 계산
if (gap > 0){           // gap 이 0보다 크면, D-day를 초과, "D+day(초과한 날짜)"
    result = "+"+gap;
}
else if (gap == 0){
    result = "-day";    // D-day
}
else{
    result = gap;       // gap은 어차피 음수 조건이기 때문에, "-" 붙일 필요 없음
}

document.write("D-day를 기준으로 D" + result + "입니다.");