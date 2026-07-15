import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WowClass } from '../interfaces/wow-class';

const API_URL = 'https://6a556cc1e49d9eb2cc55bd70.mockapi.io/api/v1/classes';

@Injectable({
    providedIn: 'root',
})

export class WowClassData {
    constructor(private http: HttpClient) {

    }
    //declara que el metodo devuelve un observable con un arreglo [WowClass]
    getClasses(): Observable<WowClass[]> {
        return this.http.get<WowClass[]>(API_URL); 
    }
}