import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  menuHome: string = '';
  menuMe: string = '';
  menuProjects: string = '';
  menucontact: string = '';
  selectedLanguage: string = 'english';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((newLanguage: string) => {
      this.updateMenu(newLanguage);
    });

    this.updateMenu(this.languageService.getCurrentLanguage());
  }

  updateMenu(language: string) {
    switch (language) {
      case 'english':
        this.menuHome = "HOME";
        this.menuMe = "ABOUT ME";
        this.menuProjects = "PROJECTS";
        this.menucontact = "CONTACT";
        break;
      case 'spanish':
        this.menuHome = "INICIO";
        this.menuMe = "SOBRE MI";
        this.menuProjects = "PROYECTOS";
        this.menucontact = "CONTACTO";
        break;
      case 'german':
        this.menuHome = "HOME";
        this.menuMe = "ÜBER MICH";
        this.menuProjects = "PROJEKTE";
        this.menucontact = "KONTAKT";
        break;
      default:
        break;
    }
  }

  changeLanguage(newLanguage: string) {
    if (newLanguage !== this.selectedLanguage) {
      this.selectedLanguage = newLanguage; // Actualiza el idioma seleccionado
      this.languageService.changeLanguage(newLanguage);
    }
  }
}