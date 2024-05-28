import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgClass, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  readonly collapsed = input(false);
  readonly screenWidth = input(0);

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed() && this.screenWidth() > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed() && this.screenWidth() <= 768 && this.screenWidth() > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
