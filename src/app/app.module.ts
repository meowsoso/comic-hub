import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ComicsComponent } from "./comics/comics.component";
import { ComicListComponent } from "./comics/comic-list/comic-list.component";
import { ComicItemComponent } from "./comics/comic-list/comic-item/comic-item.component";
import { ComicDetailComponent } from "./comics/comic-detail/comic-detail.component";
import { CharactersComponent } from "./characters/characters.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComicsComponent,
    ComicListComponent,
    ComicItemComponent,
    ComicDetailComponent,
    CharactersComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
