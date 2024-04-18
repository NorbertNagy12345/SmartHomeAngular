import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'rooms', component: RoomsComponent },
];
