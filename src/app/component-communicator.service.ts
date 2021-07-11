import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicatorService {

  constructor() { }

  private productToUpdate:any = null;

  // set updateProduct
  setProductToUpdate(product: Product){
    this.productToUpdate = product;
  }

  // get updateProduct, não deve ser usado para verificação
  getProductToUpdate():any{
    const productCopy = this.productToUpdate;
    this.productToUpdate = null;
    return productCopy;
   
  }

  // usado para verificação
  productToUpdateExists():boolean{
    if(this.productToUpdate != null){
      return true;
    }
    else{
      return false;
    }
   
  }


}
