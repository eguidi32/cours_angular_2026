import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DemandeListeRVModel, StatutDemandeModel, SpecialiteModel } from '../../models/demande.model';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {
  title: string = "Mes Demandes de RDV";
  
  demandes:DemandeListeRVModel[] = [
    {id: 1, dateDemande: '2026-01-15', statut: StatutDemandeModel.ACCETPER, heure: '10:00', specialite: SpecialiteModel.CARDIOLOGIE},
    {id: 2, dateDemande: '2026-01-20', statut: StatutDemandeModel.EN_ATTENTE, heure: '14:30', specialite: SpecialiteModel.DERMATOLOGIE},
    {id: 3, dateDemande: '2026-01-25', statut: StatutDemandeModel.REFUSER, heure: '09:00', specialite: SpecialiteModel.PEDIATRIE},
    {id: 4, dateDemande: '2026-01-30', statut: StatutDemandeModel.EN_ATTENTE, heure: '16:00', specialite: SpecialiteModel.GYNECOLOGIE},    

  ];


  demandesFiltrees: DemandeListeRVModel[] = [];
  filtreStatut: string = '';
  filtreSpecialite: string = '';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  pages: number[] = [];

  ngOnInit() {
    this.appliquerFiltres();
  }

  appliquerFiltres() {
    this.demandesFiltrees = this.demandes.filter(demande => {
      const matchStatut = !this.filtreStatut || demande.statut === this.filtreStatut;
      const matchSpecialite = !this.filtreSpecialite || demande.specialite === this.filtreSpecialite;
      return matchStatut && matchSpecialite;
    });
    
    this.calculerPagination();
  }

  calculerPagination() {
    this.totalPages = Math.ceil(this.demandesFiltrees.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changerPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get demandesPaginees(): DemandeListeRVModel[] {
    const debut = (this.currentPage - 1) * this.itemsPerPage;
    const fin = debut + this.itemsPerPage;
    return this.demandesFiltrees.slice(debut, fin);
  }
}
