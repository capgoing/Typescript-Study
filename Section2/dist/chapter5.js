// enum 타입
// 여러가지 값들이 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 0] = "ADMIN";
    Role2[Role2["USER"] = 1] = "USER";
    Role2[Role2["GUEST"] = 2] = "GUEST"; // 자동으로 2 할당
})(Role2 || (Role2 = {}));
var Role3;
(function (Role3) {
    Role3[Role3["ADMIN"] = 10] = "ADMIN";
    Role3[Role3["USER"] = 11] = "USER";
    Role3[Role3["GUEST"] = 12] = "GUEST"; // 자동으로 12 할당  
})(Role3 || (Role3 = {}));
var Role4;
(function (Role4) {
    Role4[Role4["ADMIN"] = 0] = "ADMIN";
    Role4[Role4["USER"] = 10] = "USER";
    Role4[Role4["GUEST"] = 11] = "GUEST"; // 자동으로 11 할당  
})(Role4 || (Role4 = {}));
const user1 = {
    name: "정예빈",
    // role : 0 -> 관리자
    role: Role.ADMIN,
};
const user2 = {
    name: "쇼타로",
    // role : 1 -> 회원
    role: Role.USER
};
const user3 = {
    name: "박원빈",
    // role : 2 -> 게스트
    role: Role.GUEST
};
export {};
