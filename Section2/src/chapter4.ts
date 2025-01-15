// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "정예빈",
    nickname: "binni",
    birth:"2001",
    bio:"",
    location: "Gyounggido Paju"
}

// 인덱스 시그니처
type CountryCodes = {
   [key: string]: string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
}

