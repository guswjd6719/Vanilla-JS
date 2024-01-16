const age = prompt("How old are you?");

console.log(typeof age);            // 변수의 타입 확인
console.log(typeof parseInt(age));  
console.log(parseInt(age));         // String 을 Int 로 변환
console.log(isNaN(parseInt(age)));  // 변수 값이 Nan 인지 확인



const age2 = parseInt(prompt("How old are you?"));
if (isNaN(age2)) {
    alert("please write number");
} else if (age2 < 18) {
    alert("You are too young.");
}