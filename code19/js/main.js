var x = 10, y = '10', z = true;

if(x == 10){
    console.log("x는 10입니다.");
}else if(y == 10){
    console.log("y는 10입니다.");
}else{
    console.log("위 모든 조건이 거짓");
}

/* if (맨 상위) 조건문이 참(ture)이기 때문에, 이어진 else if / else 문은 실행되지 않음
(자바스크립트는 위에서 부터 읽어 내려오기 때문!) */


if(x == 10 && y == 10){
    console.log("x는 10입니다.");
}

// 일반 비교(==)는 문자 형태를 구별하지 않기 때문에, y도 참(ture)이 되어 조건문을 충족


if(x == 10 && y === 10){
    console.log("x는 10입니다.");
}

/* 절대 비교(===)는 문자 형태를 구분하기 때문에, 숫자형이 아닌 y는 거짓(false)이므로, 
조건에 불충족 */


if(x == 10 || y === 10){
    console.log("x는 10입니다.");
}

/* or 연산(||)은 조건 둘 중 하나만 충족해도 결과를 산출,
y가 거짓(false)이어도 x가 참(true)이기 때문에 조건에 충족 */


if(!z){
    console.log("z는 거짓입니다.");
}

// z가 true이기 때문에, !z는 false가 되어, 실행되지 않는다.





/* ----------------- switch - case 구문 ----------------- */

var x = 10;


switch(x){
    case 10: console.log("10");
    case 5: console.log("5");
}

// swich-case 구문은 연속된 값을 모두 실행시키기 때문에 중간에 끊어주는 요소가 필요(break)
// break를 통해서 코드가 중간에 값을 산출하도록 빠져나오게 할 수 있다.


switch(x){
    case 10: console.log("10");     // 실행
        break;
    case 5: console.log("5");       // 실행 안됨
        break;
    default : console.log("15");    // 실행 안됨 (이미 실행된 값이 있어서 실행x)
}


switch(x){
    case 5: console.log("5");       // 실행 안됨
        break;
    default : console.log("15");    // default 값은 보통 마지막에 작성
}

// 어떠한 값도 실행되지 않을 경우, 기본적으로 보여주게 될 값을 설정 (default 값)