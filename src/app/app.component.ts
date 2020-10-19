import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {StatusService} from './services/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'statuspage';

  constructor(public auth: AuthService, public status: StatusService) {}
}
