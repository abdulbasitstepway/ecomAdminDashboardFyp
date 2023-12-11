import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { FileUpload } from 'primeng/fileupload';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!: FileUpload;
  
  category:any[]=[]
  myForm!: FormGroup;
  uploadedFiles: any[] = [];
  productName: string = '';
  productPrice: number = 0;
  categoryName: string = '';
  imageURLs: string[] = [];
  image:any=[];
  selectedFile: File | undefined;
  vendor:any=1;
  categoryId:number = 0 ;

  constructor(private productService: ProductService,private categoryService: CategoryService,
    private fb: FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      category: ['',Validators.required],
      file:['', Validators.required]
      // categoryId: ['', Validators.required],
      // file:['', Validators.required]
      // email: ['', [Validators.required, Validators.email]],
      // message: ['', [Validators.required, Validators.minLength(15)]],
    });

    this.categoryService.getAllCategory().subscribe((response :any) => {
      this.category = response
      // console.log(response);
      
    })
  }
  
   onFileSelected(input: any) {
    this.selectedFile = input.files[0];
   }
  
  onUpload() {
    debugger
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    
    this.productService.uploadImage(formData).subscribe(
      (response) => {
        this.imageURLs.push(response)
        // this.image.push(response)
        // console.log(response);
        // console.log(this.imageURLs);  
      })
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    // console.log(form.value);
    // console.log('name', form.value.productName);
    // console.log('price', form.value.price);
    // console.log('categoryId', form.value.category.id);
    // console.log('image', this.imageURLs);
    let obj = { 
      name: form.value.productName ,
      price: form.value.price,
      categoryId : form.value.category.id,
      vendorId :this.vendor,
      image:this.imageURLs
              }
              this.productService.postProduct(obj).subscribe(
                      (respose)=> {
                        console.log('Product uploaded successfully!',respose);
                      }
                    )
                    
              // console.log("Objectttttt");
              // console.log(obj.name);
              // console.log(obj.price);
              // console.log(obj.categoryId);
              // console.log(obj.vendorId);
              // console.log(obj.image);
  }

}
  // onSubmit(){
  //   if(this.myForm.valid){
      // console.log(this.myForm.value);
      // console.log(this.myForm.value.productName +" ProductName");
      // console.log(this.myForm.value.price +" Price");
      // console.log(this.myForm.value.category.id +" Category");
      // console.log(this.imageURLs +" URl");
      
    //  const formData = new FormData();
     
    //  formData.append('name', this.myForm.value.productName);
    //  formData.append('price', this.myForm.value.price);
    //  formData.append('category', this.myForm.value.category.id);
    // const obj = {
    //   name : this.myForm.value.productName,
    //   price : this.myForm.value.price,
    //   category : this.myForm.value.category.id,
    //   image : this.imageURLs
    // }
    // console.log("object",+ obj );
    // console.log(this.imageURLs);
    
    //  formData.append('file',this.image );
      // console.log(this.myForm.value.image  + "Hello");
      
    //  console.log(this.myForm + "      FormDATA");
     
//     this.productService.postProduct(obj).subscribe(
//       (respose)=> {
//         console.log('Product uploaded successfully!',respose);
//       }
//     )
//      }
    
    
//     }
// }
  

  // onSubmit(): void {
  //   debugger
  //   This method is intended to submit the form data and uploaded files
  //   if (this.myForm.invalid || this.uploadedFiles.length === 0) {
  //     console.error('Please fill in all the fields and upload files.');
  //     return;
  //   }

    

//     const formData = new FormData();
//     for (let file of this.uploadedFiles) {
//       formData.append('file', file);
//     }
//     debugger
//     formData.append('name', this.myForm.value.productName);
//     formData.append('price', this.myForm.value.price);
//     formData.append('categoryId', this.myForm.value.categoryId);
//     formData.append('file',this.myForm.value.file.name);
//     this.productService.postProduct(formData).subscribe(
//       (response) => {
//         console.log('Product uploaded successfully!', response);
//         this.fileUpload.clear(); // Optional: Clear uploaded files after successful upload
//         this.myForm.reset(); // Optional: Reset the form after successful upload
//         this.uploadedFiles = []; // Clear the uploaded files array
//       },
//       (error) => {
//         console.error('Error occurred while uploading the product:', error);
//       }
//     );
//   }

// }

// onSubmit(form: FormGroup) {
//   console.log('Valid?', form.valid); // true or false
//   console.log('productName', form.value.productName);
//   console.log('Price', form.value.Price);
//   console.log('categoryId', form.value.categoryId);
//   // console.log('Message', form.value.message);

//   this.productService.postproduct().subscribe.
// }

  // onUpload(event: any): void {
  //   if (!this.productName || !this.productPrice || !this.categoryId) {
  //     console.error('Please fill in all the fields.');
  //     return;
  //   }
  //   const formData = new FormData();
  // for (let file of event.files) {
  //   formData.append('file', file);
  // }

  // formData.append('name', this.productName);
  // formData.append('price', String(this.productPrice));
  // formData.append('categoryId', this.categoryId);
  // }
  

  // addProduct(){
  //   debugger
  //   let obj = {
  //     name: this.myForm.value.productName,
  //     price:this.myForm.value.price,
  //     categoryId: this.myForm.value.categoryId,
      
  //   };
    
    
  //   this.productService.postproduct(obj)
  //   console.log(obj);
    
  // }

//   onUpload(event: any): void {
//     // Handle the file upload logic here
//     const uploadedFiles = event.files;
//     const formData = new FormData();
//     formData.append('file', uploadedFiles[0]); // Assuming you are uploading a single file

// }

  

// }
