/**
 * 타입 좁히기
 * 조건문 둘을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

/**
 * 타입가드1 - typeof
 */
function func(value: number | string) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}

/**
 * 타입가드2 - instanceof
 * 객체 타입가드
 */
function func2(value: number | string | Date | null) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) { // ✅ `instanceof` 연산자를 사용하여 `Date` 객체인지 확인 (객체 타입 가드)
        console.log(value.getTime());
    }
}

/**
 * 타입가드3 - in
 * 직접 만든 타입 사용할 때
 */
type Person = {
    name: string;
    age: number;
};

function func3(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && "age" in value) { // ✅ 직접 만든 객체(Person 타입)인지 확인하는 방법
        console.log(`${value.name}은 ${value.age}살 입니다`)
    }
}