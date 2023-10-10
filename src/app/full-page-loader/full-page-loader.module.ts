import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageLoaderComponent } from './full-page-loader.component';



@NgModule({
  declarations: [FullPageLoaderComponent],
  imports: [CommonModule],
  exports: [FullPageLoaderComponent]
})
export class FullPageLoaderModule { }
