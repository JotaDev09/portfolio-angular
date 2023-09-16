import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-attributions',
  templateUrl: './attributions.component.html',
  styleUrls: ['./attributions.component.scss'],
})
export class AttributionsComponent implements OnInit {
  attributions: string = 'Attributions';
  description: string =
    'Below are the resources used in this project, along with their respective credits and links to the sources:';
  thanks: string =
    'I would like to express my gratitude to Icons8 for providing these valuable resources used in this project.';

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
        this.attributions = 'Attributions';
        this.description =
          'Below are the resources used in this project, along with their respective credits and links to the sources:';
        this.thanks =
          'I would like to express my gratitude to Icons8 for providing these valuable resources used in this project.';
        break;
      case 'spanish':
        this.attributions = 'Atribuciones';
        this.description =
          'A continuación se muestran los recursos utilizados en este proyecto, junto con sus respectivos créditos y enlaces a las fuentes:';
        this.thanks =
          'Me gustaría expresar mi agradecimiento a Icons8 por proporcionar estos valiosos recursos utilizados en este proyecto.';
        break;
      case 'german':
        this.attributions = 'Zuschreibungen';
        this.description =
          'Nachfolgend sind die in diesem Projekt verwendeten Ressourcen sowie deren jeweilige Credits und Links zu den Quellen aufgeführt:';
        this.thanks =
          'Ich möchte Icons8 für die Bereitstellung dieser wertvollen Ressourcen danken, die in diesem Projekt verwendet wurden.';
        break;
      default:
        break;
    }
  }
}
