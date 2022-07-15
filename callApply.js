// object er value access korar upay
// const normalPerson = {
//     firstName: 'Rahim',
//     lastName: 'Uddin',
//     getFullName: function () {
//         // function er vitor theke call korte chaile
//         //-console.log(this.firstName); 
//         //ata hyna
//     }
// }

// baire theke call korte chaile
//-console.log(normalPerson);
// baire theke specific kichu access korte chaile
//-console.log(normalPerson.firstName);



// Example-2

// Jodi kono object er value baire theke change korte hoy tobe function add kore korte hoy
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
    },

    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);