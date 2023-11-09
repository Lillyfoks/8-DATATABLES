class Director extends Employe {
    getCalculPrimeAnnuelleDir() {
        let dDate = new Date();
        let annees = (dDate.getFullYear() - this.startDate.getFullYear());
        let anciennete = (annees * 0.03) * this.rent;
        let grossePrime = (this.rent * 0.07);
        let primeTotale = anciennete + grossePrime

        if (annees >= 2) {
            return primeTotale;
        } else {
            return grossePrime;
        }
    }

    getVirementBanque() {
        let today = new Date();
        let montantPrime = this.getCalculPrimeAnnuelleDir();

        if (today.getMonth() === 10 && today.getDate() === 30) {
            return "Ordre de transfert envoyé à la banque pour un montant de " + montantPrime + "€.";
        } else {
            return "Ordre de transfert d'un montant de " + montantPrime + "€ à la banque en attente.";
        }
    }
}

let Director1 = new Director("Tremblay", "Liam", "2023-04-12", "Directeur", "35000", "Direction", Society1);
let Director2 = new Director("Lefebvre", "Olivia", "2001-10-08", "Directrice", "36500", "Direction", Society2);

let Directors = [Director1, Director2];
