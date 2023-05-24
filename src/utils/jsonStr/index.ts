const JSONStringify = (value: unknown): string => {
  let result
  try {
    result = JSON.stringify(value)
  } catch (_err) {
    result = undefined
  }
  return typeof result === 'string' ? result : JSON.stringify(Object.prototype.toString.call(value))
}

const JSONParse = (value: string): any => {
  let result
  try {
    result = JSON.parse(value)
  } catch (_err) {
    result = undefined
  }
  return result
}

export { JSONParse, JSONStringify }
