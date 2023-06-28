import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PingService } from './services/ping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontAngular';
  currentEnvironment: string;

  isConnectedToBackend: boolean = false;
  connectedToBackendMessage: string = "Backend not connected";

  constructor(private pingService: PingService) {
    this.currentEnvironment = environment.environmentName;

    pingService.ping().subscribe({
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
}
