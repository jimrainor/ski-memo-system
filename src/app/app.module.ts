import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { SearchTableComponent } from './search-table/search-table.component';
import { SkiService } from './search-table/ski-service';
import { MessageService } from './search-table/messageService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TabMenuModule,
    TableModule,
    PanelModule,
    SplitButtonModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    InputTextModule,
  ],
  providers: [
    SkiService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
