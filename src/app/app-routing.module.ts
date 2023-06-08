import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';


import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { HomeComponent } from './pages/home/home.component';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { LocantionComponent } from './pages/locantion/locantion.component';
import { DetaillocantionComponent } from './pages/locantion/detaillocantion/detaillocantion.component';

const routes: Routes = [
  {
    path: '', component: LayoutClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'posts', component: BlogComponent },
      { path: 'lienhe', component: LienheComponent },
      { path: 'location', component: LocantionComponent },
      { path: 'location/detail/:id', component: DetaillocantionComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
