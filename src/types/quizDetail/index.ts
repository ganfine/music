export interface IStyle {
  background_color: string
  color: string
  font_family: string
  font_size: string
}

export interface IAnswer {
  id: number
  correct: boolean
  result_ids: number
  img: string
  credit: string
  url: string
  title: string
  overlay_text: boolean
  description: string
  style: IStyle
}

export interface IQuestion {
  id: number
  format: string
  title: string
  overlay_text: boolean
  bg_img: string
  overlay_img: string
  credit: string
  url: string
  description: string
  style: IStyle
  answers: IAnswer[]
}

export interface IResult {
  id: number
  title: string
  description: string
  score_max: number
  score_min: number
  credit: string
  url: string
  img: string
}

export interface IQuizDetail {
  id: number
  done: '0' | '1'
  author: string
  category: string
  cover: string
  cover_text: string
  title: string
  description: string
  type: string
  tags: string
  overlay_text: boolean
  credit: string
  url: string
  questions: IQuestion[]
  results: IResult[]
}
