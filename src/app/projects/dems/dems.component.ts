import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImgDirectoryService } from 'src/app/service/img-directory.service';

@Component({
  selector: 'app-dems',
  templateUrl: './dems.component.html',
  styleUrls: ['./dems.component.scss']
})
export class DemsComponent implements OnInit{
 pageLoading = true;
  demsDetails : any;
  constructor(private imgService : ImgDirectoryService,
    private routeUrl: Router) {}

  ngOnInit(): void {
    this.demsDetails = this.imgService.demsInfo;
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }
  backUrl() {
    this.routeUrl.navigateByUrl('/project-list');
  }
}
