import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { topNavData } from './top-nav-data';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigationComponent implements OnInit {
  myLinkedInIcon = faLinkedin;
  myGithubIcon = faGithub;
  faDownload = faDownload;

  topNavDataList = topNavData;
  constructor() {}

  ngOnInit(): void {}
}
