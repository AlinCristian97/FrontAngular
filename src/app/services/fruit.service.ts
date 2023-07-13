import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Fruit } from '../models/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private readonly controller: string;

  constructor(private http: HttpClient) {
    this.controller = "Fruit";
  }

  getFruits() {
    const endpoint = "GetFruits";
    const url = `${environment.backendApiUrl}/${this.controller}/${endpoint}`;
    return this.http.get<Fruit[]>(url);
  }
}