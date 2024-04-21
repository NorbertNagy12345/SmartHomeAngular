import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 9 })),
      transition(':enter', [
        animate('1s ease-in')
      ])
    ])
  ]
})

export class WelcomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDashboard() {
    this.router.navigate(['/rooms']);
  }

}
