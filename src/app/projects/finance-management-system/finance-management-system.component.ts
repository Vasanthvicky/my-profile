import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImgDirectoryService } from 'src/app/service/img-directory.service';

@Component({
  selector: 'app-finance-management-system',
  templateUrl: './finance-management-system.component.html',
  styleUrls: ['./finance-management-system.component.scss']
})
export class FinanceManagementSystemComponent implements OnInit {
pageLoading = true;
fmsDetails: any;
constructor(private imgService: ImgDirectoryService, private routeUrl: Router){}

  ngOnInit(): void {
    this.fmsDetails = this.imgService.fmsInfo;

    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }
  backUrl() {
    this.routeUrl.navigateByUrl('/project-list');
  }
}
