import { Component, OnInit } from '@angular/core';
import { faFirefoxBrowser, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faHeadphonesSimple, faMailBulk, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  closedIcon = faWindowClose;
  myLinkedInIcon = faLinkedin;
  myMailIcon = faMailBulk;
  myPhoneIcon = faHeadphonesSimple;
  myFlag = faFlag;
  myPortfolio = faFirefoxBrowser;
  myGitHub = faGithub;

  pageLoading = true;

  phoneNumber = '+91 8110818281';


  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoading = false;
    }, 1000);
  }
}
