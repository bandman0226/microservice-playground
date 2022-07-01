import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CatalogRoutingModule {
  constructor() {
  }
}
