import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-tag-list',
  templateUrl:'./tagList.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule]
})

export class TagListComponent {
  @Input() tags:Array<string> = []
}
