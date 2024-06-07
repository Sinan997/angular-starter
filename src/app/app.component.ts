import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { SidenavComponent } from './sidenav/components/sidenav/sidenav.component';
import { MobileNavComponent } from './sidenav/components/mobile-nav/mobile-nav.component';
import { NavToggle } from './sidenav/model';
import { BodyComponent } from './body/body.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, SidenavComponent, MobileNavComponent, BodyComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly authService = inject(AuthService);

  screenWidth = signal(0);
  isSideNavCollapsed = signal(false);

  onToggleSideNav(data: NavToggle): void {
    this.screenWidth.set(data.screenWidth);
    this.isSideNavCollapsed.set(data.collapsed);
  }
}
