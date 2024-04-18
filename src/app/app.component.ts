import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RoomsComponent, HttpClientModule, MatSlideToggleModule],
})
export class AppComponent {
  title = 'rooms-app';
}
