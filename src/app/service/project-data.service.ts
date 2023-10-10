import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor() { };

  projectData = [
    {
        routerLink: 'auto-garage',
        icon: '',
        title: 'Auto Garage',
        id: 1
    },
    {
        routerLink: 'dems',
        icon: '',
        title: 'DEMS'
    },
    {
        routerLink: 'easy-pay',
        icon: '',
        title: 'Easy Pay'
    },
    {
        routerLink: 'finance-management-system',
        icon: '',
        title: 'Finance Management System'
    },
    {
        routerLink: 'pms',
        icon: '',
        title: 'Help Desk'
    },
    {
        routerLink: 'roadside-assistance',
        icon: '',
        title: 'Roadside Assistance'
    },
    {
        routerLink: 'vehicle-booking-management-system',
        icon: '',
        title: 'Vehicle Booking Management System'
    }
]
}
