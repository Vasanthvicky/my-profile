import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { navbarData } from './nav-data';
import * as fabIcon from '@fortawesome/free-brands-svg-icons';
import * as fabIcons from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;

  screenWidth = 0;

  navData = navbarData;

  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  // myLinkedInIcon = faLinkedin;
  // myGithubIcon = faGithub;
  // faDownload = faDownload;
  closedIcon = faWindowClose;

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  printIcon(daa: any) {
    // console.log(fabIcons[daa]);
    // return fabIcons[daa];
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSideNav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
