import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'cdy-page-content',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
})
export class PageContentComponent {

  @Input()
  @HostBinding('class.cdy-small')
  small: boolean = false;

}
