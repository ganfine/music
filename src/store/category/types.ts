import type { ICategory } from '@/types/category'

export interface IState {
  categories: ICategory[]
  requestStatus: 'started' | 'stoped'
}
