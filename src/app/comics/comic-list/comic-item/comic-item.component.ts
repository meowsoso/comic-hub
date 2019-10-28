import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-comic-item",
  templateUrl: "./comic-item.component.html",
  styleUrls: ["./comic-item.component.css"]
})
export class ComicItemComponent implements OnInit {
  @Input() comic;

  constructor() {}

  ngOnInit() {}
}
