import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/Produit';
import { ProduitService } from '../services/produit.service';
import { MatDialog } from '@angular/material/dialog';
import { VueProduitComponent } from '../vue-produit/vue-produit.component';
import { AddProduitComponent } from '../add-produit/add-produit.component';
import { ModifierProduitComponent } from '../modifier-produit/modifier-produit.component';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  listeProduit!: Produit[];
  displayedColumns: string[] = ['id', 'nom', 'unite', 'prix','action'];
  
  
  constructor(private produitServicet: ProduitService, private matDialog: MatDialog) {
    this.produitServicet.getProduit().subscribe((data: Produit[])=> this.listeProduit= data);
   }

  ngOnInit(): void {

  }

  openDialogAfficher(element: Produit) {
   this.matDialog.open(VueProduitComponent
    , {
      data: element
      });
  }
  openDialogAjouter(){
    this.matDialog.open(AddProduitComponent);

  }
  
  openDialogModifier(element: Produit) {
    this.matDialog.open(ModifierProduitComponent
     , {
       data: element
       });
   }

}
