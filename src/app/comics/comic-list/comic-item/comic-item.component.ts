import { Component, OnInit, Input } from "@angular/core";
import { Comic } from "../../comic.model";

@Component({
  selector: "app-comic-item",
  templateUrl: "./comic-item.component.html",
  styleUrls: ["./comic-item.component.css"]
})
export class ComicItemComponent implements OnInit {
  @Input() comic: Comic;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
