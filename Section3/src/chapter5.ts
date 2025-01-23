/**
 * 타입 추론
 */

let a = 10; // number 타입으로 추론

function func(message = "hello") {
    return "hello";
}

let d; // 암묵적으로 any 타입으로 추론 -> 다른 타입으로 계속적으로 진화가 가능하다
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed(); // 오류

const num = 10;
const str = "hello";

let arr = [1, "string"]; // (number | string)[] 타입으로 추론
