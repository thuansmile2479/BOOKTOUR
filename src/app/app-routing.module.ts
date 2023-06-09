import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { HomeComponent } from './pages/home/home.component';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NotFoundError } from 'rxjs';
import { BlogComponent } from './pages/blog/blog.component';
import { PagdetailComponent } from './pages/pagdetail/pagdetail.component';
import { LocantionComponent } from './pages/locantion/locantion.component';
import { DetaillocantionComponent } from './pages/locantion/detaillocantion/detaillocantion.component';
import { TourComponent } from './pages/tour/tour.component';
import { DetailtourComponent } from './pages/tour/detailtour/detailtour.component';
import { ListblogComponent } from './admin/blog/listblog/listblog.component';
import { AddblogComponent } from './admin/blog/addblog/addblog.component';
import { EditblogComponent } from './admin/blog/editblog/editblog.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListdiadiemComponent } from './admin/diadiem/listdiadiem/listdiadiem.component';
import { AdddiadiemComponent } from './admin/diadiem/adddiadiem/adddiadiem.component';
import { EditdiadiemComponent } from './admin/diadiem/editdiadiem/editdiadiem.component';
import { ListtourComponent } from './admin/tour/listtour/listtour.component';
import { AddtourComponent } from './admin/tour/addtour/addtour.component';
import { ListlienheComponent } from './admin/lienhe/listlienhe/listlienhe.component';


const routes: Routes = [
  {
    path: '', component: LayoutClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'pagedetail', component: PagdetailComponent },
      { path: 'posts', component: BlogComponent },
      { path: 'lienhe', component: LienheComponent },  
      { path: 'location', component: LocantionComponent },
      { path: 'location/detail/:id', component: DetaillocantionComponent },
      { path: 'tour', component: TourComponent },
      { path: 'tour/detail/:id', component: DetailtourComponent },

    ]
  } ,
  {
    path: 'admin', component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent }, 

      { path: 'locations', component: ListdiadiemComponent }, 
      { path: 'adddiadiem', component: AdddiadiemComponent }, 
      { path: 'editdiadiem/:id', component: EditdiadiemComponent }, 
      
      { path: 'blog', component: ListblogComponent }, 
      { path: 'addblog', component: AddblogComponent },
      { path: 'editblog/:id', component: EditblogComponent }, 

      { path: 'tour', component: ListtourComponent }, 
      { path: 'addtour', component: AddtourComponent },  

      { path: 'lienhe', component: ListlienheComponent }, 


    ]
  },

  { path: '**', component: NotFoundError },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
