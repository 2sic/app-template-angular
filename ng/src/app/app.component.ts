import { SxcInitializer } from '@2sic.com/sxc-angular';
import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './layout/navigation.component';
import { TitleComponent } from './layout/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TitleComponent, NavigationComponent, RouterOutlet],
})
export class AppComponent {
  constructor(element: ElementRef, sxcInitializer: SxcInitializer) {
    // Step 2: initialize 2sxc with this component's root element.
    sxcInitializer.initialize(element);
  }
}
