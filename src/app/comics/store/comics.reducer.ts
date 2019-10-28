import * as ComicActions from "./comics.actions";

export interface State {
  comics: ComicActions.Comic[];
}

const initialState: State = {
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
    default: {
      return state;
    }
  }
}