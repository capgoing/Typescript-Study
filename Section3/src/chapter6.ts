/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = "정예빈";
person.age = 25;

type Dog = {
    name: string;
    color: string;
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;  // ❌ A가 B의 슈퍼타입도 아니고 서브타입도 아니다

/**
 * const 단언
 */
let num4 = 10 as const; // 10 Number Literal 타입으로 단언됨

let cat = { // 모든 프로퍼티가 readonly를 갖도록 단언된다. 변수값 수정 불가
    name: "야옹이",
    color: "yellow",
} as const;

/**
 * Non Null 단언
*/

type Post = {
    title: string; // title은 필수 프로퍼티
    author?: string; // author은 선택적 프로퍼티
};

let post: Post = {
    title: "게시글1",
};

// '!' (Non-null Assertion Operator)를 사용하여 author가 null 또는 undefined가 아님을 단언
const len: number = post.author!.length;