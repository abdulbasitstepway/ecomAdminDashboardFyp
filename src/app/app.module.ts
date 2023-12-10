import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardHeadComponent } from './component/dashboard-head/dashboard-head.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ViewProductComponent } from './pages/product/view-product/view-product.component';
import { ViewCategoryComponent } from './pages/category/view-category/view-category.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { ViewUserComponent } from './pages/user/view-user/view-user.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { ViewOrderComponent } from './pages/order/view-order/view-order.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    DashboardHeadComponent,
    ProductListComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    CategoryListComponent,
    UserListComponent,
    AddUserComponent,
    ViewUserComponent,
    OrderListComponent,
    ViewOrderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    BreadcrumbModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    InputNumberModule,
    ToggleButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
