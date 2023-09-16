import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributionsComponent } from './attributions/attributions.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { WebSiteCompleteComponent } from './web-site-complete/web-site-complete.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [
  {
    path: '',
    component: WebSiteCompleteComponent,
    children: [
      { path: '', component: HomeSectionComponent },
      { path: '', component: FooterComponent },
      { path: '', component: ProjectsComponent },
      { path: '', component: AboutMeSectionComponent },
    ],
  },
  { path: 'attributions', component: AttributionsComponent },
  { path: 'impressum', component: ImpressumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
