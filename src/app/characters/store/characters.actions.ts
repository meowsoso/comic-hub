import { Action } from "@ngrx/store";

export interface Character {
  id: number;
  name: string;
  description: string;
  numberOfRoles: number;
  image: string;
}

export enum CharacterActionTypes {
  ADD_CHARACTER = "[Character] ADD_CHARACTER",
  REMOVE_CHARACTER = "[Character] REMOVE_CHARACTER"
}

export class AddCharacter implements Action {
  readonly type = CharacterActionTypes.ADD_CHARACTER;

  constructor(public payload: Character) {}
}

export class RemoveCharacter implements Action {
  readonly type = CharacterActionTypes.REMOVE_CHARACTER;

  constructor(public payload: number) {}
}

export type CharacterActions = AddCharacter | RemoveCharacter;
