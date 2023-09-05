import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributionsComponent } from './attributions/attributions.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'attributions', component: AttributionsComponent },
  { path: 'about-me', component: AboutMeSectionComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'head', component: HeadComponent },
  { path: 'home', component: HomeSectionComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
