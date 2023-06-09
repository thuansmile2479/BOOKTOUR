import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { GdAdminComponent } from './components/gd-admin/gd-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TourComponent } from './pages/tour/tour.component';
import { DetailtourComponent } from './pages/tour/detailtour/detailtour.component';
import { LocantionComponent } from './pages/locantion/locantion.component';
import { PagdetailComponent } from './pages/pagdetail/pagdetail.component';
import { DetaillocantionComponent } from './pages/locantion/detaillocantion/detaillocantion.component';
import { ListblogComponent } from './admin/blog/listblog/listblog.component';
import { AddblogComponent } from './admin/blog/addblog/addblog.component';
import { EditblogComponent } from './admin/blog/editblog/editblog.component';
import { ListdiadiemComponent } from './admin/diadiem/listdiadiem/listdiadiem.component';
import { EditdiadiemComponent } from './admin/diadiem/editdiadiem/editdiadiem.component';
import { AddtourComponent } from './admin/tour/addtour/addtour.component';
import { ListtourComponent } from './admin/tour/listtour/listtour.component';
import { AdddiadiemComponent } from './admin/diadiem/adddiadiem/adddiadiem.component';
import { EdittourComponent } from './admin/tour/edittour/edittour.component';
import { ListlienheComponent } from './admin/lienhe/listlienhe/listlienhe.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddbillComponent } from './pages/tour/addbill/addbill.component';
import { DetailblogComponent } from './pages/blog/detailblog/detailblog.component';
import { ListbillComponent } from './pages/tour/listbill/listbill.component';
import { BilladminComponent } from './admin/bill/billadmin/billadmin.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    LienheComponent,
    GdAdminComponent,
    DashboardComponent,
    NotfoundComponent,
    PagdetailComponent,
    LocantionComponent,
    DetaillocantionComponent,
    TourComponent,
    DetailtourComponent,
    
    ListblogComponent,
    AddblogComponent,
    EditblogComponent,
    
    ListdiadiemComponent,
    AdddiadiemComponent,
    EditdiadiemComponent,
    
    AddtourComponent,
    ListtourComponent,
    EdittourComponent,

    ListlienheComponent,
      LoginComponent,
      RegisterComponent,
      AddbillComponent,
      DetailblogComponent,
      ListbillComponent,
      BilladminComponent


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
