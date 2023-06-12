import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.css'],
})

export class TagFeedComponent implements OnInit{
  apiUrl:string = ''
  tagName:string = ''
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tagName =params['slug']
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }
}
