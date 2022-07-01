import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InventoryComponent } from './inventory.component';

export const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InventoryRoutingModule {
  constructor() {
  }
}
