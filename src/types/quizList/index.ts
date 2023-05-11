interface IQuizItem {
  category: string
  cover: string
  id: number
  published: number
  slug: string
  tags: string
  title: string
}

interface IQuizList {
  total?: number
  list: IQuizItem[]
}

export { IQuizList, IQuizItem }
