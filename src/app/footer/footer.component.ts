import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  myInfo = [
    {
      name: " Juan de Santos",
      phone: "+49 0178 6082868",
      address: "Berlin, Germany",
      email: "juanj.desantos@gmail.com",
    },
  ];

    design: string = "Website design by ";
    design_: string = " and programmed by ";
    attributions: string = "Attributions";

  ngOnInit() {
  }
}
