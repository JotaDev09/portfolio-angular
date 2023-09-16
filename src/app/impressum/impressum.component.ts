import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {
  impressum: string = 'Impressum';
  responsible: string = 'Responsible for the content of this website';
  telephone: string = 'Telephone';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((newLanguage: string) => {
      this.updateText(newLanguage);
    });

    this.updateText(this.languageService.getCurrentLanguage());
  }

  updateText(language: string) {
    switch (language) {
      case 'english':
        this.impressum = 'Impressum';
        this.responsible = 'Responsible for the content of this website';
        this.telephone = 'Telephone';
        break;
      case 'spanish':
        this.impressum = 'Aviso legal';
        this.responsible = 'Responsable del contenido de esta página web';
        this.telephone = 'Teléfono';
        break;
      case 'german':
        this.impressum = 'Imprint';
        this.responsible = 'Vertretungsberechtigt Gesellschafter';
        this.telephone = 'Telefon';
        break;
      default:
        break;
    }
  }
}
