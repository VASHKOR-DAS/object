// kichu smy por kono kaj 1 bar e korbe, amon korte chaile setTimeout diye korte hoy
// Ex-1

// timeout a kono millisecond na dile oita baki sobgulo kaj seshe sathe sathei setTimeout function take execute korbe
console.log(111);
setTimeout(function () {
    console.log(222);
})
console.log(333);

// Ex-1 (others way)
function dosomething() {
    console.log(555);
}
console.log(444);
dosomething();
console.log(666);

// sob kaj seshe koto second por setTimeout function take execute korbe, sei time millisecond a hiseb kore dewa hoy (3000millisecond = 3second)
// Ex-2
console.log(777);
setTimeout(() => {
    console.log(888);
}, 3000); // 3second por (terminal a) execute hocche 888
console.log(999);

// kichu smy por por kono kaj bar bar korbe, amon korte chaile setInterval diye korte hoy
// Ex-1
console.log(100);
setInterval(() => {
    console.log(200); //3second por por (terminal a) execute hote thakbe 200
}, 3000);
console.log(300);