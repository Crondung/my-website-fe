import { Component } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css'],
})
export class BusinessCardComponent {
  isFlipped = false;
  backCardVisits = 0;

  onCardClick(event: MouseEvent) {
    let target: HTMLElement | null = event.target as HTMLElement;
    while (target) {
      if (
        target.id === 'mail-icon' ||
        target.id === 'github-icon' ||
        target.id === 'linkedin-icon'
      ) {
        return;
      }
      target = target.parentElement;
    }
    if (!this.isFlipped) this.backCardVisits++;
    this.isFlipped = !this.isFlipped;
  }
}
