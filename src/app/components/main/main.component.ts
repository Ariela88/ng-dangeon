import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor() { }

  ngOnInit(): void {
    // Ritarda l'aggiunta della classe per far apparire gradualmente il titolo
    setTimeout(() => {
      const titleElement = document.querySelector('.title');
      if (titleElement) {
        titleElement.classList.add('show-title');
      }
    }, 500); // Ritardo di 1 secondo (puoi regolare questo valore)
  }


}
