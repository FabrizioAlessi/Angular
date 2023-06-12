export interface ArticleRequestInterface {
  article: {
    title: string,
    description: string,
    body: string,
    tagList: Array<string>
  }
}
