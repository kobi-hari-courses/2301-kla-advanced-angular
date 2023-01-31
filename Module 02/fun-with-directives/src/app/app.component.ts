import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFavoriteColor = 'magenta';

  onVanish(color: string) {
    console.log('One of my highlights disappeared, and the last color was', color);
  }

}
