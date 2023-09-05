import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit{
  currentTextIndex = 0;
  currentText: string = "";
  isDeleting = false;
  texts = ["JUAN DE SANTOS", "FRONT-END DEVELOPER"];
  typingSpeed = 60;
  pause = 2000

  title: string = "I'M";
  follow: string = "FOLLOW ME";

  ngOnInit() {
    this.type();
  }

  type() {
    if (this.currentTextIndex >= this.texts.length) {
      this.currentTextIndex = 0;
    }

    const currentTextToType = this.texts[this.currentTextIndex];

    if (this.isDeleting) {
      this.currentText = this.currentText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentTextToType.substring(0, this.currentText.length + 1);
    }

    if (!this.isDeleting && this.currentText === currentTextToType) {
      this.isDeleting = true;
      this.typingSpeed = 60;
      setTimeout(() => this.type(), this.pause);
    } else if (this.isDeleting && this.currentText === "") {
      this.isDeleting = false;
      this.currentTextIndex++;
      this.typingSpeed = 60;
      setTimeout(() => this.type(), this.typingSpeed);
    } else {
      setTimeout(() => this.type(), this.typingSpeed);
    }
  }
}
