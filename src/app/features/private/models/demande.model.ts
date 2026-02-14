// class DemandeRV {
//   constructor(
//     public id: number,
//     public dateDemande: Date,
//     public statut: string,
//     public heure: string,
//   ){}
// }
// const demande1 = new DemandeRV(1, new Date('2026-01-15'), 'Acceptée', '10:00');

// class DemandeRVV2 {
//     public id: number;
//     public dateDemande: Date;
//     public statut: string;
//     public heure: string;
//   constructor(
//     id: number,
//     dateDemande: Date,
//     statut: string,
//     heure: string,
//   ){
//     this.id = id;
//     this.dateDemande = dateDemande;
//     this.statut = statut;
//     this.heure = heure;
//   }
// }
// const demande2 = new DemandeRVV2(2, new Date('2026-01-20'), 'En attente', '14:30');

export enum StatutDemandeModel {
    EN_ATTENTE = 'En attente',
    ACCETPER = 'Acceptée',
    REFUSER = 'Refusée'
}

export interface DemandeListeRVModel {
    id: number;
    dateDemande: String;
    statut: string;
    heure: string;
    specialite: SpecialiteModel;
}

export enum SpecialiteModel {
    CARDIOLOGIE = 'Cardiologie',
    DERMATOLOGIE = 'Dermatologie',
    NEUROLOGIE = 'Neurologie',
    PEDIATRIE = 'Pédiatrie',
    ORTHOPEDIE = 'Orthopédie',
    GYNECOLOGIE = 'Gynécologie',
    OPHTALMOLOGIE = 'Ophtalmologie',
    PSYCHIATRIE = 'Psychiatrie',
    RADIOLOGIE = 'Radiologie',
    UROLOGIE = 'Urologie'
}

    