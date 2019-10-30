import { Comic } from "../comic.model";
import * as ComicActions from "./comics.actions";

export interface State {
  comics: Comic[];
}

const initialState = {
  comics: []
};

export function comicReducer(
  state = initialState,
  action: ComicActions.ComicActions
) {
  switch (action.type) {
    case ComicActions.ComicActionTypes.SET_COMICS:
      return {
        ...state,
        comics: [...action.payload]
      };
    case ComicActions.ComicActionTypes.UPDATE_COMIC:
      const updatedComic = {
        ...state.comics[action.payload.index],
        ...action.payload.newComic
      };

      const updatedComics = [...state.comics];
      updatedComics[action.payload.index] = updatedComic;

      return {
        ...state,
        comics: updatedComics
      };

    case ComicActions.ComicActionTypes.GET_COMIC:
      return {
        ...state.comics[action.payload]
      };
    default:
      return state;
  }
}
