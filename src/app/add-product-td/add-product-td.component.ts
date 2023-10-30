import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent {
  showHiddenFields: boolean = false; // Initialisez la variable showHiddenFields à false

  formData: any = {}; // Modèle pour les données du formulaire

  toggleHiddenFields() {
    this.showHiddenFields = true; // Changez la valeur de showHiddenFields pour afficher les champs cachés
  }
   
   
}
