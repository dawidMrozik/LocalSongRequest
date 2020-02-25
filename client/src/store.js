import Vue from 'vue'
import Vuex from 'vuex'
import yt from './axios/yt'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSideMenuOpen: false,
    room: null,
    queue: [],
    searchResults: [],
    currentlyPlaying: null
  },
  mutations: {
    toggleSideMenu: function(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen
    },
    joinRoom: function(state, room) {
      state.room = room
    },
    search: function(state, searchResults) {
      state.searchResults = searchResults
    },
    getQueue: function(state, queue) {
      state.queue = queue
      state.currentlyPlaying = state.queue[0]
    },
    newSong: function(state, song) {
      state.queue.push(song)
      if (state.queue.length === 1) state.currentlyPlaying = song
    },
    nextSong: function(state) {
      state.queue.shift()
      state.currentlyPlaying = state.queue[0]
    }
  },
  actions: {
    async fetchSong({ commit }, song) {
      const { data } = await yt.get('/videos', {
        params: {
          part: 'contentDetails,snippet',
          id: song
        }
      })

      const songInfo = data.items[0]

      const fetchedSong = {
        id: song,
        title: songInfo.snippet.title,
        duration: songInfo.contentDetails.duration
      }

      this._vm.$socket.client.emit('addToQueue', fetchedSong)
    }
  }
})
