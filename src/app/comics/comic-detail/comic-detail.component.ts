import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";

import * as fromApp from "../../store/app.reducer";
import { map, switchMap } from "rxjs/operators";
import { Comic } from "../comic.model";

@Component({
  selector: "app-comic-detail",
  templateUrl: "./comic-detail.component.html",
  styleUrls: ["./comic-detail.component.css"]
})
export class ComicDetailComponent implements OnInit {
  comic: Comic;
  index: number;
  isTextExpanded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params["id"];
        }),
        switchMap(id => {
          this.index = id;
          return this.store.select("comics");
        }),
        map(comicsState => {
          return comicsState.comics.find((comic, index) => {
            return index === this.index;
          });
        })
      )
      .subscribe(comic => {
        this.comic = comic;
      });
  }

  onTextToggle() {
    this.isTextExpanded = !this.isTextExpanded;
  }
}
