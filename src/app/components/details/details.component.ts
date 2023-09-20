import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spell } from 'src/app/model/spell';
import { ConnectionService } from 'src/app/service/connection.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(public connection:ConnectionService,@Inject(MAT_DIALOG_DATA) public spell: Spell){  }

}
