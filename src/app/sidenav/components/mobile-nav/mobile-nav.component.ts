import { Component, Signal, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SidenavService } from '../../services/sidenav.service';
import { NavRoute } from '../../model';
import { SublevelMenuComponent } from '../sidenav/sublevel-menu.component';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [TranslateModule, NgClass, RouterLink, SublevelMenuComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
})
export class MobileNavComponent {
  protected readonly sidenavService = inject(SidenavService);
  protected readonly router = inject(Router);
  screenWidth = input.required();

  navData: Signal<NavRoute[]>;
  showAll = signal(false);
  collapsed = signal(false);

  ngOnInit() {
    this.navData = computed(() => this.sidenavService.navRoutes());
  }

  openRoutes() {
    this.collapsed.update((val) => !val);
    this.showAll.update((val) => !val);
  }

  handleClick(item: NavRoute): void {
    item.expanded = !item.expanded;
    if (item.items?.length && !this.collapsed()) {
      item.expanded = true;
    }
  }

  getActiveClass(data: NavRoute): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  logout() {
    this.openRoutes();
  }
}
