import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
// import { ContactComponent } from './contact/contact.component';
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
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'project-list', component: ProjectListViewComponent },
  // {path: 'pokemon-view', component: PokemonViewComponent},
  // {path: '', pathMatch: 'full', redirectTo: 'List'},
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      { path: 'auto-garage', component: AutoGarageComponent },
      { path: 'dems', component: DemsComponent },
      { path: 'easy-pay', component: EasyPayComponent },
      {
        path: 'finance-management-system',
        component: FinanceManagementSystemComponent,
      },
      { path: 'pms', component: PmsComponent },
      { path: 'roadside-assistance', component: RoadsideAssistanceComponent },
      {
        path: 'vehicle-booking-management-system',
        component: VehicleBookingManagementSystemComponent,
      },
    ],
  },
  {
    path: 'child', // Child component route path
    loadChildren: () =>
      import('./projects/projects-routing.module').then(
        (mod) => mod.ProjectsRoutingModule
      ), // Load the child component's routing module
  },
  { path: 'contact', component: ContactComponent },
];

// @NgModule({
//   imports: [],
//   exports: [RouterModule],
//   providers: [],
// })
@NgModule({
  imports: [RouterModule.forRoot(routes), ProjectsRoutingModule],
  exports: [RouterModule],
  providers: [ProjectListViewComponent],
})
export class AppRoutingModule {}
