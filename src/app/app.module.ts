import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterComponent } from './router/router.component';
import { FullPageLoaderComponent } from './full-page-loader/full-page-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SideNavComponent,
    TopNavigationComponent,
    RouterComponent,
    FullPageLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
