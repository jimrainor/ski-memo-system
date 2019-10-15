import { Component, OnInit } from '@angular/core';
import { SkiItemInfo } from './ski-item.class';
import { SkiService } from './ski-service';
import { MenuItem } from 'primeng/api';
import { MessageService } from './messageService';
import * as _ from 'lodash';

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
      { field: 'startDate', header: '日付開始', styleString: 'width: 15%' },
      { field: 'endDate', header: '日付終了', styleString: 'width: 15%' },
      { field: 'costmoney', header: 'コスト', styleString: 'width: 10%' },
      { field: 'placename', header: '場所', styleString: 'width: 25%' },
      { field: 'menber', header: '人員', styleString: '' }
    ];

    this.getListData();
    
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

  getListData() {
    this.skiService.getSkiitem().subscribe(res => {
      if (res) {
        return res['body'].data ? this.items = res['body'].data : this.items = res['body'];
      }
    });
  }

  showSelectedData(item: SkiItemInfo, index: any) {
    console.log(item);
    console.log('index=' + index);

    this.itemSelected = _.cloneDeep(item);
    this.index = index;
    this.displayDialog = true;
  }

  saveData() {
    this.items[this.index] = this.itemSelected;
    this.skiService.writeSkiitem(this.items);

    // this.getListData();

    this.displayDialog = false;
  }

  // html event
  addNewLine() {
    this.items.push(new SkiItemInfo());
  }
}
