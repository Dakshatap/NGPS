import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,              // ✅ MUST
  imports: [CommonModule,RouterModule],       // ✅ REQUIRED
  templateUrl: './home.html',
    styleUrl:'./home.scss'

})
export class HomeComponent {

  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((res: any) => {
      console.log('DATA:', res);   // 👈 ADD THIS
    this.data = res.company; 
    });
  }

  scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
}