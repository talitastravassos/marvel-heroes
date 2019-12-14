import {
  Component,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

export interface HeroData {
  name: string;
  series: any;
  events: any;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnChanges {
  @Input() data: any[] = [];

  displayedColumns: string[] = ["name", "series", "events"];
  dataSource: MatTableDataSource<HeroData>;

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
