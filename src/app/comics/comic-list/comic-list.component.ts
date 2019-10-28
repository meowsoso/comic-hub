import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comic-list",
  templateUrl: "./comic-list.component.html",
  styleUrls: ["./comic-list.component.css"]
})
export class ComicListComponent implements OnInit {
  comics = [
    {
      name: "comic1",
      description: "hello world"
    },
    {
      name: "comic2",
      description: "hello world"
    },
    {
      name: "comic3",
      description: "hello world"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
