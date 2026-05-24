import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';
import { ServicesComponent } from './components/services/services';
import { ProcessComponent } from './components/process/process';
import { ContactComponent } from './components/contact/contact';
import { AboutComponent } from './components/about/about';
import { Footer } from "./components/footer/footer";
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    ProcessComponent,
    ContactComponent,
    AboutComponent,
    Footer
],
  templateUrl: './app.html'
})
export class AppComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
 ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
  AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});
  }
}
}