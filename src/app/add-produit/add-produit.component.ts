import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent {

  newProduit = new Produit();

  message! : string;

  constructor(private produitService: ProduitService ) {}

  addProduit(){
   // console.log(this.newProduit);
   this.produitService.ajouterProduit(this.newProduit);
   this.message = "Produit "+this.newProduit.nomProduit +" ajouté avec succès !"
  }


}
