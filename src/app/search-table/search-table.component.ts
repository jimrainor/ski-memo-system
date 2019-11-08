import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { SkiItemInfo } from './ski-item.class';
import { SkiService } from './ski-service';
import { MenuItem } from 'primeng/api';
import { MessageService, Message } from 'primeng/api';

import * as _ from 'lodash';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent implements OnInit {

  private menuItem: MenuItem[];
  items: Array<SkiItemInfo>;
  itemSelected: SkiItemInfo;
  cols: any[];

  readonly yearRage = '2017:2027';

  readonly dateFormat = 'yyyy-MM-dd';

  displayDialog: any;
  index: any;

  constructor(private skiService: SkiService,
    private messageService: MessageService,
    @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.cols = [
      { field: 'startdate', header: '開始日付'},
      { field: 'enddate', header: '終了日付'},
      { field: 'costmoney', header: 'コスト'},
      { field: 'placename', header: '場所'},
      { field: 'menber', header: '人員'}
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
    this.skiService.getSkiitem().subscribe(
      res => {
        if (res) {
          res['body'].data ? this.items = res['body'].data : this.items = res['body'];
          this.messageService.add({ severity: 'info', summary: 'INFO', detail: 'データ取得できました。' });
        }
      },
      err => {
        if (err && err.error && err.error.status) {
          if (err.error.status == 500) {
            this.messageService.add({ severity: 'error', summary: 'ERROR', detail: 'API側ERRORが発生しました。' });
          } else {
            this.messageService.add({ severity: 'error', summary: 'ERROR', detail: 'status:' + err.error.status });
          }
        } else {
          this.messageService.add({ severity: 'error', summary: 'ERROR', detail: 'API側の応答がありません。' });
        }
        console.log(err);
      });
  }

  showSelectedData(item: SkiItemInfo, index: any) {
    console.log(item);
    console.log('index=' + index);

    this.itemSelected = _.cloneDeep(item);
    try {
      this.itemSelected.startdate = formatDate(this.itemSelected.startdate, this.dateFormat, this.locale);
      this.itemSelected.enddate = formatDate(this.itemSelected.enddate, this.dateFormat, this.locale);
    } catch (e) {
      console.log('this.itemSelected.startdate:' + this.itemSelected.startdate);
      console.log('this.itemSelected.enddate:' + this.itemSelected.enddate);
      this.itemSelected.startdate = formatDate(new Date(), this.dateFormat, this.locale);
      this.itemSelected.enddate = formatDate(new Date(), this.dateFormat, this.locale);
    }

    this.index = index;
    this.displayDialog = true;
  }

  saveData() {
    Promise.all([
      this.skiService.writeSkiitem(this.itemSelected).subscribe(
        val => {
          console.log('result:' + val);
          this.getListData();
        },
        err => {
          console.log(err);
        })
    ]);

    this.displayDialog = false;
  }

  // html event
  addNewLine() {
    this.itemSelected = new SkiItemInfo();
    this.displayDialog = true;
  }
}
