


const circle1 = {
    radius : 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1,getDiameter());

const circke2 = {
    radius : 10,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter());

// circle1 객체와 circle2객체는 프로퍼티 구조가 동일하다 
// 객체 고유의 상태 데이터인 radius 프로퍼티의 값은 객체마다 다를 수 있지만 getDiameter () 는 완전히 동일하다

//17-04 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}


//인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);


console.log(circle1.getDiameter());
console.log(circle1.getDiameter());




//17-05
function foo() {}
    const bar = function() {};
    const baz = {
        x : function() {}
    };
    new foo();
    new bar();
    new baz.x();

    const arrow = () => {}'
    new arrow ();
    
    const obj = {
        x(){}
    };
new obj.x();

