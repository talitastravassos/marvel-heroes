import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
import { SearchInputComponent } from './components/search-input/search-input.component';

const matModules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule
];

@NgModule({
  declarations: [AppComponent, HomeComponent, TableComponent, SearchInputComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ marvel: MarvelReducer }),
    [...matModules]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
