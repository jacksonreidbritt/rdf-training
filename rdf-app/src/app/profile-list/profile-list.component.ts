import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  @Input() public profileData: unknown[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
