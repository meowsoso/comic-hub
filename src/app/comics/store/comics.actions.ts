import { Action } from "@ngrx/store";
import { Comic } from "../comic.model";

export enum ComicActionTypes {
  UPDATE_COMIC = "[Comic] UPDATE_COMIC",
  FETCH_COMICS = "[Comic] FETCH_COMICS",
  SET_COMICS = "[Comic] SET_COMICS",
  GET_COMIC = "[Comic] GET_COMIC"
}

export class UpdateComic implements Action {
  readonly type = ComicActionTypes.UPDATE_COMIC;

  constructor(public payload: { index: number; newComic: Comic }) {}
}

export class FetchComics implements Action {
  readonly type = ComicActionTypes.FETCH_COMICS;
}

export class SetComics implements Action {
  readonly type = ComicActionTypes.SET_COMICS;

  constructor(public payload: Comic[]) {}
}

export class GetComic implements Action {
  readonly type = ComicActionTypes.GET_COMIC;

  constructor(public payload: number) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ComicActions = UpdateComic | FetchComics | SetComics | GetComic;
