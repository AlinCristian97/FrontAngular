import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PingService } from './services/ping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
        console.log('api call success');
        this.isConnectedToBackend = true;
        this.connectedToBackendMessage = "Backend connected";
      },
      error: () => {
        console.log('api call fail');
        this.isConnectedToBackend = false;
        this.connectedToBackendMessage = "Backend not connected";
      },
      complete: () => { }
   });
  }
}
