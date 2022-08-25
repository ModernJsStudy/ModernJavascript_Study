//22-01
const circle = {
    radius : 5,
    getDiameter() {
        return 2 * circle.radius;
    }
};
console.log(circle.getDiameter());


//22-03
const circle2 = {
    radius :4,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());

//22-06
//this 바인딩은 함수 호출 방식에 따라 동적으로 바인딩된다.

const foo = function() {
    console.dir(this);
};

//동일한 함수도 다양한 방식으로 호출할 수 있다.
//1. 일반 함수의 호출
//foo 함수를 일반적 방식으로 호출
foo(); //window
//전역객체 window를 가리킨다.


//2. 메서드 호출
//foo함수를 프로퍼티 값으로 할당하여 호출
//객체 obj 를 가리킨다.

const obj = {foo};
obj.foo(); //obj


//3. 생성자 함수 호출
//foo 함수를 new 연산자와 함께 생성자 함수로 호출
//생성한 인스턴스를 가리킨다.

new foo(); //foo{}


//4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수의 내부의 this는 인수에 의해 결정된다

const bar = {name : 'bar'}
foo.call(bar); //bar
foo.apply(bar); //bar
foo.bind(bar); //bar



//22-11
var value = 1;

const obj = {
    value : 100,
    foo() {
        const that = this;

        //콜백함수 내부에서 this 대신 that 참조
        setTimeout(funtion() {
            console.log(that.value);
        }, 100);
    }

};

obj.foo();



//22-12
var value = 1;
const obj = {
    value : 100,
    foo() {
        //콜백함수는 명시적으로 this를 바인딩한다.
        setTimeout(funciton() {
            console.log(this.value);
        }.bind(this), 100);
    }
};

obj.foo();


//22-13
var value = 1;

const obj - {
    foo() {
        //화샇표함수 내부의 this는 상위 스코프의 this를 가리킨다.
        setTimeout(() => console.log(this.value), 100);
    }
};
obj.foo();


//22-14
const person = {
    name : 'Lee',
    getName() {
        return this.name;
    }
};
console.log(person.getName());




