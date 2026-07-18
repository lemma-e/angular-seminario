import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-party-summary',
  standalone: false,
  templateUrl: './party-summary.html',
  styleUrl: './party-summary.scss',
})
export class PartySummary {
    @Input() party: any = null;
}
