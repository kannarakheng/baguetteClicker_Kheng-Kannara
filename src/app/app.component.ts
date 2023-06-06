import { Component, Input } from '@angular/core';
import { FrameComponent } from './frame/frame.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Boulangerie de Grégoire";
  copyrightYear: number = 2023;
  copyrightName: string = "Kannara Kheng";
}
