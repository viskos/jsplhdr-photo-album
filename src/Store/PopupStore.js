import { makeAutoObservable } from 'mobx'
import PhotosStore from './PhotosStore'

class PopupStore {
    isShow = false
    currentId = null
    currentPhoto = ''
    get album() {
        return PhotosStore.photos
    }

    constructor() {
        makeAutoObservable(this)
    }

    showPopup(idx) {
        this.isShow = true
        this.currentId = idx
        this.renderPhoto()
    }

    popupNavigation(button) {
        switch (button) {
            case 'next':
                this.currentId = this.currentId + 1
                if (this.currentId > this.album.length - 1) {
                    this.currentId = 0
                }
                this.renderPhoto()
                break
            case 'prev':
                this.currentId = this.currentId - 1
                if (this.currentId < 0) {
                    this.currentId = this.album.length - 1
                }
                this.renderPhoto()
                break
            default:
                return null
        }
    }

    closePopup() {
        this.isShow = false
        this.currentPhoto = ''
    }

    renderPhoto() {
        const photo = this.album.filter((e, i) => i === this.currentId)
        this.currentPhoto = photo[0].url
    }
}

export default new PopupStore()
