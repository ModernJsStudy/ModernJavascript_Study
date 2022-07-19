//19-01
const person = {
    name : 'Lee',
    address : 'Seoul'
};

console.log(person);
//subject는 이름과 주소 속성를 표현된 object인 person을 다른 객체와 구별하여 인식할 수 있다
// 속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체 라고 한다.
// 객체 지향 프로그래밍은 독립적인 객체의 집합으로 프로그래미을 표현하려는 프로그래밍 패러다임이다.


//Circle 이라는 개념을 객체로 만들면 , 원 : 반지름, 원의 지름, 둘레, 넓이
//반지름은 원의 상태를 나타내는 데이터, 원의 지름 , 둘레, 넓이를 구하는 것은 동작이다.

//19-02
const circle = {
    radius : 5, // 반지름
    //원의 지름 : 2r
    getDiameter() {
        return 2 * this,this.radius
    },

    //원의 둘레 : 2파이r
    getPerimeter() {
        return 2 * Math.PI * this.radius;

    },

    //원의 넓이 : 파이rr
    getArea() {
        return Math.PI * this.radius ** 2;
    }
};

console.log(circle_;
    //{ radius : 5, getDoammeter : fl getPerimeter; f, getArea : f }
console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());

//19-03
/// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    };
}

//번지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
//반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수느 인스턴스를 생성할 때마다 동일한 동작을 하는 
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); //false(원의 넓이)
console.log(circle1.getArea());
console.log(circle2.getArea());


//19-04
// 생성자 함수
function Circle(radius) {
    this.radius = radius;
}
//Circle 생성자 함수가 생성한 모든 인스턴스가 getArea메서드를 공유해서 사용할 수 있도록 프로토타입에 추가
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩 되어 있다.

Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};

// 인스턴스를 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 프로토타입으로부터 getArea 메서드를 상속받는다.
// 즉, circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true


//19-06
const obj = {};
const parent = {x:1},

//obj객체의 프로토타입을 취득
obj.__proto__;
obj.__proto__ = parent;
console.log(obj.x); // 1


//19-07
const person = {name: 'Lee'};
console.log(person.hasOwnProperty('__proto__'));
console.log(Object.getOwnPropertyDescriptors(Object.prototype, '__proto__'));
console.log({}.__proto__ === Object.prototype); // true
// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.


// 접근자 프로퍼티를 사용하는 이유는 상호참조에 의해 프로토 타입 체인이 생성되는 것을 방지하기 위해서이다.


// 19-08
const parent = {};
const child = {};
child.__proto__ = parent;
parent.__proto__ = child;


//19-09
//obj는 프로토타입 체인의 종점이다. Object.__proto__ 를 상속받을 수 없다.
const obj = Object.create(null);
console.log(obj.__proto__); //undefined
console.log(Object.getPrototypeOf(obj));//null


//19-12
//화살표 함수는 non-consturctor
const Person = name => {
    this.name = name;
}
console.log(Person.hasOwnProperty('prototype'));
console.log(Person.prototype);

const obj = {
    foo() {}
};

console.log(obj.foo.hasOwnProperty('prototype')); //false
console.log(obj.foo.prototype); //undefind



//19-13
// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

console.log(Person.prototype === me.__proto__); // true


//19-14
//생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');
console.log(me.constructor === Person);

// me 객체는 constructor 프로퍼티가 없지만 me 객체의 프로토타입인 Person.prototype에는 constructor 프로퍼티가 있다.
// me 객체는 프로토타입인 Person.prototype의 constructor 프로퍼티를 상속받아 사용할 수 있다.




//19-15
const obj = enw Object();
console.log(obj.constructor === Object);

const add = new Function('a', 'b', 'return a+b');
console.log(add.constructor === Function);

// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');
console.log(me.constructor === Person); //true


//19-16
//객체 리터럴

const obj = {};

// 함수 리터럴
const add = function (a,b) {return a+b; };

//배열 리터럴
const arr = [1, 2, 3];

//정규표현식 리터럴
const regexp = /is/ig;



//19-17
//obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj = {};

//하지만 obj객체의 생성자 함수는 Object 생성자 함수다.
console.log(obj.constructor === Object); //true




//19-19
function foo() {}
console.log(foo.constructor === Function); //true


//19-20
console.log(Person.prototype);

function Person(name) {
    this.name = name;
}


//19-21
const Person = name => {
    this.name = name;
}
console.log(Person.prototype);



//전역객체
// 19-22
window.Object === Object // true

// 19-23
const obj = { x : 1 };

//19-24
const obj = { x : 1 };
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));


//19-25
const obj = new Object();
obj.x = 1;


//19-26
const obj = new Object();
obj.x = 1;
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));




//19-27
function Person(name) {
    this.name = name;
}
const me = new Person('Lee');


//19-28
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log('Hi! My name is ${this.name}');
};

const me = new Person('Lee');
const you = new Person('Kim');
me.sayHello();
you.sayHello();

