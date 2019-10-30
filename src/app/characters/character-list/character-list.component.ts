import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import * as fromApp from "../../store/app.reducer";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Comic } from "src/app/comics/comic.model";
import { Character } from "../character.model";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"]
})
export class CharacterListComponent implements OnInit, OnDestroy {
  // comics: Observable<{ comics: ComicActions.Comic[] }>;
  comic: Comic;
  characters: Character[] = [];
  index: number;
  isAddingMode: boolean = false;

  comicSub: Subscription;
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
    this.comicSub = this.store
      .select("comics")
      .pipe(map(comicsState => comicsState.comics))
      .subscribe((comics: Comic[]) => {
        console.log(comics);
        this.comic = comics[index];
      });
    // get characters
    this.charSub = this.store
      .select("characters")
      .pipe(map(charactersState => charactersState.characters))
      .subscribe((characters: Character[]) => {
        console.log("before loading chracter", this.comic.charactersArray);
        const newCharacters = [];
        characters.map(character => {
          if (this.comic.charactersArray.indexOf(character.id) !== -1) {
            newCharacters.push(character);
          }
        });
        this.characters = newCharacters;
      });
  }

  ngOnDestroy() {
    if (this.charSub) {
      this.charSub.unsubscribe();
    }
    if (this.comicSub) {
      this.comicSub.unsubscribe();
    }
  }

  onInitAddChar() {
    this.isAddingMode = true;
  }

  onExitAdd() {
    this.isAddingMode = false;
  }
}
