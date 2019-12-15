import { Component, OnInit } from "@angular/core";
import { MarvelService } from "src/app/services/marvel.service";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  id: string;

  constructor(
    private marvelService: MarvelService,
    private store: Store<{ marvel: any }>,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap // get id from param
      .subscribe(param => {
        console.log(param);
        this.id = param.get("id");
      });

    this.marvelService.getCharacter(this.id);

    this.store.select("marvel").subscribe(state => console.log(state));
  }
}
