/**
 * 함수 오버로딩 : 같은 이름의 함수를 매개변수의 개수나 타입에 따라 다르게 동작하도록 만드는 문법
 */


// 버전들 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// function func(a: number, b: number, c?: number): void; // func(1,2)가 에러 안나려면 이렇게 c를 선택적 매개변수로 먼저 정의해야한다

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);        // ✅ 버전 1 - 오버로드 시그니쳐
// func(1, 2);     // ❌ 매개변수 두개만 받는 함수가 존재하지 않기 때문이다
func(1, 2, 3);  // ✅ 버전 3 - 오버로드 시그니쳐
