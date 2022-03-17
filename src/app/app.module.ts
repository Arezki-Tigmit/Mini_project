import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { VueProduitComponent } from './vue-produit/vue-produit.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    VueProduitComponent,
    AddProduitComponent,
    ModifierProduitComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule
    
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


