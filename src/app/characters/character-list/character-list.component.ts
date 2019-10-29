import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Store, select } from "@ngrx/store";

import * as ComicActions from "../../comics/store/comics.actions";
import * as fromApp from "../../store/app.reducer";
import * as fromCharacters from "../store/characters.reducer";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Character } from "../store/characters.actions";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"]
})
export class CharacterListComponent implements OnInit, OnDestroy {
  // comics: Observable<{ comics: ComicActions.Comic[] }>;
  comic: ComicActions.Comic;
  characters: Character[] = [];
  index: number;
  subscription: Subscription;
  charSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    // get comic index
    const index = this.route.params["_value"]["id"];
    this.index = index;
    // get comic
    this.subscription = this.store
      .select("comics")
      .pipe(map(comicsState => comicsState.comics))
      .subscribe((comics: ComicActions.Comic[]) => {
        console.log(comics);
        this.comic = comics[index];
      });
    // get characters
    this.charSub = this.store
      .select("characters")
      .pipe(map(charactersState => charactersState.characters))
      .subscribe((characters: Character[]) => {
        characters.map(character => {
          if (this.comic.charactersArray.indexOf(character.id) !== -1) {
            this.characters.push(character);
          }
        });
        console.log(this.characters);
      });
  }

  ngOnDestroy() {}
}
