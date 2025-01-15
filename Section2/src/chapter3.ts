// object
let user: {
    id?: number; // 상황에 따라 생략해서 사용하고 싶을 때는 ?를 추가한다
    name: string;
} = {
    id: 1,
    name: "정예빈",
}


user = {
    name: "홍길동",
}
  
// 변하지 않는 프로퍼티 정의할 때 readonly를 쓴다
let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
}