import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributionsComponent } from './attributions/attributions.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'attributions', component: AttributionsComponent },
  { path: '', component: AboutMeSectionComponent },
  { path: '', component: FooterComponent },
  { path: '', component: HomeSectionComponent },
  { path: '', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
