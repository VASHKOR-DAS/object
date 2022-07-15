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

// apply korle parameter gulo array hisebe function a pathate hoy
normalPerson.chargeBill.apply(HeroPerson, [5000, 500, 50]);
console.log(HeroPerson.salary);