import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
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
  private items: Array<SkiItemInfo> | any;
  private itemSelected: SkiItemInfo;
  private cols: any[];

  private readonly yearRage = '2017:2027';

  private readonly dateFormat = 'yyyy-MM-dd';

  displayDialog: any;
  index: any;

  constructor(private skiService: SkiService,
    private messageService: MessageService,
    @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.cols = [
      { field: 'startdate', header: '日付開始', styleString: 'width: 15%' },
      { field: 'enddate', header: '日付終了', styleString: 'width: 15%' },
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
        res['body'].data ? this.items = res['body'].data : this.items = res['body'];
      }
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
}
