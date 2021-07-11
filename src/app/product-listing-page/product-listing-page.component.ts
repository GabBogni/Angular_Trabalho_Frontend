import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCommunicatorService } from '../component-communicator.service';
import { Product } from '../Product';
import { WebService } from '../web.service';

@Component({
  selector: 'app-product-listing-page',
  templateUrl: './product-listing-page.component.html',
  styleUrls: ['./product-listing-page.component.css']
})
export class ProductListingPageComponent implements OnInit {

  constructor(private web: WebService, private communicator: ComponentCommunicatorService, private router: Router) { 
    this.product_list = [];
  }

  product_list:Product[];


  load_product_list():void{
    this.web.getProducts().subscribe(
      res => this.product_list = res
      , res => {
        console.log(res)
        alert(res.error.msg);
      })
  }

  deleteProduct(product: Product){
    if(window.confirm("Você realmente deseja deletar esse produto?")){
     
      this.web.deleteProduct(product).subscribe( 
        res => {
          if(res.ok){
            window.alert("Produto deletado com sucesso");
            this.load_product_list();
          }
        }
      , res => {
        console.log(res);
        alert(res.error.msg);
        }

      );
    }

  }

  sendProduct(product: Product){
    this.communicator.setProductToUpdate(product);
    this.router.navigateByUrl("/update/"+product._id);
  }



  ngOnInit(): void {
    this.load_product_list();
  }

}
