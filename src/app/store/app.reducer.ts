import { ActionReducerMap } from "@ngrx/store";

import * as fromComics from "../comics/store/comics.reducer";

export interface AppState {
  comics: fromComics.State;
}
