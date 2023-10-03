import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullPageLoaderComponent } from './full-page-loader.component';

@NgModule({
    imports: [CommonModule],
    exports: [FullPageLoaderComponent],
    declarations: [FullPageLoaderComponent]
})
export class FullPageLoaderModule {}