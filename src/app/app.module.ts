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
    NotfoundComponent
 
    PagdetailComponent,
    LocantionComponent,
    DetaillocantionComponent,
    LocantionComponent,
    DetaillocantionComponent,
 
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
