import { Injectable } from '@angular/core';
import { Spell } from '../model/spell';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  selectedSpell = ''

  constructor(private http: HttpClient) { }

  getSpells(): Observable<Spell[]> {
    const apiUrl = 'https://www.dnd5eapi.co/api/spells';
    return this.http.get(apiUrl).pipe(
      map((response: any) => response.results), 
      tap(spellArray => console.log(spellArray)) 
    );
  }

  getSpellDetail(spellId: string): Observable<Spell> {
    const apiUrl = `https://www.dnd5eapi.co/api/spells/${spellId}`;
    return this.http.get<Spell>(apiUrl);
  }


}
