import { Component, signal } from '@angular/core';
import { SidenavComponent } from './sidenav/components/sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { MobileNavComponent } from './sidenav/components/mobile-nav/mobile-nav.component';
import { NavToggle } from './sidenav/model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidenavComponent, BodyComponent, MobileNavComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  screenWidth = signal(0);
  isSideNavCollapsed = signal(false);

  onToggleSideNav(data: NavToggle): void {
    this.screenWidth.set(data.screenWidth);
    this.isSideNavCollapsed.set(data.collapsed);
  }
}
