import * as CharacterActions from "./characters.actions";

export interface State {
  characters: CharacterActions.Character[];
}

const initialState: State = {
  characters: [
    {
      id: 1,
      name: "test",
      isGood: true,
      numberOfRoles: 2222,
      description: "handsome",
      image: "path"
    }
  ]
};

export function characterReducer(
  state = initialState,
  action: CharacterActions.CharacterActions
) {
  switch (action.type) {
    case CharacterActions.CharacterActionTypes.ADD_CHARACTER:
      return {
        ...state,
        characters: [action.payload, ...state.characters]
      };

    case CharacterActions.CharacterActionTypes.REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter((character, index) => {
          return index !== action.payload;
        })
      };
    case CharacterActions.CharacterActionTypes.SET_CHARACTERS:
      return {
        ...state,
        recipes: [...action.payload]
      };
    default:
      return state;
  }
}
