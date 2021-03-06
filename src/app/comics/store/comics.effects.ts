import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map, tap } from "rxjs/operators";

import * as ComicsActions from "./comics.actions";
import * as CharactersActions from "../../characters/store/characters.actions";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ComicsEffects {
  @Effect()
  fetchComics = this.actions$.pipe(
    ofType(ComicsActions.ComicActionTypes.FETCH_COMICS),
    switchMap(() => {
      return this.http.get<any>(
        "https://propertymecomics.s3.amazonaws.com/comics"
      );
    }),
    // extracting comic book data from JSON, and log characters ID in array
    map(comics => {
      return comics.map(comic => {
        let charactersArray = [];
        comic.characters.map(character => {
          charactersArray.push(+character.id);
        });
        const updatedComic = {
          id: +comic.id,
          name: comic.name,
          slug: comic.slug,
          description: comic.description,
          image: comic.image,
          charactersArray: charactersArray
        };
        return updatedComic;
      });
    }),
    map(comics => {
      // console.log("set Comic:", comics);
      return new ComicsActions.SetComics(comics);
    })
  );

  @Effect()
  fetchCharacters = this.actions$.pipe(
    ofType(CharactersActions.CharacterActionTypes.FETCH_CHARACTERS),
    switchMap(() => {
      return this.http.get<any>(
        "https://propertymecomics.s3.amazonaws.com/comics"
      );
    }),
    // extracting character data from JSON
    map(comics => {
      const characters = [];
      const charactersId = [];
      comics.map(comic => {
        comic.characters.map(character => {
          if (charactersId.indexOf(character.id) === -1) {
            charactersId.push(character.id);
            character.id = Number(character.id);
            characters.push(character);
          }
        });
      });
      console.log(characters);
      return characters;
    }),
    map(characters => {
      return new CharactersActions.SetCharacters(characters);
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
