import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../language.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForOf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
  encapsulation: ViewEncapsulation.None,
  //standalone: true,
  //  imports: [
  // //   MatFormFieldModule,
  // //   MatSelectModule,
  // //   MatInputModule,
  //    NgForOf,
  // //   CommonModule,
  //  ],
})
export class HeadComponent implements OnInit {
  menuHome: string = '';
  menuMe: string = '';
  menuProjects: string = '';
  menucontact: string = '';
  selectedLanguage: string = 'english';
  menuVisible = false;
  menubutton = false;

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((newLanguage: string) => {
      this.updateMenu(newLanguage);
    });

    this.updateMenu(this.languageService.getCurrentLanguage());
  }

  updateMenu(language: string) {
    switch (language) {
      case 'english':
        this.menuHome = 'HOME';
        this.menuMe = 'ABOUT ME';
        this.menuProjects = 'PROJECTS';
        this.menucontact = 'CONTACT';
        break;
      case 'spanish':
        this.menuHome = 'INICIO';
        this.menuMe = 'SOBRE MI';
        this.menuProjects = 'PROYECTOS';
        this.menucontact = 'CONTACTO';
        break;
      case 'german':
        this.menuHome = 'HOME';
        this.menuMe = 'ÜBER MICH';
        this.menuProjects = 'PROJEKTE';
        this.menucontact = 'KONTAKT';
        break;
      default:
        break;
    }
  }

  changeLanguage(newLanguage: string) {
    if (newLanguage !== this.selectedLanguage) {
      this.selectedLanguage = newLanguage;
      this.languageService.changeLanguage(newLanguage);
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openMenu() {
    this.menubutton = !this.menubutton;
    this.menuVisible = !this.menuVisible;
  }
}
