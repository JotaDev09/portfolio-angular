import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { AttributionsComponent } from './attributions/attributions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeSectionComponent,
    AboutMeSectionComponent,
    ProjectsComponent,
    FooterComponent,
    AttributionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
