import { ICategory } from '@/types/category'

interface ICategoryRes {
  success: string
  data: ICategory[]
  error?: string
}

export { ICategoryRes }
