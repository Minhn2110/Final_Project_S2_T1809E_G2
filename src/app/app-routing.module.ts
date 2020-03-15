import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'home', loadChildren: () => import('./adidas-store/adidas-store.module').then(m => m.AdidasStoreModule)},
  { path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)},
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


