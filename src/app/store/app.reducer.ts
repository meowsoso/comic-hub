import { ActionReducerMap } from "@ngrx/store";

import * as fromComics from "../comics/store/comics.reducer";
import * as fromCharacters from "../characters/store/characters.reducer";

export interface AppState {
  comics: fromComics.State;
  characters: fromCharacters.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  characters: fromCharacters.characterReducer,
  comics: fromComics.comicReducer
};
