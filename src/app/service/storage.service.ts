import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spell } from '../model/spell';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favouritesSubject = new BehaviorSubject<Spell[]>([])


 

  constructor() {



    if (localStorage.getItem('favourites')) {
      this.favouritesSubject.next(JSON.parse(localStorage.getItem('favourites')!))

    }
  }

  saveSpell(spell: Spell) {
    spell.isFavourite = true;
    const actualArray = this.favouritesSubject.value
    const newArray = [...actualArray, spell]
    this.favouritesSubject.next(newArray)
    localStorage.setItem('favourites', JSON.stringify(newArray));

  }

  removeSpell(spell: Spell) {
    spell.isFavourite = false;
    const actualArray = this.favouritesSubject.value
    const newArray = actualArray.filter((p) => p.index !== spell.index);
    this.favouritesSubject.next(newArray)
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  toggleFavourites(spell: Spell) {
    if (this.isFavourite(spell)) {
      this.removeSpell(spell)

    } else {
      this.saveSpell(spell)
    }
  }


  isFavourite(spell: Spell): boolean {


     return this.favouritesSubject.value.some(p => p.index === spell.index)


  }
}
