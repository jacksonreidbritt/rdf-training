import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from "./services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public profileData:any = { };

  constructor() { }

  ngOnInit(): void {

  }

}
