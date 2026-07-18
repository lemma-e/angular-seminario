import { Component } from '@angular/core';

@Component({
  selector: 'app-recommender',
  standalone: false,
  templateUrl: './recommender.html',
  styleUrl: './recommender.scss',
})
export class Recommender {
    submittedParty: unknown = null;

    onPartySubmitted(party: unknown): void {
      this.submittedParty = party;
      //debug
      console.log('Party:', party);
    }
}
