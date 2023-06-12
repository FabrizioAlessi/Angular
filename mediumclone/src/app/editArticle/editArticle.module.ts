import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "../shared/components/articleForm/articleForm.module";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { EditArtcticleComponent } from "./component/editArticle.component";
import { ArticleEffect, UpdateArticleEffect } from "./store/editArticleEffects";
import { updateArticleReducer } from "./store/editArticleReducer";
import { EditArticleService } from "./service/editArticle.service";
const routes = [
  {
    path: '',
    component: EditArtcticleComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, ArticleEffect]),
    StoreModule.forFeature('editArticle', updateArticleReducer)
  ],
  declarations: [EditArtcticleComponent],
  providers: [EditArticleService],
})

export class EditArticleModule {}
