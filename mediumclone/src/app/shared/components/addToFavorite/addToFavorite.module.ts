import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddToFavoriteComponent } from "./addToFavorite.component";
import { AddToFavoriteService } from "./services/addToFavorite.service";
import { EffectsModule } from "@ngrx/effects";
import { addToFavoritesEffect } from "./store/addToFavoriteEffects";

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([addToFavoritesEffect])],
  declarations: [AddToFavoriteComponent],
  exports: [AddToFavoriteComponent],
  providers: [AddToFavoriteService]
})

export class AddToFavoriteModule {}
