var firstName = 'ro';
var lastName = 'bo';

//ES6 : 표현식 삽입
console.log(`My Name is ${firstName} ${lastName}.`);
//My Name is firestName(ro) lastName(bo);

//표현식의 평가결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환되어 삽입된다.


console.log(`1+2 = ${1+2}`); //1+2=3


var key = Symbol('key');
console.log(typeof key);

var obj = {};

 obj[key] = 'value';
 console.log(obj[key]);
 