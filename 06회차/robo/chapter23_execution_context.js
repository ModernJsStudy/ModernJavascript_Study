var x;
x = 1;



//전역 변수 선언
 const x = 1;
 const y =2;


 //함수 정의
 function foo(a) {
    const x = 10;
    const y = 20;
    //메서드 호출
    console.log(a + x + y);
 }
//함수 호출
foo(100);

console.log(x + y); //3


const x = 1;
function foo() {
    const y =2;
    
    function bar() {
        const z = 3;
        console.log(x + y + z);
    }
    bar();
}
foo();
///stack 자료구조로 관리된다.
// 실행 컨텍스트 스택