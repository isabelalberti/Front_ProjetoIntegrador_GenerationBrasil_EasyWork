import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title(title: any) {
<<<<<<< HEAD
      throw new Error('Method not implemented.');
=======
        throw new Error('Method not implemented.');
>>>>>>> 5783d80698eb20f14e93ef7a33b69829d8fb94ed
    }
    constructor(public auth: AuthService) {}
}