import { ArticlesInterface } from "src/app/shared/types/articles.interface";

export interface FeedResponseInterface {
  articles: Array<ArticlesInterface>,
  articlesCount: number
}
