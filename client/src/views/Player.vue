<template>
  <div class="player-container">
    <youtube
      v-if="currentlyPlaying"
      :video-id="currentlyPlaying.id"
      ref="youtube"
      @playing="playing"
      @ended="ended"
      @paused="paused"
      :playerVars="{ autoplay: 1 }"
      fitParent
    ></youtube>
    <queue white class="player-queue" />
  </div>
</template>

<script>
import Queue from '../components/molecules/Queue/Queue'
import store from '@/store'

export default {
  components: {
    Queue
  },
  created: function() {
    this.$socket.client.emit('joinPlayer')
  },
  sockets: {
    playing(time) {
      //   this.$refs.youtube.player.seekTo(time)
      this.player.playVideo()
    },
    pause(time) {
      this.player.seekTo(time)
      this.player.pauseVideo()
    },
    nextSong() {
      store.commit('nextSong')
    },
    userWantsToJoin() {
      this.player.getCurrentTime().then(time => {
        this.player.getPlayerState().then(state => {
          this.$socket.client.emit('sendTime', { time, state })
        })
      })
    },
    syncTime({ time, state }) {
      this.player.seekTo(time).then(() => {
        if (state === 1) {
          this.player.playVideo()
        } else {
          this.player.pauseVideo()
        }
      })
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing(e) {
      this.$refs.youtube.player.getCurrentTime().then(time => {
        this.$socket.client.emit('playing', time)
      })
    },
    ended() {
      store.commit('nextSong')
      this.$socket.client.emit('nextSong')
    },
    paused() {
      this.$refs.youtube.player.getCurrentTime().then(time => {
        this.$socket.client.emit('pause', time)
      })
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    queue() {
      return store.state.queue
    },
    currentlyPlaying() {
      return store.state.currentlyPlaying
    }
  }
}
</script>

<style lang="scss" scoped>
.player-container {
  display: flex;
  flex-direction: column;
}

iframe {
  width: 90%;
  max-width: 650px;
}

.player-queue {
  margin: 20px;
}
</style>
