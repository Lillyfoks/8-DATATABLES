class Society {
    constructor(sName, adress, postCode, city, food) {
        this.sName = sName;
        this.adress = adress;
        this.postCode = postCode;
        this.city = city;
        this.food = food;
    }
}

let Society1 = new Society("InfoGlam", "12, rue de l'imagination", "54000", "CreativeLand", "self");
let Society2 = new Society("GlamInfo", "21, rue de la créativité", "45000", "ImagineLand", "restaurant ticket");

let Societies = [Society1, Society2];