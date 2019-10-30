import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromApp from "../../../store/app.reducer";
import * as ComicsActions from "../../../comics/store/comics.actions";
import * as CharactersActions from "../../store/characters.actions";
import { Comic } from "src/app/comics/comic.model";
import { Character } from "../../character.model";
@Component({
  selector: "app-character-item",
  templateUrl: "./character-item.component.html",
  styleUrls: ["./character-item.component.css"]
})
export class CharacterItemComponent implements OnInit {
  @Input() character: Character;
  @Input() comic: Comic;
  @Input() comicIndex: number;
  @Input() charIndex: number;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {}

  onDelete() {
    if (confirm("Are you sure to delete " + this.character.name)) {
      // update char array
      const charIndexOfArray = this.comic.charactersArray.indexOf(
        this.character.id
      );
      if (charIndexOfArray !== -1)
        this.comic.charactersArray.splice(charIndexOfArray, 1);

      this.store.dispatch(
        new ComicsActions.UpdateComic({
          index: this.comicIndex,
          newComic: this.comic
        })
      );
      this.store.dispatch(
        new CharactersActions.RemoveCharacter(this.charIndex)
      );
    }
  }
}
