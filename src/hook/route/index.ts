import { getRandomString } from '@/utils/random'
import { useRouter, useRoute } from 'vue-router'

const useRedirect = () => {
  const router = useRouter()
  const route = useRoute()

  const toRedirect = (options: { path: string; query: string; page?: number }) => {
    const { path, query, page } = options
    router.push({
      path: page !== undefined ? `/${path}/${query}/${getRandomString(8)}${page}` : `/${path}/${query}`,
      query: {
        pub: route.query.pub
      }
    })
  }
  return {
    toRedirect
  }
}

const useToback = (index: number) => {
  const router = useRouter()
  const toBack = () => {
    router.go(index)
  }

  return {
    toBack
  }
}
const useToHome = () => {
  const router = useRouter()
  const toHome = () => {
    router.push('/')
  }
  return {
    toHome
  }
}

export { useRedirect, useToback, useToHome }
