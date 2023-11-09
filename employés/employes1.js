// Définition de la classe
class Employe {

    // Le constructeur initialise les propriétés de l'objet Employe
    constructor(lastName, firstName, startDate, typeJob, rent, placeJob, Society, Child=0) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.startDate = new Date(startDate); // Date de début sous forme d'objet Date
        this.typeJob = typeJob;
        this.rent = rent; // Salaire (converti en nombre)
        this.placeJob = placeJob;
        this.Society = Society;
        this.Child = Child;
    }

    getNbAnnees() {
        let dDate = new Date();
        let annees = (dDate.getFullYear() - this.startDate.getFullYear());

        return ""+annees+" an(s)."
        // if (annees >= 2) {
        //     return "Oui";
        // } else {
        //     return "Non";
        // }
    }

    getCalculPrimeAnnuelle() {
        let dDate = new Date();
        let annees = (dDate.getFullYear() - this.startDate.getFullYear());
        let anciennete = (annees * 0.02) * this.rent;
        let grossePrime = (this.rent * 0.05);
        let primeTotale = anciennete + grossePrime

        if (annees >= 2) {
            return primeTotale;
        } else {
            return grossePrime;
        }
    }

    getVirementBanque() {
        let today = new Date(); //'2023-11-30'
        let montantPrime = this.getCalculPrimeAnnuelle();

        if (today.getMonth() === 10 && today.getDate() === 30) {
            return "Ordre de transfert envoyé à la banque pour un montant de " + montantPrime + "€.";
        } else {
            return "Ordre de transfert d'un montant de " + montantPrime + "€ à la banque en attente.";
        }
    }

    getChqVac() {
        let dDate = new Date();
        let annees = (dDate.getFullYear() - this.startDate.getFullYear());

        if (annees >= 1) {
            return "Oui";
        } else {
            return "Non";
        }
    }
}

// Créez une instance d'Employe avec une date valide
let Employe1 = new Employe("Dupont", "Emma", "2010-07-09", "Chargé de Communication", "21600", "Marketing", Society1, [Child1, Child2]);
let Employe2 = new Employe("Martin", "Gabriel", "2007-02-24", "Ingénieur Réseau", "22650", "IT", Society1, [Child3]);
let Employe3 = new Employe("Dubois", "Clara", "2022-01-07", "Secrétaire Exécutif", "23700", "Secrétariat", Society1, []);
let Employe4 = new Employe("Moreau", "Lucas", "2023-09-07", "Comptable", "24650", "Comptabilité", Society1, []);
let Employe5 = new Employe("Lambert", "Zoé", "2017-04-02", "Gestionnaire des Ressources Humaines", "25700", "RH", Society2, [Child4]);


let Employes = [Employe1, Employe2, Employe3, Employe4, Employe5];

function NbEmployes() {
    let nbEmployes = Employes.length;
    return (nbEmployes);
}


function triParNom() {
    let tri = Employes.sort((a, b) => (a.lastName + a.firstName).localeCompare(b.lastName + b.firstName));
    return (tri);
}


function triParService() {
    let tri = Employes.sort((a, b) => (a.placeJob + a.lastName + a.firstName).localeCompare(b.placeJob + b.lastName + b.firstName));
    return (tri);
}


function masseSalariale() {
    const masseSalariale = Employes.reduce((total, Employe) => total + Employe.rent + Employe.getCalculPrimeAnnuelle(), 0);
    return "La masse salariale totale de l'entreprise est de " + masseSalariale.toFixed(2) + "€.";
}