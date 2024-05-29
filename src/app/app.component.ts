import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/components/sidenav/sidenav.component';
import { MobileNavComponent } from './sidenav/components/mobile-nav/mobile-nav.component';
import { NavToggle } from './sidenav/model';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent, MobileNavComponent, BodyComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  screenWidth = signal(0);
  isSideNavCollapsed = signal(false);

  onToggleSideNav(data: NavToggle): void {
    this.screenWidth.set(data.screenWidth);
    this.isSideNavCollapsed.set(data.collapsed);
  }
}
