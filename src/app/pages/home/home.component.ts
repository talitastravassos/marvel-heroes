import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { MarvelService } from "./../../services/marvel.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  charactersList: Observable<{ marvel: any }>;

  constructor(
    private marvelService: MarvelService,
    private store: Store<{ marvel: any }>
  ) {}

  ngOnInit() {
    this.marvelService.getCharacters();

    this.store
      .select("marvel")
      .subscribe(state => (this.charactersList = state.heroes));

    // this.store.select("marvel").subscribe(state => console.log(state));
  }
}
