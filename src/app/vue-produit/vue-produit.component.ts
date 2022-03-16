import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produit } from '../Model/Produit';

@Component({
  selector: 'app-vue-produit',
  templateUrl: './vue-produit.component.html',
  styleUrls: ['./vue-produit.component.css']
})
export class VueProduitComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data: Produit) { }

  ngOnInit(): void {
  }

}
