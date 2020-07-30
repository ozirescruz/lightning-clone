import { Component, OnInit } from '@angular/core';
import {
  faCog,
  faUser,
  faEnvelope,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faCog = faCog;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faBell = faBell;

  constructor() {}

  ngOnInit(): void {}
}
