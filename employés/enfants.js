class Child {
    constructor(lastName, firstName, age) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
    }

    getChqNoel() {
        if (this.age >= 0 && this.age <= 10) {
            return "20€";
        } else if (this.age >= 11 && this.age <= 15) {
            return "30€";
        } else if (this.age >= 16 && this.age <= 18) {
           return "50€";
        } else if (this.age > 18) {
            return "Non";
        }
    }
}

let Child1 = new Child("Dupont", "Sophia", 5);
let Child2 = new Child("Dupont", "Benjamin", 14);
let Child3 = new Child("Martin", "Isabella", 17);
let Child4 = new Child("Lambert", "Mason", 20);

let Childs = [Child1, Child2, Child3, Child4];

