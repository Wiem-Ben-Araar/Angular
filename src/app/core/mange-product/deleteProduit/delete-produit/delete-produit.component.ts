import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitServiceService } from 'src/app/core/manageUser/service/produit-service.service';

@Component({
  selector: 'app-delete-produit',
  templateUrl: './delete-produit.component.html',
  styleUrls: ['./delete-produit.component.css']
})
export class DeleteProduitComponent {
  constructor(private prodduit:ProduitServiceService,private ac:ActivatedRoute,private router:Router){

  }
  ngOnInit(){
    this.prodduit.removeProduit(this.ac.snapshot.params['id']).subscribe(
      ()=>{
  this.router.navigate(['produits'])
      },
      (err)=>{
       let status=err.status;
       switch(status){
        case 0:alert('server');break;
        case 401:alert('unauthorized');break;
        case 404:alert('unauthorized');break;
       }
      }
    );
  }
}
