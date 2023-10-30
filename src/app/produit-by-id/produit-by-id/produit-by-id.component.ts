import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitServiceService } from 'src/app/core/manageUser/service/produit-service.service';

@Component({
  selector: 'app-produit-by-id',
  templateUrl: './produit-by-id.component.html',
  styleUrls: ['./produit-by-id.component.css']
})
export class ProduitByIdComponent implements OnInit {
  constructor(private produitService:ProduitServiceService,private ac:ActivatedRoute) { 

  }
  ngOnInit(): void {
      this.produitService.getProduitById(this.ac.snapshot.params['id']).subscribe(
        (d)=>{
          console.log("data", d);
        }
      )
  }

}
