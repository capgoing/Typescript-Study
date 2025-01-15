// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// tsconfig.json 파일에 strictNullChecks 속성 추가
let numA: number = null;

// 리터럴 타입 => 상수같은 느낌. 값이 절대 변하지 않는 데이터
let literalN: 10 = 10;
let literalS: "hello" = "hello";
let literalB: true = true;