import * as FetchActions from "./actions";

const initialState = {
  heroes: [],
  heroSelected: {}
};

export function MarvelReducer(
  state = initialState,
  action: FetchActions.FetchActions
) {
  switch (action.type) {
    case FetchActions.FETCH_SEARCH:
      return {
        ...state,
        heroes: action.payload
      };
    case FetchActions.FETCH_HEROES:
      return {
        ...state,
        heroes: action.payload
      };
    case FetchActions.SELECT_HERO:
      return {
        ...state,
        heroSelected: action.payload
      };
    default:
      return state;
  }
}
