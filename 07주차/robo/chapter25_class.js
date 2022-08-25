//25-01
// //ES5 생성자 함수
// var Person = (function () {
//     function Petson(name) {
//         this.name = name;
//     }

//     //프로토타입 메서드
//     Person.prototype.sayHi = function() {
//         console.log('Hi ! My Name is '+ this.name);
//     };

//     //생성자 함수 반환
//     return Person;
// }());

// //인스턴스 생성
// //var me = new Person('Lee');
// //me.sayHi();

//25-02
//ES6에서 도입된 클래스
// class Person() {}


//25-03 익명 클래스 표현식
// const Person = class{};


//25-04 기명 클래스 표현식
// const Person = class MyClass{};

//클래스 선언문
// class Person {
//     //생성자
//     constructor(name) {
//         //인스턴스 생성 및 초기화
//         this.name = name; //name 프로퍼티는  public하다.
//     }

//     //프로토 타입 메서드
//     sayHi(){
//         console.log('Hi My name is ${this.name}');
//     }
//     //정적 메서드
//     static sayHello() {
//         console.log('Hello!');
//     }
// }

// //인스턴스 생성
// const me  = new Person('Lee');

// //인스턴스의 프로퍼티 참조
// console.log(me.name); //Lee
// //프로토타입 메서드 호출
// me.sayHi(); ///Hi My Name is Lee
// // 정적 메서드 호출
// Person.sayHello(); //Hello!


//25-05
//클래스 선언문
// class Person {}
// console.log(typeof Person); //function


//25-06 
// console.log(Person); //ReferencError

// class Person{}

//25-07
// const Person = '';
// {
//     console.log(Person);
//     class Person{}
// }

// //.25-20
// class Person {
//     constructor(name) {
//         this.name = name;
//         return {}; //명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
//     }
// }

// const me = new Person('Lee');
// console.log(me); // {}

//25-21
// class Person {
//     constructor(name) {
//         this.name = name;//명시적으로 원시값 반환하면 암묵적으로 this 가 반환이 된다.
//         return 2000;
//     }
// }

// const me = new Person('Lee');
// console.log(me);






// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayHi = function() {
//     console.log(`Hi My ame is ${this.name}`);//리터럴값 ``
// };
// const me = new Person('Jee');
// me.sayHi();



// Object.getPrototypeOf(me) === Person.prototype; //true

// me instanceof Person; // true

// Object.getPrototypeOf(Person.prototype) === Object.prototype; //true
// me instanceof Object; //true
// //me 객체의 constructor는 POerson 클래스다.
// me.constructor === Person;

//25-32
class Person {
    construnctor(name) {
        console.log(this);
        console.log(Object.getPrototypeOf(this) === Person.prototype);
        this.name = name;

    }
}