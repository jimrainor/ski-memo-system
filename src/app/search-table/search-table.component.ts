import { Component, OnInit } from '@angular/core';
import { SkiItemInfo } from './ski-item.class';
import { SkiService } from './ski-service';
import { MenuItem } from 'primeng/api';
import { MessageService } from './messageService';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent implements OnInit {

  private menuItem: MenuItem[];
  private items: Array<SkiItemInfo>;
  private itemSelected: SkiItemInfo;
  private cols: any[];

  displayDialog: any;
  index: any;

  constructor(private skiService: SkiService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'date_start', header: '日付開始', styleString: 'width: 15%' },
      { field: 'date_end', header: '日付終了', styleString: 'width: 15%' },
      { field: 'costmoney', header: 'コスト', styleString: 'width: 10%' },
      { field: 'placename', header: '場所', styleString: 'width: 25%' },
      { field: 'menber', header: '人員', styleString: '' }
    ];
    this.skiService.getSkiitem().then(data => {
      this.items = data;
      console.log(data);
    });

    this.menuItem = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          // this.update();
        }
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          // this.delete();
        }
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
    ];

    this.itemSelected = new SkiItemInfo();
  }

  showSelectedData(item: SkiItemInfo, index: any) {
    console.log(item);
    console.log('index=' + index);
    // date_start: string;
    // date_end: string;
    // costmoney: string;
    // placename: string;
    // hotel: string;
    // menber: string;

    this.itemSelected = this.cloneSkiItemInfo(item);
    this.index = index;
    this.displayDialog = true;
  }

  cloneSkiItemInfo(skiItemInfo: SkiItemInfo): SkiItemInfo {
    let car = new SkiItemInfo();
    for (let prop in skiItemInfo) {
      car[prop] = skiItemInfo[prop];
    }
    return car;
  }
}
