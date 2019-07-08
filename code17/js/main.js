/* 후위 연산 (값을 먼저 할당하고 증가/감소) */
var x = 10;
var y;
y = x++;        // y에 먼저 10을 주고나서 x를 11로 증가시킴
console.log(y); // 10
console.log(x); // 11

var x = 20;
var y;
y = x--;        // y에 먼저 20을 주고나서 x를 19로 감소시킴
console.log(y); // 20
console.log(x); // 19



/* 전위 연산 (증가/감소를 하고 나서 값을 할당) */
var x = 10;
var y;
y = ++x;        // y를 먼저 11로 증가 시키고 나서, x도 11로 증가시킴
console.log(y); // 11
console.log(x); // 11



/* 나누기 */
console.log(20 % 10); // 20 나누기 10 = 나머지 0
console.log(15 % 10); // 15 나누기 10 = 나머지 5



/* 기타 연산자 */
var z = 10;
// 콘솔 위 아래가 서로 동일한 식 (표기법의 차이!)
console.log(z += 1);
// z에 + 1 해준 값이 z 이다. 즉, z = 10 + 1 = 11
console.log(z = z + 1);
// 위 식에서 z가 11로 새롭게 선언됬으므로, z = 11 + 1 = 12



/* 비교 연산자 */
var x = 10, y = "10";
console.log(x == y);    // ture
// x와 y가 같은 값인지를 비교, 값의 자료형태까지는 구분하지 않음
console.log(x === y);   // false
// x와 y가 같은 값인지를 비교, 값의 자료형태까지 구분함

console.log(x != y);    // false
// x와 y가 같지 않다를 비교, 값의 자료형태까지는 구분하지 않음
console.log(x !== y);   // true
// x와 y가 같지 않다를 비교, 값의 자료형태까지 구분함



/* 사망 연산자 */
var x = 10, y = "10";
var z;
console.log(z = x == y ? 10 : 11);      // 10 (true)
console.log(z = x === y ? 10 : 11);     // 11 (false)
// z를 x, y 간의 조건을 통해 값을 설정
// 주어진 조건에 참이면 :(콜론) 앞쪽 값을, 거짓이면 뒤쪽 값을 부여하는 것으로 선언
// (변수 = 조건 ? 참 : 거짓)