/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 괜찮은지 판단하는
 * 1. 두 함수의 반환값 타입이 호환되는가
 * 2. 두 함수의 매개변수 타입이 호환되는가
 */


// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; // ❌


/**
 * 기준2. 매개변수가 호환되는가
 * 2-1. 매개변수의 개수가 같을 때
 */

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => { };
let d: D = (value) => { };

// c = d; // ❌
d = c; // ✅

// 아래의 예시를 통해 이해가 가능하다
type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

//animalFunc = dogFunc; // ❌ animalFunc에는 color 속성이 없기 때문이다
dogFunc = animalFunc; // ✅

/**
 * 2-2. 매개변수의 개수가 다를 때
 */

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌