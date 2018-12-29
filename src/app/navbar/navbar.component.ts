import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private items: MenuItem[];
  constructor() {

  }

  ngOnInit() {
    this.items = [
      { label: '選択１', icon: 'fa fa-fw fa-bar-chart' },
      { label: '選択２', icon: 'fa fa-fw fa-calendar' },
      { label: '選択３', icon: 'fa fa-fw fa-book' },
      { label: '選択４', icon: 'fa fa-fw fa-support' },
      { label: '選択５', icon: 'fa fa-fw fa-twitter' }
    ];
  }
  s

}
