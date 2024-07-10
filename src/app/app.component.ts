import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule],
  template: `
    <router-outlet></router-outlet>
    <p-toast [showTransformOptions]="'translateX(100%)'" [showTransitionOptions]="'500ms'" [hideTransitionOptions]="'500ms'"></p-toast>
  `,
})
export class AppComponent {}
