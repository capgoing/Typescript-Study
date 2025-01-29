/**
 * 함수 타입 표현식 
 */

type Operation = (a: number, b: number) => number; // 요런 타입을 Operation이라는 객체타입으로 저장하겠다는 뜻

const add: Operation = (a, b) => a + b;
const add2: (a: number, b: number) => number = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 : 함수의 타입을 별도로 정의하는 방법
 */

type Operation2 = {
    (a: number, b: number): number;
    name: string; // 추가 프로퍼티 정의 가능
};

const add3: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add3(1,2);
console.log(add3.name);