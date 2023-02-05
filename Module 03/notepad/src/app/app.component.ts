import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[] = ['red', 'blue', 'green', 'brown', 'purple', 'black'];
  fonts: string[] = ['Arial', 'Segoe UI', 'Times New Roman', 'Verdana', 'Consolas', 'David'];
  sizes: string[] = ['12px', '16px', '24px', '36px', '48px', '72px'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];

  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

}
