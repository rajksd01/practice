import { RegisterComponent } from './../register/register.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-info',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './hero-info.component.html',
  styleUrl: './hero-info.component.css',
})
export class HeroInfoComponent {}
