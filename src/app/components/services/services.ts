import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl:'./services.scss'
})
export class ServicesComponent {

  services: any[] = [];

  constructor(private dataService: DataService, private cd: ChangeDetectorRef
) {}

  ngOnInit() {
  this.dataService.getData().subscribe((res: any) => {
    console.log('SERVICES:', res.services); // 👈 check
    this.services = res.services;
          this.cd.detectChanges();   // 🔥 FORCE UPDATE

  });
}
}