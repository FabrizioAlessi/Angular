import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToFavorites } from "./store/addToFavoritesAction";

@Component({
  selector: 'app-add-to-favorite',
  templateUrl:'./addToFavorite.component.html',
  styleUrls: ['./addToFavorite.component.css']
})

export class AddToFavoriteComponent {
  @Input() isFavorited: boolean = false
  @Input() articleSlug: string = ''
  @Input() favoriteCount: number = 0

  constructor(private store: Store){}

  handleLike(){
    this.store.dispatch(addToFavorites({
      isFavorited: this.isFavorited,
      slug:this.articleSlug
    }))
    //optimistic update
    if(this.isFavorited){
      this.favoriteCount = this.favoriteCount -1
    }else {
      this.favoriteCount = this.favoriteCount +1
    }
    this.isFavorited = !this.isFavorited
  }
}
