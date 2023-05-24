const createMeta = (elements: Record<string, any>[]) => {
  return elements.map((item) => {
    const flag = document.createDocumentFragment()
    const meta = document.createElement('meta')
    Object.keys(item).forEach((key) => {
      if (item[key]) {
        meta.setAttribute(key, item[key])
      }
    })
    flag.appendChild(meta)
    return flag
  })
}

const useHead = (option: Record<string, any>) => {
  const head = document.getElementsByTagName('head')[0]
  createMeta(option['meta']).forEach((item) => head.appendChild(item))
}

export { useHead }
