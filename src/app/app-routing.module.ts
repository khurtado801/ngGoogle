import { ResultComponent } from './components/result/result.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// NOTE: Array to hold routes
const routes: Routes = [
  // NOTE: Default route
  // { path: ' ', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // NOTE: Other routes
  { path: 'results', component: ResultComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
