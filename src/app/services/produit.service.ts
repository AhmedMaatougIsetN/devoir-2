import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[]; 

  produit! : Produit;

  constructor() {
    this.produits = [
      { idProduit : 1,  nomProduit : "Lenovo Legion", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      { idProduit : 2,  nomProduit : "Lenovo LOQ", prixProduit : 3500.200, dateCreation : new Date("12/17/2010")},
      { idProduit : 3,  nomProduit :"ASUS TUF Gaming", prixProduit : 2500.600, dateCreation : new Date("5/05/2025")},
      { idProduit : 3,  nomProduit :"HP Victus", prixProduit : 2200.600, dateCreation : new Date("03/02/2024")},
      { idProduit : 3,  nomProduit :"Lenovo ThinkPad", prixProduit : 1500.600, dateCreation : new Date("8/14/2026")}
    ];
   }

    listeProduits():Produit[] {
      return this.produits;
    }

    ajouterProduit( prod: Produit){
      this.produits.push(prod);
    }

    supprimerProduit( prod: Produit){
      //supprimer le produit prod du tableau produits 
       const index = this.produits.indexOf(prod, 0);
       if (index > -1) {
         this.produits.splice(index, 1);
       }

     }

     consulterProduit(id:number): Produit{    
      this.produit =  this.produits.find(p => p.idProduit == id)!;
        return this.produit;
     }

     trierProduits(){
      this.produits = this.produits.sort((n1,n2) => {
        if (n1.idProduit! > n2.idProduit!) {
            return 1;
        }
       if (n1.idProduit! < n2.idProduit!) {
            return -1;
        }
      return 0;
    });
    }
        
updateProduit(p:Produit)
    {
    
      this.supprimerProduit(p);
      this.ajouterProduit(p);
      this.trierProduits();
    }

 
 
 
 
 
  }
