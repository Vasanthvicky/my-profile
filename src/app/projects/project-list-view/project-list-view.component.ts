import { Component } from '@angular/core';
import { ImgDirectoryService } from 'src/app/service/img-directory.service';
import { projectData } from '../project-data';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/service/porject-data.service';

@Component({
  selector: 'app-project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.scss']
})
export class ProjectListViewComponent {

  pageLoading = true; 

  projectData: any[] | undefined;

  constructor(private imgService: ImgDirectoryService,
    private router: Router,
    private projectService: ProjectDataService){};

  ngOnInit(): void {
    this.projectData = this.projectService.projectData;
    console.log(projectData);
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }

  navigateTo(route: string):any {
    const projectRoute = this.projectService.projectData.map((myRoute: { routerLink: any; }) => myRoute.routerLink)   
    if (projectRoute.includes(route)) {
      this.router.navigate(['projects', route]);
    }
  }
}
