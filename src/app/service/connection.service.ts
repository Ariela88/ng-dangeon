import { Injectable } from '@angular/core';
import { Spell } from '../model/spell';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  selectedSpell = ''
  apiUrl = `https://www.dnd5eapi.co/api/spells/`

  constructor(private http: HttpClient) { }

  getSpells(): Observable<Spell[]> {

    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.results)

    );
  }

  getSpellDetail() {

    return this.http.get<Spell>(this.apiUrl + this.selectedSpell);
  }

  getSpellDetailWithIndex(spellIndex:string){
    return this.http.get<Spell>(this.apiUrl + spellIndex);
  }

}
