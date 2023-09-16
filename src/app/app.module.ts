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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebSiteCompleteComponent } from './web-site-complete/web-site-complete.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributionsComponent,
    HeadComponent,
    HomeSectionComponent,
    AboutMeSectionComponent,
    FooterComponent,
    WebSiteCompleteComponent,
    ImpressumComponent,
  ],
  imports: [
    ProjectsComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
