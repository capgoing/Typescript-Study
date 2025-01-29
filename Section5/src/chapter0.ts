/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 변환하는지 이야기

/*
    function func(a, b) {
        return a + b;
    }
*/

function func(a: number, b: number): number { // 리턴타입 생략 가능
    return a + b;
}


/**
 * 화살표 함수 타입 정의하기
 */

const add = (a: number, b: number): number => a + b;


/**
 * 매개변수 있는 함수 타입 정의하기
 */

function introduce(name = "이정환", tall?: number) { // tail 타입에 ?(물음표)를 추가하여 선택적 매개변수로 만들어주어 생략 가능하다, 선택적 매개변수는 항상 마지막에 정의해준다
    console.log(`name : ${name}`);
    console.log(`tall : ${tall}`);
}

introduce("이정환", 156);

introduce("이정환"); // 이 식을 쓸 수 있도록 tail을 선택적 매개변수를 만들어 준 것


/**
 * rest파라미터(나머지 매개변수) 타입 정의하기
 */


function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}

getSum(1,2,3,4);