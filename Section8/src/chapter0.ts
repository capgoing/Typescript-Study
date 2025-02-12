/**
 * 제네릭
 */

function genericFunc<T>(value: T): T {
    return value;
}

let num = genericFunc(10);
let str = genericFunc("hello");
let bool = genericFunc(true);

// 배열
let arr = genericFunc<[number, number, number]>([1, 2, 3]);

// 제네릭 사용 방법1: 2개의 타입매개변수가 필요할 때
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);

// 제네릭 사용 방법2: 배열 타입의 매개변수가 필요할때
function genericArr<T>(data: T[]) {
    return data[0]; // 첫번째 요소의 타입으로 반환
}

let numArr = genericArr([0, 1, 2]);
let numStrArr = genericArr([1, "hello", "mynameis"]); // number | string

// 제네릭 사용 방법3: 타입길이와 타입종류가 상관없을 때
function genericArr2<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let numStrArr2 = genericArr2([1, "hello", "mynameis"]);

// 제네릭 사용 방법4: 타입변수를 제한둘 때
function getLength<T extends { length: number }>(data: T) {
    return data.length;
}