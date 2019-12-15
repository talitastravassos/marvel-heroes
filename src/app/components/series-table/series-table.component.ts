import {
  Component,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

export interface SeriesData {
  title: string;
  years: any;
  type: string;
  url: any;
}

@Component({
  selector: "app-series-table",
  templateUrl: "./series-table.component.html",
  styleUrls: ["./series-table.component.scss"]
})
export class SeriesTableComponent implements OnChanges {
  @Input() data: any[] = [];

  displayedColumns: string[] = ["title", "years", "type", "details"];
  dataSource: MatTableDataSource<SeriesData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
}
