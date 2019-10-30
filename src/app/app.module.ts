import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ComicsComponent } from "./comics/comics.component";
import { ComicListComponent } from "./comics/comic-list/comic-list.component";
import { ComicItemComponent } from "./comics/comic-list/comic-item/comic-item.component";
import { ComicDetailComponent } from "./comics/comic-detail/comic-detail.component";
import { CharactersComponent } from "./characters/characters.component";
import { StoreModule } from "@ngrx/store";
import { FormsModule } from "@angular/forms";
import * as fromApp from "./store/app.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ComicsEffects } from "./comics/store/comics.effects";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { CharacterListComponent } from "./characters/character-list/character-list.component";
import { CharacterItemComponent } from "./characters/character-list/character-item/character-item.component";
import { AddCharacterComponent } from "./characters/add-character/add-character.component";
import { handleImgErrorDirective } from "./handle-img-error/handle-img-error.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComicsComponent,
    ComicListComponent,
    ComicItemComponent,
    ComicDetailComponent,
    CharactersComponent,
    CharacterListComponent,
    CharacterItemComponent,
    AddCharacterComponent,
    handleImgErrorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([ComicsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
