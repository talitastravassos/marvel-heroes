import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"]
})
export class SpinnerComponent implements OnChanges {
  @Input() isLoading: boolean = false;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isLoading.currentValue) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }
}
