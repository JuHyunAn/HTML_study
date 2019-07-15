// 90점 이상은 A, 80점 이상은 B, 70점 이상은 C, 60점 이상은 D, 모두 해당 안 될 경우는 F
var x = 85;     // 변수 x는 임의의 값으로 설정

// if 구문만 사용하여 조건문 작성
if(x >= 90){
    console.log("A");
}if(x < 90 && x >= 80){        // x는 B가 된다.
    console.log("B");
}if(x < 80 && x >= 70){
    console.log("C");
}if(x < 70 && x >= 60){
    console.log("D");
}if(x < 60){
    console.log("F");
}


// if, else if, else 구문을 모두 사용하여 조건문 작성 (코드가 보기 편해진다.)
if(x >= 90){
    console.log("A");
}else if(x >= 80){            // 위 (x >= 90)조건이 false라는 가정을 포함!
    console.log("B");
}else if(x >= 70){            // 위 (x >= 90), (x >= 80)조건이 모두 false라는 가정을 포함!
    console.log("C");
}else if(x >= 60){
    console.log("D");
}else{                        // else는 위 if, else if 조건문이 모두 false인 경우에 해당
    console.log("F");
}