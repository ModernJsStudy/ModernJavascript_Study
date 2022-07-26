// //26-01
// var foo = function() {
//     return 1;
// };

// foo();

// new foo();

// var obj = {foo : foo};
// obj.foo();


// //26-02
// var foo = function() {};
// foo();
// new foo();

//결과값이 나오지 않는ㄴ다....

//26-05
// const obj = {
//     x: 1,
//     foo() {return this.x; },
//     bar : function() {return this.x; }
// };
// console.log(obj.foo());
// console.log(obj.bar());


// const base = {
//     name: 'Lee',
//     sayHi() {
//         return `Hi! ${this.name}`;
//     }
// };
// const derived = {
//     __proto__ : base,
//     sayHi() {
//         return `${super.sayHi()}. how are you doing?` ;
//         //super() 메서드를 사용해서 함수값을 불러왔다. 
//         // ES6메서드는 sayHi() [[HomeObject]]를 갖는다.
//     }
// };
// console.log(derived.sayHi());

//26-10
// const derived = {
//     __proto__: base,
//     sayHi: function() {
//         return `${super.sayHi()}. How are you doing?`;
//     }
// };



const multiply = (x, y) => x * y;
multiply(2,3);