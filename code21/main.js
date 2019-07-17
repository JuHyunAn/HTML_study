var arr = [1, 2, 3, 4, 5];
// index = 0, 1, 2, 3, 4        >   index 순서는 0부터 진행된다.
console.log(arr);


var arr = [1, 2, 3, 4, 5];
var idx;
for(var idx = 0; idx < arr.length; ++idx){
    console.log(arr[idx]);
}
// for(idx = 0부터 시작 / 인덱스가 어레이 길이보다 작으면, / idx를 더하면서 반복한다);


var arr = [1, 2, 3, 4, 5];
var idx;
var len = arr.length;
for(var idx = 0; idx < len; ++idx){
    console.log(arr[idx]);
}
// arr.length를 len 변수로 지정, 간편하게 arr.length 값을 고정해서 사용 가능



var idx = 0;
while(idx < len){
    if(idx == 2){                   // index 값이 2인 arr 값 3부터는 산출하지 않음
        break;
    }
    console.log(arr[idx]);
    ++idx;
}
// break를 통해 선 산출 후 코드를 빠져나오기 때문에 아래 console은 실행하지 않음