import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:any;
  imageUrl:any;

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getAllProduct();
  }


  getAllProduct(){
    this.productService.getProduct().subscribe((product:any)=>{
      this.productList=product;
      console.log(this.productList);
      // console.log(this.productList.productImages);
      // this.imageUrl = this.productList.image
      // console.log(this.imageUrl);
    },(error:any)=>{
      console.log(error);
    })
  }

  addProduct() {
    this.router.navigate(['/addproduct']);
  }

  deleteProduct(id:any){
    debugger
    this.productService.deleteProducts(id).subscribe(()=>{
      this.getAllProduct();
    },(error:any)=>{
      console.log(error);
    })
  }

}
