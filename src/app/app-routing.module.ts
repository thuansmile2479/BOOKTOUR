import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BlogComponent } from './pages/blog/blog.component';

 
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { HomeComponent } from './pages/home/home.component';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { PagdetailComponent } from './pages/pagdetail/pagdetail.component';

const routes: Routes = [
  {
    path: '', component: LayoutClientComponent,
    children: [
      { path: '', component: HomeComponent },   
      { path: 'pagedetail', component: PagdetailComponent }, 
      { path: 'posts', component: BlogComponent }, 
      { path: 'lienhe', component: LienheComponent }, 

    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
