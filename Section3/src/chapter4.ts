/**
 * 대수타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number;
a = 1;
a = "hello";

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = { // ✅ Dog에만 해당
  name: "",
  color: "",
};

let union2: Union1 = { // ✅ Person에만 해당
  name: "",
  language: "",
};

let union3: Union1 = { // ✅ Dog & Person 모두 해당
  name: "",
  color: "",
  language: "",
};


// let union4: Union1 = { // ❌
//     name: "",
//   };

/**
 * 교집합 - Intersection 타입
 */

let variable: number & string; // never 타입으로 추론된다

type Intersection = Dog & Person;

let intersection1: Intersection = { // 교집합 속성이기 때문에 모든 프로퍼티를 설정해주어야 한다
  name: "",
  color: "",
  language: "",
};