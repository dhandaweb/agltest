import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IPet {
  name?: string;
  type?: string;
 }

export interface IOwner { 
  name: string; 
  gender: string;
  age: number;
  pets: IPet[]; 
}

@Injectable({
  providedIn: 'root'
})

export class CatListService {
    constructor(private http: HttpClient) {}

    getPetsAndOwners() {
        return this.http
        .get(`http://agl-developer-test.azurewebsites.net/people.json`)
    }
    
}
