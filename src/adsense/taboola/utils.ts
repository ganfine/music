//将请求到的广告数组对象解析成单个的广告对象
import type { ITaboola } from '@/types/taboola'

let indexList: number[] = []

//对固定的广告进行循环派发
const adsenseDeploy = (adsenses: ITaboola[]): ITaboola => {
  const index = indexList.pop() || 0
  if (indexList.length === 0) {
    indexList = adsenses.map((_, i) => i)
  }
  return adsenses[index]
}
export { adsenseDeploy }
