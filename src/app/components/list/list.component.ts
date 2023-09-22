import { Component, HostListener } from '@angular/core';
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

  spells: Spell[]=[];
  showTopButton: boolean = true;
  hasScrolled: boolean = false;

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

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  this.checkScroll();
}

checkScroll() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scrollPosition > 20) {
    this.showTopButton = true;
    if (!this.hasScrolled) {
      this.hasScrolled = true;
    }
  } else {
    this.showTopButton = false;
  }
}

  }
  
  





    