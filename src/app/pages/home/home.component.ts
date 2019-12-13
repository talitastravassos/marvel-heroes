import { MarvelService } from "./../../services/marvel.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  charactersList: any[] = [];

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {
    this.marvelService.getCharacters().subscribe((res: any) => {
      this.charactersList = res.data.results;
      console.log(this.charactersList);
    });
  }
}
