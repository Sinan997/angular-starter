import { Injectable, signal } from '@angular/core';
import { initialRoutes } from '../initial.routes';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  allRoutes = initialRoutes;
  navRoutes = signal(this.allRoutes);

  constructor() {}
}
