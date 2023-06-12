import { Component } from "@angular/core";

@Component({
  selector:'global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.css'],
})

export class GlobalFeedComponent {
  apiUrl = '/articles'
}
