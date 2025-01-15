// void
// 아무것도 없음을 의미하는 타입
function func1() {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

let a: void;
a = undefined;


// never
// 불가능하고 모순적인 타입
// 그 어떤 값도 저장할 수 없음
function func3(): never {
    while(true) {}
}