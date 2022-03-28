import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileData = {
    "@context" : "https://schema.org/",
    "@type": "Thing",
    "name" : "jackson"
  };
  public profilename = "jackson";

  constructor() { }

  ngOnInit(): void {
    this.profilename = this.profileData.name
  }

}
