import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FavouritesComponent } from './components/favourites/favourites.component';

const routes: Routes = [
  { path: 'list', component: MainComponent },
  { path: 'detail', component: DetailsComponent },
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
