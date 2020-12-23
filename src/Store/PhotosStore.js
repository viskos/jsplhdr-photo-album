import {makeAutoObservable} from 'mobx'
import {api} from '../api'

class PhotosStore {
    photos = []
    loading = false
    error = false

    constructor() {
        makeAutoObservable(this)
    }

    fetchPhotos(id) {
        this.loading = true
        api.get(`photos?albumId=${id}`)
            .then((res) => (this.photos = res.data))
            .then((done) => (this.loading = false))
            .catch(e => {
                console.error(e)
                this.error = true
            })

    }

    clearPhotos() {
        this.photos = []
    }
}

export default new PhotosStore()
