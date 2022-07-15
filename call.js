/**
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,

    chargeBill: function (amount) {
        console.log(this); // for shows default value
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const HeroPerson = {
    firstName: 'Kamruzzam',
    lastName: 'Khan',
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'Fahim',
    lastName: 'Muntasir',
    salary: 6000,
}

//how to call a object method to another objects, seems to bind
normalPerson.chargeBill.call(HeroPerson, 500); //object name, (Use a comma) parameters
console.log(HeroPerson.salary);
*/


//EX-2
// when more parameter
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,

    chargeBill: function (amount, tips, tax) {
        console.log(this); // for shows default value
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const HeroPerson = {
    firstName: 'Kamruzzam',
    lastName: 'Khan',
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'Fahim',
    lastName: 'Muntasir',
    salary: 6000,
}

normalPerson.chargeBill.call(HeroPerson, 5000, 500, 50);
console.log(HeroPerson.salary);