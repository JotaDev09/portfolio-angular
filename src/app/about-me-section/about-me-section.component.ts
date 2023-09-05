import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit{
  hello: string = "Hello,";
  description: string =  "I'm Jr. Front-End Developer from Spain, currently residing in Germany since 2018, with a background in others work fields. In 2022, I made the decision to embrace new challenges and explore the world of programming. The learning process, which initially presented difficulties, unexpectedly revealed a source of joy and satisfaction. I've gained previous experience in developing my own projects and am looking for the opportunity to work as a professional programmer.";

  knowledges = [
    {
      type: "HTML",
      icon: "assets/icons/html.png",
    },
    {
      type: "CSS",
      icon: "assets/icons/css.png",
    },
    {
      type: "Javascript",
      icon: "assets/icons/javascript.svg",
    },
    {
      type: "React",
      icon: "assets/icons/react.png",
    },
    {
      type: "Angular",
      icon: "assets/icons/angular.png",
    },
    {
      type: "API",
      icon: "assets/icons/api.png",
    },
    {
      type: "Git",
      icon: "assets/icons/git.png",
    },
    {
      type: "Scrum",
      icon: "assets/icons/scrum.png",
    },
  ];

  knowledgeContainer: any[] = [];
  knowledgeContainerResp: any[] = [];
  maxWidth: number = window.innerWidth || document.documentElement.clientWidth;

  ngOnInit() {
    this.renderKnowledges();
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
