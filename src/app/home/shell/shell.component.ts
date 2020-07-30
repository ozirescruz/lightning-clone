import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faBars,
  faHome,
  faEnvelope,
  faUser,
  faList,
  faListAlt,
  faTh,
  faCog,
  faTv,
  faBell,
  faGlobe,
  faTable,
  faAlignCenter,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  faCoffee = faCoffee;
  faBars = faBars;
  faHome = faHome;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faListAlt = faListAlt;
  faTh = faTh;
  faCog = faCog;
  faTv = faTv;
  faBell = faBell;
  faGlobe = faGlobe;
  faTable = faTable;
  faAlignCenter = faAlignCenter;

  isCollapseMenu = false;

  constructor() {}

  ngOnInit(): void {}

  collapseMenu() {
    this.isCollapseMenu = !this.isCollapseMenu;
  }
}
