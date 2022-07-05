import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'appels',
        loadChildren: () => import('../appels/appels.module').then( m => m.AppelsPageModule)
      },
      {
        path: 'discussions',
        loadChildren: () => import('../discussions/discussions.module').then( m => m.DiscussionsPageModule)
      },
      {
        path: 'statut',
        loadChildren: () => import('../statut/statut.module').then( m => m.StatutPageModule)
      },
      {
        path: '',
        redirectTo: '/home/discussions',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/discussions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
