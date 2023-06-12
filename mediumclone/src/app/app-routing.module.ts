import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'home',
    loadChildren: () => import ('./home/homeFeed.module').then(m => m.HomeFeedModule)
  },
  {
    path:'articles/new',
    loadChildren: () => import ('./createArticle/createArticle.module').then(m => m.CreateArticleModule)
  },
  {
    path:'articles',
    loadChildren: () => import ('./article/article.module').then(m => m.ArticleModule)
  },
  {
    path:'articles/:slug/edit',
    loadChildren: () => import ('./editArticle/editArticle.module').then(m => m.EditArticleModule)
  },
  {
    path:'profiles',
    loadChildren: () => import ('./userProfile/userProfile.module').then(m => m.UserProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
