import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as FetchActions from "./../store/actions";

@Injectable({
  providedIn: "root"
})
export class MarvelService {
  private BASE_URL = "https://gateway.marvel.com:443/v1/public/characters";
  private API_KEY = "dc98babb5a914cce3258693779c3e1b5";
  private HASH = "34d63b967e6935a3f8456bf1ca7dce48";

  constructor(
    private http: HttpClient,
    private store: Store<{ marvel: any }>
  ) {}

  // get characters initial list
  getCharacters() {
    this.http
      .get(
        `${this.BASE_URL}?limit=100&ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`
      )
      .subscribe((res: any) => {
        // console.log(res);
        this.store.dispatch(new FetchActions.FetchHeroes(res.data.results));
      });
  }

  getCharacter(id: string) {
    this.http
      .get(
        `${this.BASE_URL}/${id}?limit=100&ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`
      )
      .subscribe((res: any) => {
        // console.log(res);
        this.store.dispatch(new FetchActions.SelectHero(res.data.results[0]));
      });
  }

  // get search characters
  getSearch(query: string) {
    this.http
      .get(
        `${this.BASE_URL}?nameStartsWith=${query}&limit=100&ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`
      )
      .subscribe((res: any) => {
        // console.log(res);
        this.store.dispatch(new FetchActions.FetchSearch(res.data.results));
      });
  }

}
