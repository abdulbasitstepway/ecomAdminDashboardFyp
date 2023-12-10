import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
categoryList: any
  constructor(private categoryService:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe((category:any)=>{
      this.categoryList=category;
    },(error:any)=>{
      console.log(error);
    })
  }
  
  deleteCategory(id:any){
    this.categoryService.deleteCategorys(id).subscribe(()=>{
    this.getAllCategory();
    }, (error:any)=>{
      console.log(error);
      
    })
  }
  editCategory(id: any) {
    debugger
    this.router.navigate(['/addcategory'], { queryParams: { id: id } });
  }

  addCategory() {
    this.router.navigate(['/addcategory']);
  }
}
