import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.html',
    styleUrl:'./process.scss'

})
export class ProcessComponent {

  steps: string[] = [];

  constructor(private dataService: DataService,private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataService.getData().subscribe((res: any) => {
      this.steps = res.process;
                this.cd.detectChanges();   // 🔥 FORCE UPDATE

    });
  }
}