import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SearchTableComponent } from './search-table/search-table.component';
import {SkiService} from './search-table/ski-service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    TableModule,
  ],
  providers: [
    SkiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
