import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ComicDetailComponent } from "./comics/comic-detail/comic-detail.component";
import { ComicListComponent } from "./comics/comic-list/comic-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/comics", pathMatch: "full" },
  {
    path: "comics",
    component: ComicListComponent,
    children: [
      //   { path: "path4", component: Name4Component }
    ]
  },
  { path: "comics/:id", component: ComicDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
