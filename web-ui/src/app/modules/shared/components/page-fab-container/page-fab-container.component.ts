import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'cdy-page-fab-container',
  templateUrl: './page-fab-container.component.html',
  styleUrls: [ './page-fab-container.component.scss' ],
})
export class PageFabContainerComponent {

  @Input()
  public size: 'tiny'|'small'|'regular' = 'regular';

  @HostBinding('class.cdy-small')
  private get isSmall() { return this.size === 'small'; }

  @HostBinding('class.cdy-tiny')
  private get isTiny() { return this.size === 'tiny'; }

}
