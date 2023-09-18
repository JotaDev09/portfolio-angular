import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  myInfo = [
    {
      name: ' Juan de Santos',
      phone: '+49 0178 6082868',
      address: 'Berlin, Germany',
      email: 'juanj.desantos@gmail.com',
    },
  ];

  design: string = 'Website design by ';
  design_: string = ' and programmed by ';
  attributions: string = 'Attributions';
  impressum: string = 'Impressum';

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((newLanguage: string) => {
      this.updateText(newLanguage);
    });

    this.updateText(this.languageService.getCurrentLanguage());
  }

  updateText(language: string) {
    switch (language) {
      case 'english':
        this.design = 'Website design by ';
        this.design_ = ' and programmed by ';
        this.attributions = 'Attributions';
        this.impressum = 'Impressum';
        break;
      case 'spanish':
        this.design = 'Página web diseñada por ';
        this.design_ = ' y programada por ';
        this.attributions = 'Atribuciones';
        this.impressum = 'Aviso legal';
        break;
      case 'german':
        this.design = 'Website-Design von ';
        this.design_ = ' und programmiert von ';
        this.attributions = 'Zuschreibungen';
        this.impressum = 'Imprint';
        break;
      default:
        break;
    }
  }
}
