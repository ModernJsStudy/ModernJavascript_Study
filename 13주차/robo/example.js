//각 예제의 로그에 찍힌 결과값의 이유를 설명해주세요.

//## 1
function * a() {
    const b = yield 1;
    return b;
}

const g = a();
console.log(g.next());
console.log(g.next());

//## 2
function * a(){
    const b = yield 1;
    return b;
}

const g = a();
console.log(g.next());
console.log(g.next(10));

//## 3
function *a(){
    const b = yield 1;
    const c = yield b;
    const d = yield c;
    return b+c+d;
}

const g = a();
console.log(g.next());
console.log(g.next(10));
console.log(g.next(100));
console.log(g.next(1000));
