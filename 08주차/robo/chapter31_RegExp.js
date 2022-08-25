//RegExp
const tel = '010-1234-567팔';

const regExp = /^\d{3}-\d{4}-\d{4}$/;

regExp.test(tel);

// /시작  패턴(pattern)  종료/ 플래그(flag) :대소문자 구별 안함
//RegExp.prototype.test
//31-05
const target ='Is this apple';
const regExp2 = /is/;
regExp2.test(target);

//String.prototype.match
const target1 = 'Is this all there is?';
const regExp3 = /is/;
target1.match(regExp3); //[is, index : 5, input : , groups: undefined]
target1.match(regExp3); //[is, is] : 이런식으로 배열로 반환

//플래그의 의미
// ignore case : 대소문자를 구뱔하지 않고 패턴을 검색한다.
// global : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
// multi line : 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.

//임의의 문자열 검색
//31-12
const target3 = 'Is this all there is?';
const regExp3 = /.../g;
target3.match(regExp3); //임의의 문자열 3개씩 자르기


 //반복검색 {m,n} : 최소 m, 최대 n
 //31-13
 const target4 = 'A AA B BB Aa Bb AAA';
 const regExp4 = /A{1,2}/g;
 target4.match(regExp4); 

 //{n}은 문자열이 n번 반복되는 것 {n,n}
 const target5= 'A AA B BB Ab Ba AAA';
 const regExp5= /A{2}/g;
 target5.match(regExp5);

 //{n,}: 최소 n번 이상 반복되는 문자열
 const target6= 'A AA B BB Ab Ba AAA';
 const regExp6= /A{2,}/g;
 target6.match(regExp6);



//+는 문자열의 최소 1번 이상의 반복 ; +는 {1,}

const regExp7 = /A+/g;


//?는 패턴이 최대 1번 이상 반복되는 문자열 {0,1}
// ||은 or의 의미 
// 분해되지 않은 or은 +
//범위 지정 : -
// [0-9,]+ : 매칭결과가 분리된다.

// \d는 [0-9]이다.
// \D는 숫자가 아닌 문자를 의미

// /[\w,]+/g : 알파벳, 숫자, 언더스코어, ',' 1번 이상 반복되는 문자열을 전역검색
// \W : 알파벳, 숫자, 언더스코어가 아닌 문자
// \w : [A-Za-z0-9_]


// $는 문자열의 마지막을 의미

//[...]밖의 ^는 문자열의 시작
//[...]안의 ^은 not의 의미




// 주로 사용하게 되는 정규표현식
//31-30 
const url = 'https://example.com';
/^https?:\/\//.test(url); 

/^(http\https):\/\//.test(url);

///$:문자열의 마지막
const fileName = 'index.html';
/html$/.test(fileName);


//숫자로만 이뤄진 문자열
target = '12345';
/^\d+$/.test(target);


// \s: 하나 이상의 공백을 의미
// 인터넷 메세지 형식 규약인 RFC 5322에 맞는 정교한 패턴 매칭이 필요하면 복잡한 패턴을 사용해야 힌다.
const email = 'ungmo2@gmail.com';

/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email);


// 특수문자 제거는  String.prototype.replace 메서드를 사용
target.replace(/[^A-Za-z0-9]/gi,'');