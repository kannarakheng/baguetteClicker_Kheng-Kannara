import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  @Input() title: String | undefined;
  @Input() copyrightYear: number | undefined;
  @Input() copyrightName: string | undefined;
}
