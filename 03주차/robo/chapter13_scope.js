// 13-01
function add(x,y) {
    console.log(x,y);
    return x+y;
}
add(2,5);
console.log(x,y);



//13-02
var var1 =1;
if(true){
    var var2 = 2;
    if(true) {
        var var3 = 3;
    }

}
function foo() {
    var var4 = 4;
    
    function bar() {
        var var5 = 5;
    }
    console.log(var1);
}
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);



//13-04
function foo() {
    var x = 1; //var 중복선언 허용 같은 스코프내에서
    var x = 2;
    console.log(x);

}

foo;



function bar() {
    let x = 1; // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
    let x = 2;
}
bar();


var x ="global x";
var y = "global y";

function outer() {
    var z = "outer's local z";


    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var  x = "inner's local x";
        
        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
}

outer();

console.log(x);
console.log(z);


var x = 1;
if(true) {
    var x = 10;
}

console.log(x); //10

