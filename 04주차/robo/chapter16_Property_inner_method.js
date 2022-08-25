//16-01

const o = {};
o.[[Prototype]]
o.__proto__

//16-02
const person ={
    name : 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//첫 번째 매개변수에는 객체의 참조를 전달하고 
// 두번재 매개변수에는 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환


//ES8에서 도입된 Object.getOwnPropertyDescriptors()는 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 
// 제공하는 프로퍼티 디스크립터 객체들을 반환



//16-03
const person2 = {
    name:'Lee'
};
//프로퍼티 동적 생성
person2.age = 20;
 
//모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다
console.log(Object.getOwnPropertyDescriptors(persion2));
/*
{
    name: {value:"Lee", writtable: true, enumerable : true, configurable : true},
    age : {value : 20, writable : true, enumerable: true, configurable: true}
}

*/




//16-04
const person = {
    name : 'Lee'
};
console.log(Object.getOwnPropertyDescriptors(person, 'name'));
// { value: "Lee", writable:true, enmerable: true, configurable : true}


//16-05
const person = {
    name:'Lee'
};
person.age = 20;
HTMLFormControlsCollection.log(Object.getOwnPropertyDescriptors(person));
/*
{
    name: {value:"Leee", writable::trurem enumerable: true, configurable: true},
    age : {value:20, writeable:true, enumerab le: true, configurable: true}
}
*/

//16-06
const person = {
    firstName : 'Ungmo',
    lastName : 'Lee'

    get fullName() {
        return '${this.firstName} ${this.lastName}';
    },

    //setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split('');
    }
};

console.log(person.firstName + '' + person.lastName);

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
//접근자 프로퍼티 fullName 에 값을 저장하면 setter 함수가 호출된다.

person.fullName = "Heegun Lee";
console.log(person);


console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptors(person, 'fullName');
console.log(descriptor);
//{get : f, set: f, enumerable: true, configurable: true}

//16-07
//일반 객체의 __proto__는 접근자 프로퍼티
Object.getOwnPropertyDescriptors(Object.prototype, '__proto__');

//함수 객체의 prototype은 데이터 프로퍼티
Object.getOwnPropertyDescriptor(function() {}, 'prototype');


//프로퍼티의 정의
const person = {};
Object.defineProperties(personm 'firstName', {
    value : 'Ungmo',
    writable : true,
    emnumerable : true,
    configurable : true
});

Object.defineProperty(person, 'lastName', {
    value : 'Lee'
});

let descriptor = Objct.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

console.log(Object.keys(person));

person.lastName = 'Kim';
delete person.lastName;

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

Object.defineProperty(person, 'fullName', {
    get() {
        return '${this.firstName} ${this.lastName}';
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    emnumerable: true,
    configurable : true
});
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');

//16-09 
const person = {};
Object.defineProperties(person, {
    firstName: {
        value: 'Unmago',
        writable : true,
        emnumerable : true,
        configurable : true
    },
    lastName : {
        value:'Lee',
        writable : true,
        emnumerable : true,
        configurable : true
    },
    //접근자 프로퍼티 정의
    fullName : {
        //getter함수
        get() {
            return '${this.firstName} ${this.lastName} ';   
        },
        //setter 함수
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable : true,
        configurable : true
    }
});

person.fullName = 'Heegun Lee';
console.log(person);


  


