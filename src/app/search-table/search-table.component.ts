import { Component, OnInit } from '@angular/core';
import { SkiItemInfo } from './ski-item.class';
import { SkiService } from './ski-service';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent implements OnInit {

  private items: any[];
  private item: any;
  private cols: any[];


  constructor(private skiService: SkiService) { }

  ngOnInit() {
    this.cols = [
      { field: 'date_start', header: '日付開始' },
      { field: 'date_end', header: '日付終了' },
      { field: 'costmoney', header: 'コスト' },
      { field: 'placename', header: '場所' },
      { field: 'menber', header: '人員' }
    ];
    this.skiService.getSkiitem()
      .subscribe(data => {
        this.items = data;
        console.log(data);
      })
    // this.items = [
    //   { date_start: "2018/12/21", date_end: "2018/12/23", costmoney: "63200", placename: "戸狩温泉", hotel: "レシェント", menber: "4" }
    // ]

  }
}
