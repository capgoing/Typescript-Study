/**
 * 제너릭한 Map 메소드와 forEach 메소드
 */

const arr2 = [1, 2, 3];

// Map
function map<T>(arr: T[], callback: (item: T) => T): T[] {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (it) => it * 2);

// forEach
function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

arr2.forEach((it) => console.log(it));