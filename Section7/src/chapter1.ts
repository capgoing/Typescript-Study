// 인터페이스와 클래스

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    constructor(
        public name: string, // ✅ `public`을 꼭 사용하기
        public moveSpeed: number,
        private extra: string
    ) {}

    move(): void {
        console.log(`${this.name}이 ${this.moveSpeed}속도로 이동합니다.`);
    }
}