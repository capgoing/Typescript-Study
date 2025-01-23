/**
 * unknown 타입
 */

function unknownEx() {
    let a: unknown = 1;                 // number -> unknown
    let b: unknown = "hello";           // string -> unknown
    let c: unknown = true;              // boolean -> unknown
    let d: unknown = null;              // null -> unknown
    let e: unknown = undefined;         // undefined -> unknown
    let f: unknown = [];                // Array -> unknown
    let g: unknown = {};                // Object -> unknown
    let h: unknown = () => { };          // Function -> unknown

    let unknownVar: unknown;

    // let num: number = unknownVar; // 다운캐스팅 불가

    let i = 1;
    unknownVar = i;
}

/**
 * Never 타입
 */

function neverEx() {
    function neverFunc(): never {
        while(true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();

    // let never1: never = 10;
}


function voidEx() {
    function voidFunc(): void {
        console.log("hi");
        return undefined;
    }

    let voidVar: void = undefined;
}

/**
 * any 타입 - 업캐스팅과 다운캐스팅 모두 가능한 치트키 타입
 */

function anyEx() {
    let unknownVar: unknown;
    let anyVar: any;

    anyVar = unknownVar; // 다운캐스팅했는데도 오류가 안난다
    unknownVar = anyVar;
}