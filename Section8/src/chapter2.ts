/**
 * 제네릭 인터페이스
 */

interface KeyPair<K,V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
};

// 인덱스 시그니처
interface Map2<V> {
    [key: string]:V;
}

let stringMap: Map2<string> = {
    key: "value",
}

