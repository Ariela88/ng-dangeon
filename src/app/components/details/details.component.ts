import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import { Spell } from 'src/app/model/spell';
import { ConnectionService } from 'src/app/service/connection.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{


  spellDetail?:Spell;

  constructor(public connection:ConnectionService, private route:ActivatedRoute){  }

  ngOnInit(): void {





    if(this.route.snapshot.paramMap.get('index')){
      this.connection
      .getSpellDetailWithIndex(this.route.snapshot.paramMap.get('index')!)
      .subscribe({
        next: (detail) => this.spellDetail = detail,
        error: (error) => console.log(error),
      });
    }

  }







}
