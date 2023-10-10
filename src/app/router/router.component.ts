import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss'],
})
export class RouterComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  getRouterClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'router-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'router-md-screen';
    }
    return styleClass;
  }
}
