import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from 'app/page1/page1.component';
import { Page2Component } from 'app/page2/page2.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }