import { Component } from '@angular/core';
import { Spell } from 'src/app/model/spell';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  favourites: Spell[] = [];



  constructor(public storage: StorageService) { }


  ngOnInit(): void {

    this.storage.favouritesSubject.subscribe(arrayOfFavourites => {
      this.favourites = arrayOfFavourites;
      console.log(this.favourites)
      

    })


  }

}
