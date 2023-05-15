"use strict"

class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary
        }
        get name() {
        return this._name
        }
        set name(newName) {
        return this._name = newName
        }
        get age() {
        return this._age
        }
        set age(newAge) {
        return this._age = newAge
        }
        get salary() {
        return this._salary
        }
        set salary(newSalary) {
        return this._salary = newSalary
        }

}
const employ = new Employee('Rostyslav', 23, 1000);
console.log(employ._name)
console.log(employ._age)
console.log(employ._salary)
class Programmer extends Employee {
    constructor(lang, salary) {
        super();
        this._lang = lang
        this._salary = salary
    }
    get lang(){
        return this._lang
    }
    set lang(newLang) {
        return this._lang = newLang
    }
    get salary() {
        return this._salary * 3;

    }
}
const programmer = new Programmer(['Українська', 'Англійська', 'Венгерська', 'Іспанська',], 1000);

console.log(programmer._lang)
console.log(programmer.salary)

const programmerOne = new Programmer(['Українська', 'Англійська', 'Польська', 'Німецька',], 500);

console.log(programmerOne._lang)
console.log(programmerOne.salary)

const programmerTwo = new Programmer(['Українська', 'Португальська', 'Данська', 'Англійська',], 12000);

console.log(programmerTwo._lang)
console.log(programmerTwo.salary)

