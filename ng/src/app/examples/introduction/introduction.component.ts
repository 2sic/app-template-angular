import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  imports: [RouterLinkActive, RouterLink, RouterOutlet]
})
export class IntroductionComponent {

}
