import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchTableComponent } from './search-table/search-table.component';

const routes: Routes = [
  { path: '', component: SearchTableComponent },
  { path: '', component: SearchTableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
