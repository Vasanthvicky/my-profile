import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ImgDirectoryService } from '../service/img-directory.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  myLinkedInIcon = faLinkedin;
  myGithubIcon = faGithub;
  faDownArrow = faArrowDown;

  profilePic: any;

  skillPic: any[] | undefined;
  responsiveOptions;
  skillImg: any;
  images: any;

  constructor(private imgService: ImgDirectoryService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 3,
      },
    ];
  }

  pageLoading = true;

  ngOnInit(): void {
    this.profilePic = this.imgService.myImg;
    this.skillPic = this.imgService.skillImg;
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);

    this.images = [
      {
        name: "HTML",
        picture: 'https://picsum.photos/id/944/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FHTML5.png?alt=media&token=958ec404-7c26-4ac4-b636-68c407b709ce',
      },
      {
        name: "CSS",
        picture: 'https://picsum.photos/id/1011/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FCSS3.png?alt=media&token=c8f59690-47b1-4ee2-9a73-53b73f6c44eb',
      },
      {
        name: "JS",
        picture: 'https://picsum.photos/id/984/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fjavascript-logo.png?alt=media&token=85453924-09a3-4f1c-af19-c3c8b6b3b06f',
      },
      {
        name: "Less",
        picture: 'https://picsum.photos/id/944/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fless.png?alt=media&token=f4b8d105-23b7-4984-bc9a-9c2363cde57e',
      },
      {
        name: "Sass",
        picture: 'https://picsum.photos/id/1011/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fsass.png?alt=media&token=d0f8a133-f492-4cbe-a316-eca625ca4312',
      },
      {
        name: "Tailwind CSS",
        picture: 'https://picsum.photos/id/984/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FTailwind_CSS_Logo.png?alt=media&token=96f2ea25-1164-46e7-817c-781800e42205',
      },
      {
        name: "Angular JS",
        picture: 'https://picsum.photos/id/984/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fangular.png?alt=media&token=d5d4c9c4-d29f-4d45-b2c2-7df6c0cd33de',
      },
      {
        name: "Git Hub",
        picture: 'https://picsum.photos/id/984/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fgithub.png?alt=media&token=8d88d67f-aece-4649-99f4-3883a92a5edb',
      },
      {
        name: "Type Script",
        picture: 'https://picsum.photos/id/984/900/500',
        src: "https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Ftype-script.png?alt=media&token=94485e6d-d498-4e08-9dfb-e546a52a8d8f",
      },
      {
        name: "Bitbucket",
        picture: 'https://picsum.photos/id/984/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FBitbucket.png?alt=media&token=5758a132-4972-48e9-96c3-fd57ca823097',
      },
      {
        name: "Jira Service Desk",
        picture: 'https://picsum.photos/id/984/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fatlassian_jira_logo_icon.png?alt=media&token=dc1cc3df-db7a-49c1-89ca-861b6d8e5170',
      },
      {
        name: "Visual Studio Code",
        picture: 'https://picsum.photos/id/984/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2FVisual_Studio.png?alt=media&token=673f029d-c858-47f0-9449-372fdd3e41ac',
      },
      {
        random: 'American Samoa',
        picture: 'https://picsum.photos/id/984/900/500',
        src: 'https://firebasestorage.googleapis.com/v0/b/vigneshvasanthportfolio.appspot.com/o/skills-img%2Fatlassian-logo.png?alt=media&token=168ad22c-d435-4509-a437-c244c1ff4252',
      },
    ];

    // this.images = this.imgService.skillImg.forEach((myImg) => myImg.src);
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
