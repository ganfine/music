interface IArticles {
  id: number
  title: string
  category: string
  sub: string
  slug: string
  cover: string
  summary: string
  tags: string
  published_at: string
  author: string
  index?: number
}

interface IArticlesList {
  total?: number
  list: IArticles[]
}

export { IArticlesList, IArticles }
