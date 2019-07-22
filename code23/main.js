var dog = {gender: " male", name: "Sam", age: 13};
// var 객체 = {키(속성): 값, 키: 값, 키: 값...};


/* 객체 사용 법
객체.method();                  메서드 실행
객체.property;                  속성(프로퍼티)을 가져옴(get)
객체.property = value;          속성(프로퍼티) 값 변경(set)
*/


console.log(dog.gender, dog.age, dog.name);
// 객체의 속성 값(gender, age, name)을 가져옴 (결과 : male 13 Sam)


dog.name = "Peter";
dog.age = 10;
console.log(dog.gender, dog.age, dog.name);
// 객체의 속성 값을 변경 (결과 : male 10 Peter)
// name, age의 값이 변경되어 적용됨


var arr = [1, 2, 3, 4, 5];
console.log(arr.length);
// 객체(arr).속성(length); (결과 : 5)






/*  내장 객체(자바스크립트가 기본적으로 제공하는 객체) */

var pi = Math.PI;
console.log(pi);
// Math는 수학 속성을 기본적으로 가짐, PI는 수학에서 원주율(π), 파이를 의미

console.log(Math.pow(2, 4));
// pow(x, y)는 y값을 x값 만큼 제곱한 것을 의미

console.log(Math.random());
// 결과를 산출할 때마다 임의의 정해지지 않은 값을 랜덤으로 산출