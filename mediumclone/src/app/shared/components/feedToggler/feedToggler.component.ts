import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { currentUserSelector } from "src/app/store/selectors/authSelectors";

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feedToggler.component.html',
  styleUrls:['./feedToggler.component.css'],
  standalone: true,
  imports:[CommonModule, RouterModule]
})

export class FeedTogglerComponent {
  @Input() tagName?: string
  currentUser$ = this.store.pipe(select(currentUserSelector))
  constructor(private store:Store){}
}
