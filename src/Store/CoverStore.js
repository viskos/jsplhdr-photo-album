import {makeAutoObservable} from 'mobx'
import {api} from '../api'

class CoverStore {
    loading = true
    photos = []
    prevPhotos = []
    albumLength = null
    error = false

    constructor() {
        makeAutoObservable(this)
    }

    fetchPhotos(id, quantity) {
        api.get(`photos`)
            .then(res => this.photos = res.data)
            .then(done => this.getAlbumPreviews(id, quantity))
            .catch(e => {
                console.log(e)
                this.error = true
            })
    }

    getAlbumPreviews(id, quantity) {
        const previewPhotos = this.photos.filter(e => e.albumId === id)
        this.prevPhotos.push(previewPhotos)
        if (this.prevPhotos.length === quantity) {
            this.albumLength = this.prevPhotos[0].length
            this.loading = false
        }
    }

    clearPreviews() {
        this.prevPhotos = []
        this.loading = true
    }
}

export default new CoverStore()