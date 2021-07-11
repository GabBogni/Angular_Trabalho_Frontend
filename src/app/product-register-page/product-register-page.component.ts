import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebService } from '../web.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-register-page',
  templateUrl: './product-register-page.component.html',
  styleUrls: ['./product-register-page.component.css']
})
export class ProductRegisterPageComponent implements OnInit {

  product: Product;

  constructor(private web: WebService) { 
   this.product =  {title: "", description: "", price: 0, _id: "", createdAt: "", updatedAt: "", __v: ""}
  }


  ngOnInit(): void {
  }

  registerProduct():void{

    this.web.registerProduct(this.product).subscribe(
      res => {
        if(res.ok){
          alert("Produto Cadastrado!");
          this.resetForm();
        }
      }
      , res => {
        console.log(res)
        alert(res.error.msg);
      }
    );
  }


  resetForm():void{
    this.product = {title: "", description: "", price: 0, _id: "", createdAt: "", updatedAt: "", __v: ""}
  }



}
