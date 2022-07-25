import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    searchKeyword: '',
    searchResult: [],
    searchLoading: false,
  }),
  actions: {
    searchMusic() {
      return new Promise((resolve, reject) => {
        const endpoint = `https://itunes.apple.com/search?term=${this.searchKeyword}&media=music`

        this.searchLoading = true

        axios.get(endpoint).then(result => {
          this.searchLoading = false
          this.searchResult = result.data.results
          console.log(result)

          resolve(result)
        }).catch(err => {
          this.searchLoading = false
          console.log(err)

          reject(err)
        })
      })
    }
  }
})