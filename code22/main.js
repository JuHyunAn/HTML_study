var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = "";
var len = arr.length;
for(var i = 0; i < len; ++i){
    for(var j = 1; j <= 9; ++j){
        result += arr[i] + "*" + j + "=" + arr[i] * j + "<br>"
    }
}
document.write(result);

// 곱하기(구구단)를 표현, [A * B = C] 요런 형식으로 나타나도록 작성
// 각 연산을 한 줄씩 띄워서 표기하기 위해 "<br>" 태그를 사용 (문자형으로 고정해서 결합)