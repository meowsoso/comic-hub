import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";

import * as fromApp from "../store/app.reducer";
import * as CharactersActions from "../characters/store/characters.actions";
import * as ComicsActions from "../comics/store/comics.actions";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Comic } from "../comics/store/comics.actions";

@Component({
  selector: "app-add-character",
  templateUrl: "./add-character.component.html",
  styleUrls: ["./add-character.component.css"]
})
export class AddCharacterComponent implements OnInit, OnDestroy {
  @Input() index: number;
  @Input() comic: Comic;
  @Output() close = new EventEmitter<void>();
  characters: CharactersActions.Character[];
  private charSub: Subscription;
  private comicSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.charSub = this.store
      .select("characters")
      .pipe(map(charactersState => charactersState.characters))
      .subscribe((characters: CharactersActions.Character[]) => {
        this.characters = characters;
      });

    // this.comicSub = this.store
    //   .select("characters")
    //   .pipe(map(comicsState => comicsState.comics))
    //   .subscribe((comics: Comic[]) => {
    //     this.comic = comics[this.index];
    //   });
  }

  ngOnDestroy() {
    if (this.charSub) {
      this.charSub.unsubscribe();
    }
    if (this.comicSub) {
      this.comicSub.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // TODO: workaround, id should be handled by database
    const newId = this.characters.length + 1;
    const newCharacter = {
      id: newId,
      name: form.value.name,
      description: form.value.description,
      image: form.value.description
    };
    this.comic.charactersArray.unshift(newId);

    this.store.dispatch(
      new ComicsActions.UpdateComic({
        index: this.index,
        newComic: this.comic
      })
    );

    this.store.dispatch(new CharactersActions.AddCharacter(newCharacter));

    form.reset();
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}
