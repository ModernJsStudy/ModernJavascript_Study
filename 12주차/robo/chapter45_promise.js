// 45-01
//call back hell
//Get 요청을 위한 비동기 함수
const get = url => {
     const xhr = new XMLHttpRequest();
     xhr.open('GET', url);
     xhr.send();

     xhr.onload = () => {
        if(xhr.status === 200) {
            //서버의 응답을 콘솔에 출력한다.
            console.log(JSON.parse(xhr.response));
        }else{
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
     };
};

//id가 1인 POST를 취득
get('https://jsonplaceholder.typicode.com/posts/1');
/*
{
    "userId" : 1,
    "id" : 1,
    "title" : "sunt aut facere ...",
    "body" : "quia et suscipit ..."
}
*/


//45-02
let g = 0;
setTimeout(() => {g = 100; }. 0);
console.log(g);

//45-03
const get = url => {
    const xhr  = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
    if(xhr.status === 200) {
        return JSON.parse(xhr.response);
    }
        console.error(`${xhr.status} ${xhr.statusText}`);
    };
};
// id가 1인 Post 취득, get함수는 undefined를 반환한다.
const response = get('https://jsonplaceholder.typicode.com/posts/1');
console.log(response);
