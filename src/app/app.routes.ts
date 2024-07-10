import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { loginGuard } from './core/guards/login.guard';

@Component({
  selector: 'app-first',
  template: '<h1>First Component</h1>',
})
export class FirstComponent {}
@Component({
  selector: 'app-second',
  template: '<h1>Second Component</h1>',
})
export class SecondComponent {}
@Component({
  selector: 'app-third',
  template: '<h1>Third Component</h1>',
})
export class ThirdComponent {}
@Component({
  selector: 'app-fourth',
  template: '<h1>Fourth Component</h1>',
})
export class FourthComponent {}
@Component({
  selector: 'app-fourth-one',
  template: '<h1>Fourth Component</h1>',
})
export class FourthOneComponent {}
@Component({
  selector: 'app-fourth-two',
  template: '<h1>Fourth Component</h1>',
})
export class FourthTwoComponent {}
@Component({
  selector: 'app-fourth-two-one',
  template: '<h1>Fourth Component</h1>',
})
export class FourthTwoOneComponent {}

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'first', loadComponent: () => import('./lazy/lazy.component').then((m) => m.LazyComponent) },
      { path: 'second', component: SecondComponent },
      { path: 'third', component: ThirdComponent },
      { path: 'fourth', component: FourthComponent },
      { path: 'fourth/asd', component: FourthOneComponent },
      { path: 'fourth/qwe', component: FourthTwoComponent },
      { path: 'fourth/qwe/asd', component: FourthTwoComponent },
    ],
  },
  {
    path: 'account/login',
    canActivate: [loginGuard],
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
];
