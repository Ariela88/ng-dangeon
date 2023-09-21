import { Component } from '@angular/core';
import { Spell } from 'src/app/model/spell';
import { ConnectionService } from 'src/app/service/connection.service';
import { StorageService } from 'src/app/service/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  spells: Spell[]=[]

  constructor(private storage:StorageService, private connection:ConnectionService, public dialog: MatDialog, private route:Router){ }

  ngOnInit(): void {
    this.connection.getSpells().subscribe(result => {
      this.spells = result;
      for (const spell of this.spells) {
        spell.isFavourite = this.storage.isFavourite(spell)

      }
    });
  }

  // openSpellDetailsDialog(spell: Spell) {
  //   const dialogRef = this.dialog.open(DetailsComponent, {
  //     width: '500px',
  //     data: spell
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('Dialog chiusa', result);
  //   });
  // }

  openDetails(spell:Spell){

this.route.navigateByUrl('/detail/' + spell.index)

  }
    }
