import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet]
})
export class IntroductionComponent {

}
