import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImgDirectoryService } from 'src/app/service/img-directory.service';

@Component({
  selector: 'app-vehicle-booking-management-system',
  templateUrl: './vehicle-booking-management-system.component.html',
  styleUrls: ['./vehicle-booking-management-system.component.scss']
})
export class VehicleBookingManagementSystemComponent  implements OnInit{
pageLoading = true;
vbmsDetails: any;
constructor(private imgService: ImgDirectoryService, private routeUrl: Router){}

  ngOnInit(): void {
    this.vbmsDetails = this.imgService.vbmsInfo;

    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  }
  backUrl() {
    this.routeUrl.navigateByUrl('/project-list');
  }
}
