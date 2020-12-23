import {makeAutoObservable} from 'mobx'
import {api} from '../api'

class CoverStore {
    loading = true
    photos = []
    prevPhoto = []
    albumLength = null
    error = false

    constructor() {
        makeAutoObservable(this)
    }

    getPhotos(id, quantity) {
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
        this.prevPhoto.push(previewPhotos)
        if (this.prevPhoto.length === quantity) {
            this.albumLength = this.prevPhoto[0].length
            this.loading = false
        }
    }

    clearPreviews() {
        this.prevPhoto = []
        this.loading = true
    }
}

export default new CoverStore()