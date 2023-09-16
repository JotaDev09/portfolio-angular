import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../language.service';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForOf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    NgForOf,
  ],
})
export class ProjectsComponent implements OnInit {
  projectsTitle: string = '';
  types: string[] = ['All', 'Javascript', 'Angular', 'React'];

  projects = [
    {
      name: 'Portfolio',
      github: 'https://github.com/JotaDev09/portfolio.git',
      screenshot: 'assets/img/portfolio.png',
      website: 'https://jotadev09.github.io/portfolio/',
      type: ['All', 'Angular', 'Typescript', 'SASS', 'HTML'],
    },
    {
      name: 'Join',
      github: 'https://github.com/JotaDev09/Join.git',
      screenshot: 'assets/img/join.jpg',
      website: 'https://juan-desantos.developerakademie.net/Join/index.html',
      type: ['All', 'Javascript', 'CSS', 'HTML'],
    },
    {
      name: 'El Pollo loco',
      github: 'https://github.com/JotaDev09/Crazy-Chicken.git',
      screenshot: 'assets/img/polloLoco.jpg',
      website: 'https://jotadev09.github.io/Crazy-Chicken/',
      type: ['All', 'Javascript', 'CSS', 'HTML'],
    },
    {
      name: 'Ring of Fire',
      github: ' https://github.com/JotaDev09/Ring-Of-Fire',
      screenshot: 'assets/img/ringoffire.jpg',
      website: '',
      type: ['All', 'Angular', 'Typescript', 'SASS', 'HTML'],
    },
    {
      name: 'Library',
      github: 'https://github.com/JotaDev09/BookStore.git',
      screenshot: 'assets/img/library.png',
      website: 'https://jotadev09.github.io/BookStore',
      type: ['All', 'React', 'Javascript', 'CSS', 'HTML'],
    },
    {
      name: 'Weather App',
      github: 'https://github.com/JotaDev09/WeatherApp.git',
      screenshot: 'assets/img/weatherApp.png',
      website: 'https://jotadev09.github.io/WeatherApp/',
      type: ['All', 'Javascript', 'CSS', 'HTML'],
    },
    {
      name: 'Pokédev',
      github: 'https://github.com/JotaDev09/Pokedev.git',
      screenshot: 'assets/img/pokedev.png',
      website: 'https://jotadev09.github.io/Pokedev/',
      type: ['All', 'Javascript', 'CSS', 'HTML'],
    },
  ];

  projectsContainer: any[] = [];
  selectedType: string = 'all';
  filteredProjects: {
    name: string;
    github: string;
    screenshot: string;
    website: string;
    type: string[];
  }[] = [];

  constructor(private languageService: LanguageService) {
    this.filteredProjects = [...this.projects];
  }

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((newLanguage: string) => {
      this.updateText(newLanguage);
    });

    this.updateText(this.languageService.getCurrentLanguage());
  }

  updateText(language: string) {
    switch (language) {
      case 'english':
        this.projectsTitle = 'PROJECTS';
        break;
      case 'spanish':
        this.projectsTitle = 'PROYECTOS';
        break;
      case 'german':
        this.projectsTitle = 'PROJEKTE';
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

  changeProjectType(selectedType: string): void {
    this.selectedType = selectedType;
    this.filterProjects();
  }

  filterProjects(): void {
    if (this.selectedType === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter((project) =>
        project.type.includes(this.selectedType)
      );
    }
  }
}
