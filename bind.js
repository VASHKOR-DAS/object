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
// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);

// jodi kono object er majhe kono method thaker, r sei method jodi onno object er jonno apply korte hoy, tobe bind use korle function bar bar call korte hyna.

// Ex-1
const HeroChargeBill = normalPerson.chargeBill.bind(HeroPerson);
HeroChargeBill(2000);
console.log(HeroPerson.salary);

// Ex-2
const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(2500);
console.log(friendlyPerson.salary);