import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromApp from "./store/app.reducer";
import * as ComicsActions from "./comics/store/comics.actions";
import * as CharactersACtions from "./characters/store/characters.actions";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "comic-hub";

  constructor(private store: Store<fromApp.AppState>) {}
  ngOnInit() {
    this.store.dispatch(new ComicsActions.FetchComics());
    this.store.dispatch(new CharactersACtions.FetchCharacters());
  }
}
