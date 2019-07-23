var user = {gender: "male", name: "JuHyun", address: "Korea", age: 28};
// var 객체 = {키: 값, 키: 값...}

console.log(user.age);                // 28
console.log(user.gender);             // male
console.log(user.name);               // JuHyun
console.log(user.address);            // Korea


// 객체 값을 변경하여 다시 산출
user.address = "France";
user.gender = "female";
user.age = 24;

console.log(user.address);            // France
console.log(user.age);                // 24
console.log(user.gender);             // female
console.log(user.name);               // JuHyun (새로 set하지 않았기에 같은 값을 get해옴)





// js 코드를 html 문자형으로 표기시키기
document.write(user.gender + "<br>" + user.name + "<br>" + user.address + "<br>" + user.age);