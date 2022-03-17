import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produit } from '../Model/Produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {

  produitFormGroup!: FormGroup;
  newProduit!: Produit;

  constructor(private fb: FormBuilder, private productSrevice: ProduitService, 
    @Inject (MAT_DIALOG_DATA) public data: Produit
) { }

  ngOnInit(): void {
    this.produitFormGroup= this.fb.group({
      id: [],
      nom: [],
      unite: [],
      prix: [],
      statut: [],
      


    });
  }
  

  modifierProduit(){
    
    
    console.log('produit', this.produitFormGroup.getRawValue());
    this.productSrevice.putProduit(this.produitFormGroup.getRawValue(),this.data.id).
    subscribe(
      {
        next: (res)=>{alert('Add successfull!')},
        error: ()=>{alert('erreure!')}
      }
    );



  }
}
