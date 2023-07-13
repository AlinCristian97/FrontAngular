import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PingService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'Ping';
  }

  ping() {
    const url = `${environment.backendApiUrl}/${this.endpoint}`;
    return this.http.get(url);
  }
}