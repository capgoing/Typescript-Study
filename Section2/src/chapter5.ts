// enum 타입
// 여러가지 값들이 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Role2 {
    ADMIN, // 자동으로 0 할당
    USER, // 자동으로 1 할당
    GUEST // 자동으로 2 할당
}

enum Role3 {
    ADMIN = 10, // 자동으로 10 할당
    USER, // 자동으로 11 할당
    GUEST // 자동으로 12 할당  
}

enum Role4 {
    ADMIN, // 자동으로 0 할당
    USER = 10, // 자동으로 10 할당
    GUEST // 자동으로 11 할당  
}

const user1 = {
    name : "정예빈",
    // role : 0 -> 관리자
    role: Role.ADMIN,
}

const user2 = {
    name : "쇼타로",
    // role : 1 -> 회원
    role: Role.USER
}

const user3 = {
    name : "박원빈",
    // role : 2 -> 게스트
    role: Role.GUEST
}