import { Routes } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: '<h1>First Component</h1>',
})
export class FirstComponent {}
@Component({
  selector: 'app-first',
  template: '<h1>Second Component</h1>',
})
export class SecondComponent {}
@Component({
  selector: 'app-first',
  template: '<h1>Third Component</h1>',
})
export class ThirdComponent {}
@Component({
  selector: 'app-first',
  template: '<h1>Fourth Component</h1>',
})
export class FourthComponent {}
@Component({
  selector: 'app-first',
  template: '<h1>Fourth Component</h1>',
})
export class FourthOneComponent {}
@Component({
  selector: 'app-first',
  template: '<h1>Fourth Component</h1>',
})
export class FourthTwoComponent {}
@Component({
  selector: 'app-first',
  template: '<h1>Fourth Component</h1>',
})
export class FourthTwoOneComponent {}

export const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  { path: 'fourth/asd', component: FourthOneComponent },
  { path: 'fourth/qwe', component: FourthTwoComponent },
  { path: 'fourth/qwe/asd', component: FourthTwoComponent },
];
