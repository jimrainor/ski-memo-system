import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  constructor() {

  }

  ngOnInit() {
    this.items = [
      { label: '記録一覧', icon: 'pi pi-table' },
      { label: 'スキー場情報管理', icon: 'pi pi-wifi' },
      { label: 'ホテル情報管理', icon: 'pi pi-list' },
      { label: '選択４', icon: 'pi pi-align-center' },
      { label: '選択５', icon: 'pi pi-home' }
    ];
    this.activeItem = this.items[0];
  }
  s

}
