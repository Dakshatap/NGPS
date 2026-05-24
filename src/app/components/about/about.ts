import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,              // ✅ IMPORTANT
  imports: [CommonModule],       // ✅ REQUIRED
  templateUrl: './about.html',
  styleUrl:'./about.scss'
})
export class AboutComponent {}