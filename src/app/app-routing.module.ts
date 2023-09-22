import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'detail/:index', component: DetailsComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'home', component: MainComponent },
  { path: '', component: MainComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
