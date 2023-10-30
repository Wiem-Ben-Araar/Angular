import { Component } from '@angular/core';
import { ProduitServiceService } from 'src/app/core/manageUser/service/produit-service.service';

@Component({
  selector: 'app-show-produit',
  templateUrl: './show-produit.component.html',
  styleUrls: ['./show-produit.component.css']
})
export class ShowProduitComponent {
  constructor(private service:ProduitServiceService){}
  produits :any;
  ngOnInit(): void {
    this.service.getProduitList().subscribe(
      d=>{
        console.log(d)
        this.produits=d;
      }
      //traitement success or next 
      )  
  }
}
