import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  animations: [
    trigger('overlayAnimation', [
      // ... your animation configuration
    ]),
  ]
})
export class AddCategoryComponent implements OnInit {

  myForm!: FormGroup;
  date: Date | undefined;
  idFromQueryParam!: number
  buttonName: string = 'Add'
  customerUpdate:any =[]
  name: String = ''

  constructor(private categoryService: CategoryService, 
    private fb: FormBuilder,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      // date: [, Validators.required]
    });

    this.route.queryParams.subscribe(param => {
      this.idFromQueryParam = +param['id']
      if(Number.isNaN(this.idFromQueryParam)){
        this.buttonName = 'Add'
      }else{
        debugger
        this.buttonName = 'Update'
        this.categoryService.getCategoryById(this.idFromQueryParam).subscribe((res) => {
          this.customerUpdate = res
             this.name = this.customerUpdate.name;
          console.log(this.customerUpdate);
          
        })
        // this.categoryService.getCategoryById(this.idFromQueryParam).subscribe((res) =>{
        //   this.customerUpdate = res
        //   this.name = this.customerUpdate.name
        // })
      }

    })

  }
  onSubmit(form: FormGroup) {
    
    console.log('Valid?', form.valid);
    console.log(form.value);
    console.log('name', form.value.name);
    if(Number.isNaN(this.idFromQueryParam)){
      let obj = { 
        name: form.value.name   
                }
      if(obj){
        debugger
        console.log(obj);
        this.categoryService.postCategory(obj).subscribe(
          (res) => {
            this.router.navigateByUrl('/categorys')
            console.log("category posted successfully"+ res);
          },
          (error) => {
            console.log(error);
          }
        )
      }
    }else{
      let obj = {
        id: this.idFromQueryParam,
        name: form.value.name
      }
      this.categoryService.updateCategory(this.idFromQueryParam,obj).subscribe((res)=> {
        console.log(res);
        
        this.router.navigateByUrl('/categorys')
      })
    }
    

  }

  

}
