import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spell } from 'src/app/model/spell';
import { StorageService } from 'src/app/service/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


  @Input() spellData?:Spell;
  @Input() isFavourites:boolean = false
  @Output() spellSelected= new EventEmitter<Spell>()


select(){
  this.spellSelected.emit(this.spellData)
}
  constructor( public storage:StorageService,public dialog: MatDialog){}

  openSpellDetailsDialog(spell: Spell) {
    const dialogRef = this.dialog.open(DetailsComponent, {

      data: spell
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog chiusa', result);
    });
  }

}
