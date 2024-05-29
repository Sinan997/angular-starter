import { Component, HostListener, Signal, computed, inject, output, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { NgClass } from '@angular/common';
import { fadeInOut } from '../../animation';
import { SidenavService } from '../../services/sidenav.service';
import { NavRoute, NavToggle } from '../../model';
import { SublevelMenuComponent } from './sublevel-menu.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [SublevelMenuComponent, TranslateModule, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' }),
          ]),
        ),
      ]),
    ]),
  ],
})
export class SidenavComponent {
  protected readonly sidenavService = inject(SidenavService);
  protected readonly router = inject(Router);

  readonly onToggleSideNav = output<NavToggle>();

  collapsed = signal(false);
  screenWidth = signal(0);
  navData: Signal<NavRoute[]>;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() <= 768) {
      this.collapsed.set(false);
      this.onToggleSideNav.emit({ collapsed: this.collapsed(), screenWidth: this.screenWidth() });
    }
  }

  ngOnInit(): void {
    this.screenWidth.set(window.innerWidth);
    this.navData = computed(() => this.sidenavService.navRoutes());
  }

  toggleCollapse(): void {
    this.collapsed.update((val) => !val);
    this.onToggleSideNav.emit({ collapsed: this.collapsed(), screenWidth: this.screenWidth() });
  }

  handleClick(item: NavRoute): void {
    item.expanded = !item.expanded;

    if (item.items?.length && !this.collapsed) {
      this.toggleCollapse();
      item.expanded = true;
    }
  }

  getActiveClass(data: NavRoute): string {
    return this.router.url.split('/')[1] === data.routeLink ? 'active' : '';
  }

  logout(){
    
  }
}
