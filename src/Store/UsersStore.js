import {makeAutoObservable} from 'mobx'
import {api} from '../api'

class UsersStore {
    loading = false
    error = false
    users = []

    constructor() {
        makeAutoObservable(this)
    }

    getUsers() {
        this.loading = true
        api.get(`users`)
            .then((res) => (this.users = res.data))
            .then(done => this.loading = false)
            .catch(e => {
                console.error(e)
                this.error = true
            })
    }

    clearUsers() {
        this.users = []
    }
}

export default new UsersStore()
