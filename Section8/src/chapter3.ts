/**
 * 제네릭 클래스
 */

class List<T> {
    constructor(private list: T[]) { }

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2"]);

/**
 * Promise와 제네릭
 */

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});

promise.then((response) => {
    console.log(response);
})

promise.catch((error) => {
    if(typeof error === "string") {
        console.log(error);
    }
})