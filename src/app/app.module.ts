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
import { LocantionComponent } from './pages/locantion/locantion.component';
import { DetaillocantionComponent } from './pages/locantion/detaillocantion/detaillocantion.component';

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
