/**
 * 객체 타입의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
}

type Dog = { // name, color, breed 모두 갖춘 객체가 Dog가 된다 
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow"
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog; // ✅ OK

// dog = animal; // Animal 객체에 breed속성이 없기 떄문에 에러가 발생한다

let animal2: Animal = {
    name: "강아지",
    color: "brown", // 무조건 name, color 프로퍼티는 정의해줘야 한다
    //weight: "3.5kg" // ❌ 초과 프로퍼티 금지
}

function func(animal: Animal) {}
func({
    name: "고양이",
    color: "black",
    //weight: "4.8kg" // ❌ 초과 프로퍼티 검사로 인해 오류 발생
})

func(dog); // ✅ Dog 타입은 Animal 타입을 포함하므로 함수 호출 가능