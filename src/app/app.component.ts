import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PingService } from './services/ping.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FrontAngular';
  currentEnvironment: string;

  isConnectedToBackend: boolean = false;
  connectedToBackendMessage: string = "Backend not connected";

  constructor(private pingService: PingService) {
    this.currentEnvironment = environment.environmentName;
  }

  ngOnInit(): void {
    this.ping();
    this.startPingInterval(30);
  }

  ping() {
    this.pingService.ping().subscribe({
      next: () => {
        this.isConnectedToBackend = true;
        this.connectedToBackendMessage = "Backend connected";
      },
      error: () => {
        this.isConnectedToBackend = false;
        this.connectedToBackendMessage = "Backend not connected";
      },
      complete: () => { }
   });
  }

  startPingInterval(periodInSeconds: number) {
    const periodInMiliseconds = periodInSeconds * 1000;

    const source = interval(periodInMiliseconds); 

    source.subscribe(() => {
      this.pingService.ping().subscribe({
        next: () => {
          this.isConnectedToBackend = true;
          this.connectedToBackendMessage = "Backend connected";
        },
        error: () => {
          this.isConnectedToBackend = false;
          this.connectedToBackendMessage = "Backend not connected";
        },
        complete: () => { }
     });
    });
  }
}
