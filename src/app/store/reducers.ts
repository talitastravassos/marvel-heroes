import * as FetchActions from "./actions";

const initialState = {
  heroes: []
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
    default:
      return state;
  }
}
