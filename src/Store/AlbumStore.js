import {makeAutoObservable} from 'mobx'
import {api} from '../api'

class AlbumStore {
    albums = []
    loading = true
    error = false
    quantity = 0

    constructor() {
        makeAutoObservable(this)
    }

    fetchAlbums(id) {
        api.get(`albums?userId=${id}`)
            .then((res) => (this.albums = res.data))
            .then((k) => {
                this.quantity = this.albums.length
                this.loading = false
            })
            .catch(e => {
                console.log(e)
                this.error = true
            })
    }

    clearAlbums() {
        this.loading = true
        this.albums = []
        this.quantity = 0
    }
}

export default new AlbumStore()
