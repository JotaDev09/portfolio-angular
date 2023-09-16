import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss'],
})
export class AboutMeSectionComponent implements OnInit {
  hello: string = '';
  description: string = '';

  knowledges = [
    {
      type: 'Javascript',
      icon: 'assets/icons/javascript.svg',
    },
    {
      type: 'Typescript',
      icon: 'assets/icons/typescript.png',
    },
    {
      type: 'Angular',
      icon: 'assets/icons/angular.png',
    },
    {
      type: 'React',
      icon: 'assets/icons/react.png',
    },
    {
      type: 'HTML',
      icon: 'assets/icons/html.png',
    },
    {
      type: 'CSS',
      icon: 'assets/icons/css.png',
    },
    {
      type: 'SASS',
      icon: 'assets/icons/sass.svg',
    },
    {
      type: 'API',
      icon: 'assets/icons/api.png',
    },
    {
      type: 'GIT',
      icon: 'assets/icons/git.png',
    },
    {
      type: 'Firebase',
      icon: 'assets/icons/firebase.svg',
    },
    {
      type: 'Scrum',
      icon: 'assets/icons/scrum.png',
    },
    {
      type: 'Material Design',
      icon: 'assets/icons/material-design.svg',
    },
  ];

  knowledgeContainer: any[] = [];
  knowledgeContainerResp: any[] = [];
  maxWidth: number = window.innerWidth || document.documentElement.clientWidth;

  selectedLanguage: string = 'english';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((newLanguage: string) => {
      this.updateText(newLanguage);
      this.selectedLanguage = newLanguage;
    });
    this.updateText(this.languageService.getCurrentLanguage());
    this.renderKnowledges();
  }

  updateText(language: string) {
    switch (language) {
      case 'english':
        this.hello = 'HELLO,';
        this.description =
          "I'm Jr. Front-End Developer from Spain, currently residing in Germany since 2018, with a background in others work fields. In 2022, I made the decision to embrace new challenges and explore the world of programming. The learning process, which initially presented difficulties, unexpectedly revealed a source of joy and satisfaction. I've gained previous experience in developing my own projects and am looking for the opportunity to work as a professional programmer.";
        break;
      case 'spanish':
        this.hello = 'HOLA,';
        this.description =
          'Soy un desarrollador Front-End Junior de España que actualmente reside en Alemania desde 2018. Aunque mi experiencia previa abarca otros campos, en 2022 decidí aceptar nuevos desafíos y adentrarme en el mundo de la programación. A pesar de que el proceso de aprendizaje al principio presentaba dificultades, descubrí que la programación me brinda una fuente inesperada de alegría y satisfacción. He adquirido experiencia trabajando en mis propios proyectos y estoy ansioso por la oportunidad de trabajar como programador profesional.';
        break;
      case 'german':
        this.hello = 'HALLO,';
        this.description =
          'Ich bin ein Front-End Junior-Entwickler aus Spanien, der seit 2018 in Deutschland lebt. Obwohl meine bisherigen Erfahrungen andere Bereiche abdecken, habe ich mich 2022 entschlossen, neue Herausforderungen anzunehmen und in die Welt der Programmierung einzutauchen. Obwohl der Lernprozess anfangs schwierig war, entdeckte ich, dass das Programmieren eine unerwartete Quelle der Freude und Zufriedenheit ist. Ich habe Erfahrung in der Arbeit an meinen eigenen Projekten gesammelt und freue mich auf die Möglichkeit, als professioneller Programmierer zu arbeiten.';
        break;
      default:
        break;
    }
  }

  renderKnowledges() {
    for (let knowledge of this.knowledges) {
      if (this.maxWidth < 800) {
        this.knowledgeContainerResp.push(knowledge);
      } else {
        this.knowledgeContainer.push(knowledge);
      }
    }
  }
}
