// kichu smy por kono kaj 1 bar e korbe, amon korte chaile setTimeout diye korte hoy
// Ex-1

// timeout a kono millisecond na dile oita baki sobgulo kaj seshe sathe sathei setTimeout function take execute korbe
console.log(111);
setTimeout(function () {
    console.log(222)
})
console.log(333);

// Ex-1 (others way)
function dosomething() {
    console.log(555)
}
console.log(444);
dosomething();
console.log(666);