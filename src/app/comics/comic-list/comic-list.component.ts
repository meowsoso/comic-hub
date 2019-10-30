import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Comic } from "../comic.model";
@Component({
  selector: "app-comic-list",
  templateUrl: "./comic-list.component.html",
  styleUrls: ["./comic-list.component.css"]
})
export class ComicListComponent implements OnInit, OnDestroy {
  comics: Comic[];
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select("comics")
      .pipe(map(comicsState => comicsState.comics))
      .subscribe((comics: Comic[]) => {
        this.comics = comics;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
