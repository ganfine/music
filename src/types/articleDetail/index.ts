interface IParagraph {
  id: number
  raw_id: number
  topic_id: number
  heading: string
  image: string
  via: string
  content: string
  contents?: string[]
  url: string
}

interface IArticleDetail {
  id: number
  categories: string
  sub_categories: string
  slug: string
  title: string
  cover: string
  via: string
  author: string
  tags: string
  summary: string
  published_at: string
  paragraphs: IParagraph[]
}

export { IArticleDetail, IParagraph }
