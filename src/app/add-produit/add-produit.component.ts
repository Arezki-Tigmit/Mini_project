import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Produit } from '../Model/Produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  produitFormGroup!: FormGroup;
  newProduit!: Produit;
  constructor(private fb: FormBuilder, private productSrevice: ProduitService) { }

  ngOnInit(): void {
    this.produitFormGroup= this.fb.group({
      id: [],
      nom: [],
      unite: [],
      prix: [],
      statut: [],
      


    });
    //this.produitFormGroup.controls['id'].disable()
  }

  addProduit(){

    console.log('produit', this.produitFormGroup.getRawValue());
    this.productSrevice.postProduit(this.produitFormGroup.getRawValue());
    


  }

}
