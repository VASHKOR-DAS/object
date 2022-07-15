// Jodi same property er onkgulo object toiri korte hoy, tobe class keyword use korte hoy
class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

//new keyword ta holo, kono class theke object banano
const HeroPerson = new Person('Hero', 'Balam', 25000);
console.log(HeroPerson);


// old method by declare new keyword
function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Grand', 'Papa', 1200);
console.log(oldPerson);