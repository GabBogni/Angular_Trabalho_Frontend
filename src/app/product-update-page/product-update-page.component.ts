import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Product } from '../Product';
import { ComponentCommunicatorService } from '../component-communicator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update-page',
  templateUrl: './product-update-page.component.html',
  styleUrls: ['./product-update-page.component.css']
})
export class ProductUpdatePageComponent implements OnInit {

  product: Product;
  
  constructor(private web: WebService, private communicator: ComponentCommunicatorService, private router: Router) {

    if(this.communicator.productToUpdateExists() == true){
      this.product = this.communicator.getProductToUpdate();
    }
    else{
      this.product =  {title: "", description: "", price: 0, _id: "", createdAt: "", updatedAt: "", __v: ""}
      this.router.navigateByUrl("/list");
    }
  }


  ngOnInit(): void {
   
  }

  updateProduct():void{ 
    this.web.updateProduct(this.product).subscribe(
      res => {
        if(res.ok){
          alert("Produto Atualizado!");
          this.router.navigateByUrl("/list");
        }
      }
      , res => {
        console.log(res)
        alert(res.error.msg);
      }
    );
  }



}
