const replaceStr = (str: string, options: Record<string, string>) => {
  const parnter = Object.keys(options).map((item) => `(${item.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1')})`)
  const reg = new RegExp(parnter.join('|'), 'g')
  return str.replace(reg, (s) => options[s])
}

export { replaceStr }
