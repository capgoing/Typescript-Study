/**
 * 서로소 유니온 타입
 */

type Admin = {
    tag: "ADMIN"; // ✅ 구분할 수 있는 고유한 태그 추가
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};


type User = Admin | Member | Guest; // ✅ 유니온 타입 (Admin, Member, Guest 중 하나를 가질 수 있음)

function login(user: User) {
    /*
    // ❌ 추천하지 않는 타입 가드 방식(어떤 객체인지 판단하기 어려움)
    if ("kickCount" in user) {
          // Admin
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
    } else if ("point" in user) {
          // Member
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
    } else {
          // Guest
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
    }
     */

    // ✅ 태그 기반 타입 가드 (Discriminated Union 사용)
    if (user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
    } else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
    }
}


/**
 * switch문 사용
 */

function login2(user: User) {
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
            break;
        }
    }
}