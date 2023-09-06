import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projectsTitle: string = "";

  projects = [
    {
      name: "Portfolio",
      github: "https://github.com/JotaDev09/portfolio.git",
      screenshot: "assets/img/portfolio.png",
      website: "https://jotadev09.github.io/portfolio/",
    },
    {
      name: "Library",
      github: "https://github.com/JotaDev09/BookStore.git",
      screenshot: "assets/img/library.png",
      website: "https://jotadev09.github.io/BookStore",
    },
    {
      name: "Weather App",
      github: "https://github.com/JotaDev09/WeatherApp.git",
      screenshot: "assets/img/weatherApp.png",
      website: "https://jotadev09.github.io/WeatherApp/",
    },
    {
      name: "El Pollo loco",
      github: "https://github.com/JotaDev09/Crazy-Chicken.git",
      screenshot: "assets/img/polloLoco.jpg",
      website: "https://jotadev09.github.io/Crazy-Chicken/",
    },
    {
      name: "Pokédev",
      github: "https://github.com/JotaDev09/Pokedev.git",
      screenshot: "assets/img/pokedev.png",
      website: "https://jotadev09.github.io/Pokedev/",
    },
    {
      name: "Tic Tac Toe",
      github: "https://github.com/JotaDev09/TicTacToe.git",
      screenshot: "assets/img/Tic-tac-toe.png",
      website: "https://jotadev09.github.io/TicTacToe/",
    },
  ];

  projectsContainer: any[] = [];

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
        this.projectsTitle = "PROJECTS";
        break;
      case 'spanish':
        this.projectsTitle = "PROYECTOS";
        break;
      case 'german':
        this.projectsTitle = "PROJEKTE";
        break;
      default:
        break;
    }
  }

  openWebsite(websiteUrl: string) {
    window.open(websiteUrl, '_blank');
  }

  openGithub(githubUrl: string) {
    window.open(githubUrl, '_blank');
  }

  
}
