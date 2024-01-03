import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { CartRoutingModule } from './cart/cart-routing.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => HomeRoutingModule },
  { path: 'cart', pathMatch: 'full', loadChildren: () => CartRoutingModule },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes),CoreModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
