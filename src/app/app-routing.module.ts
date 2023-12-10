import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    
  },
  // {
  //   path: 'addproducts',
  //   component: AddProductComponent,
    
  // },
  {
    path: 'categorys',
    component: CategoryListComponent,
    
  },
  {
    path: 'users',
    component: UserListComponent,
    
  },
  {
    path: 'orders',
    component: OrderListComponent,
    
  },
  {
    path: 'addcategory',
    component: AddCategoryComponent,
    
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
