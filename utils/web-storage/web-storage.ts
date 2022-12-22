const isBrowser = () => typeof window !== 'undefined'

class WebStorage {
    private readonly _local: Storage | undefined
    private readonly _session: Storage | undefined

    constructor() {
        this._local = isBrowser() ? window.localStorage : undefined
        this._session = isBrowser() ? window.sessionStorage : undefined
    }

    setLocalStorage = (key: string, data: string) => {
        if (!key || !this._local) return

        this._local.setItem(key, data)
    }

    getLocalStorage = <Return>(key: string): Return | undefined => {
        if (!key || !this._local) return

        const item = this._local.getItem(key)

        if (!item) return

        return JSON.parse(item)
    }

    removeLocalStorage = (key: string) => {
        if (!key) return

        this._local?.removeItem(key)
    }

    setSessionStorage = (key: string, data: string) => {
        if (!key || !this._session) return

        this._session.setItem(key, data)
    }

    getSessionStorage = <Return>(key: string): Return | undefined => {
        if (!key || !this._session) return

        const item = this._session.getItem(key)

        if (!item) return

        return JSON.parse(item)
    }

    removeSessionStorage = (key: string) => {
        if (!key) return

        this._session?.removeItem(key)
    }
}

const webStorage = new WebStorage()

export { webStorage }
