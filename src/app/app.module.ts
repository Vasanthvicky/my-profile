import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoGarageComponent } from './projects/auto-garage/auto-garage.component';
import { DemsComponent } from './projects/dems/dems.component';
import { EasyPayComponent } from './projects/easy-pay/easy-pay.component';
import { FinanceManagementSystemComponent } from './projects/finance-management-system/finance-management-system.component';
import { PmsComponent } from './projects/pms/pms.component';
import { ProjectListViewComponent } from './projects/project-list-view/project-list-view.component';
import { ProjectsRoutingModule } from './projects/projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { RoadsideAssistanceComponent } from './projects/roadside-assistance/roadside-assistance.component';
import { VehicleBookingManagementSystemComponent } from './projects/vehicle-booking-management-system/vehicle-booking-management-system.component';
import { RouterComponent } from './router/router.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FullPageLoaderModule } from './full-page-loader/full-page-loader.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SideNavComponent,
    TopNavigationComponent,
    RouterComponent,
    ProjectsComponent,
    AutoGarageComponent,
    DemsComponent,
    EasyPayComponent,
    FinanceManagementSystemComponent,
    PmsComponent,
    ProjectListViewComponent,
    RoadsideAssistanceComponent,
    VehicleBookingManagementSystemComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProjectsRoutingModule,
    FullPageLoaderModule
  ],
  providers: [ProjectListViewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
