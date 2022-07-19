//일급객체
// 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3. 함수의 매개변수에 전달 할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

//18-01
const increase = function(num) {
    return ++num;
};

const decrease = function ( num) {
    return --num;
};

//함수는 객체에 저장가능
const predicates = {increase, decrease};


//함수의 매개변수에 전달
//함수의 반환값으로 사용
function makeCounter(predicate) {
    let num = 0;
    
    return function() {
        num = predicate(num);
        return num;
    };
}

// 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());


//함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());


//18-02
function square(number) {
    return number + number;
}

console.dir(square);



//18-03

function square(number) {
    return number + number;
}

console.log(Object.getOwnPropertyDescriptors(square));
console.log(Object.getOwnPropertyDescriptor(square, ' __proto__'));
console.log(Object.getOwnPropertyDescriptors(Object.prototype, '__proto__'));


//18-04
function multiply(x,y) {
    console.log(arguments);
    return x + y;
}

console.log(multiply); //NaN
console.log(multiply(1)); //NaN
console.log(multiply(1,2)); //2
console.log(multiply(1, 2, 3)); //2


//18-06
function sum() {
    let res = 0;

    for(let i 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3));



// 18-07
function sum() {
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0 );
}

console.log(sum(1, 2));
console.log(sum(1,2,3,4,5));


//18-08 ES6 Rest Parameter
function sum(...args) {
    return args.reduce((pre, cur)) => pre + cur, 0);
}
console.log(sum(1,2));
console.log(sum(1,2,3,4,5));



// 18-10
function foo() {}
consolelog(foo.length);

function bar(x) {
    return x;
}

console.log(bar.length);

function baz(x,y) {
    return x+y;
}

console.log(baz.length);



// 기명 함수 표현식
// 18-11
var namedFunc = function foo() {};
console.log(namedFunc.name);

var annonymousFunc = function() {};
console.log(annonymousFunc.name);

//함수 선언문
function bar() {}
console.log(bar.name);

//18-12
const obj = {a:1};
console.log(obj.__proto__ === Object.prototype);

console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__proto__'));


//18-13
(function () {}).hasOwnProperty('prototype');
({}).hasOwnProperty('prototype');

