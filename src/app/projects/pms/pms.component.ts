import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ImgDirectoryService } from "src/app/service/img-directory.service";

@Component({
  selector: "app-pms",
  templateUrl: "./pms.component.html",
  styleUrls: ["./pms.component.scss"],
})
export class PmsComponent implements OnInit {
  pageLoading = true;
  pmsDetails: any;
  constructor(private imgService: ImgDirectoryService, private routeUrl: Router) {}

  ngOnInit(): void {
    this.pmsDetails = this.imgService.pmsInfo;

    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }
  backUrl() {
    this.routeUrl.navigateByUrl('/project-list');
  }
}
