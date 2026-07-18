import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://6a556cc1e49d9eb2cc55bd70.mockapi.io/api/v1/parties';

@Injectable({
    providedIn: 'root'
})
export class PartyData {
    private http = inject(HttpClient);
    createParty(party: unknown): Observable<unknown> {
        return this.http.post(API_URL, party);
    }
}