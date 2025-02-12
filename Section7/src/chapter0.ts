/**
 * Class
 */

class Employee {
    // field
    name: string = "";
    age: number = 0;
    position: string = ""

    // function
    work() {
        console.log("work");
    }
}

class Employee2 {
    // field
    name: string;
    age: number;
    position: string;

    // 생성자 만들기 - constructor
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // function
    work() {
        console.log("work");
    }

    // this - 객체 가리키는 것
    introduce() {
        console.log(`안녕하세요 ${this.name} 입니다!`);
    }
}

class ExecutiveOfficer extends Employee2 {
    officeNumber: number;

    constructor(
        name: string,
        age: number,
        position: string,
        officeNumber: number
    ) {
        super(name, age, position); // ✅ 부모 클래스의 생성자 호출
        this.officeNumber = officeNumber;
    }
}


