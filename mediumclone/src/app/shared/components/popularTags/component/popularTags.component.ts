import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getPopularTags } from "../store/actions/actions";
import { CommonModule } from "@angular/common";
import { combineLatest } from "rxjs";
import { popularTagsLoadingSelector, popularTagsSelector } from "../store/selectors";
import { RouterModule } from "@angular/router";
import { SpinnerComponent } from "../../spinner/spinner.component";

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.css'],
  standalone: true,
  imports:[CommonModule, RouterModule, SpinnerComponent]
})

export class PopularTagsComponent implements OnInit {
  data$ = combineLatest({
    popularTags: this.store.select(popularTagsSelector),
    isLoading: this.store.select(popularTagsLoadingSelector)
  })
  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.dispatch(getPopularTags())
  }

}
