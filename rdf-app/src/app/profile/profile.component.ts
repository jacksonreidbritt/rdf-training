import { Component, OnInit } from '@angular/core';
import {ProfileService} from "./services/profile.service";

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
  public profileName = "jackson";

  constructor(private profileService: ProfileService) { }

  async ngOnInit(): Promise<void> {
    this.profileName = this.profileData.name
    this.profileData = await this.profileService.getJsonld();
  }

}
