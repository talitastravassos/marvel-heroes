import { Action } from "@ngrx/store";

export const FETCH_SEARCH = "FETCH_SEARCH";
export const FETCH_HEROES = "FETCH_HEROES";
export const SELECT_HERO = "SELECT_HERO";


export class FetchSearch implements Action {
  readonly type = FETCH_SEARCH;

  constructor(public payload: any) {}
}
export class FetchHeroes implements Action {
  readonly type = FETCH_HEROES;

  constructor(public payload: any) {}
}

export class SelectHero implements Action {
  readonly type = SELECT_HERO;

  constructor(public payload: any) {}
}

// tslint:disable-next-line: max-line-length
export type FetchActions = FetchSearch | FetchHeroes | SelectHero;
