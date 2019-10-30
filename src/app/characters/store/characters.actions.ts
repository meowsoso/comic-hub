import { Action } from "@ngrx/store";

export interface Character {
  id: number;
  name: string;
  description: string;
  numberOfRoles?: number;
  isGood?: boolean;
  image: string;
}

export enum CharacterActionTypes {
  ADD_CHARACTER = "[Character] ADD_CHARACTER",
  REMOVE_CHARACTER = "[Character] REMOVE_CHARACTER",
  SET_CHARACTERS = "[Character] SET_CHARACTERS",
  FETCH_CHARACTERS = "[Character] FETCH_CHARACTERS"
}

export class AddCharacter implements Action {
  readonly type = CharacterActionTypes.ADD_CHARACTER;

  constructor(public payload: Character) {}
}

export class RemoveCharacter implements Action {
  readonly type = CharacterActionTypes.REMOVE_CHARACTER;

  constructor(public payload: number) {}
}

export class SetCharacters implements Action {
  readonly type = CharacterActionTypes.SET_CHARACTERS;

  constructor(public payload: Character[]) {}
}
export class FetchCharacters implements Action {
  readonly type = CharacterActionTypes.FETCH_CHARACTERS;
}

export type CharacterActions =
  | AddCharacter
  | RemoveCharacter
  | SetCharacters
  | FetchCharacters;
