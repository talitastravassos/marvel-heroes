import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { TableComponent } from "./components/table/table.component";

import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";

import { StoreModule } from "@ngrx/store";
import { MarvelReducer } from "./store/reducers";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { DetailsComponent } from './pages/details/details.component';
import { SeriesTableComponent } from './components/series-table/series-table.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const matModules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    SearchInputComponent,
    DetailsComponent,
    SeriesTableComponent,
    EventCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ marvel: MarvelReducer }),
    [...matModules],
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
