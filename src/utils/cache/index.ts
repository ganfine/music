import { JSONStringify, JSONParse } from '../jsonStr'

class LocalCache {
  setLocalCache(key: string, value: any) {
    window.localStorage.setItem(key, JSONStringify(value))
  }

  getLocalCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSONParse(value)
    }
  }

  deleteLocalCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearLocalCache() {
    window.localStorage.clear()
  }
}

class SessionCache {
  setSessionCache(key: string, value: any) {
    window.sessionStorage.setItem(key, JSONStringify(value))
  }

  getSessionCache(key: string) {
    const value = window.sessionStorage.getItem(key)
    if (value) {
      return JSONParse(value)
    }
  }

  deleteSessionCache(key: string) {
    window.sessionStorage.removeItem(key)
  }

  clearSessionCache() {
    window.sessionStorage.clear()
  }
}

const localCache = new LocalCache()
const sessionCache = new SessionCache()

export { localCache, sessionCache }
