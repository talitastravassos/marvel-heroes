import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MarvelService {
  private BASE_URL = "https://gateway.marvel.com:443/v1/public/characters?";
  private API_KEY = "dc98babb5a914cce3258693779c3e1b5";
  private HASH = "34d63b967e6935a3f8456bf1ca7dce48";

  constructor(private http: HttpClient) {}

  // get characters initial list
  getCharacters() {
    return this.http.get(
      `${this.BASE_URL}limit=100&ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`
    );
  }
}
