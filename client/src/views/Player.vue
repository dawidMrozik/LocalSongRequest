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
    <InfoMessage v-else
      >There is no songs in queue. Don't wait, use that button on the bottom
      😍</InfoMessage
    >
    <queue white class="player-queue" />
    <FloatingButton type="add" />
  </div>
</template>

<script>
import Queue from '../components/molecules/Queue/Queue'
import FloatingButton from '../components/atoms/FloatingButton/FloatingButton'
import InfoMessage from '../components/atoms/InfoMessage/InfoMessage'
import store from '../store'

export default {
  components: {
    Queue,
    FloatingButton,
    InfoMessage
  },
  data: function() {
    return {
      time_update_interval: 0
    }
  },
  created: function() {
    this.$socket.client.emit('joinPlayer')
  },
  destroyed: function() {
    clearInterval(this.time_update_interval)
  },
  sockets: {
    playing() {
      this.player.playVideo()
      // Clear any old interval.
      clearInterval(this.time_update_interval)

      const _this = this

      this.time_update_interval = setInterval(function() {
        _this.player.getCurrentTime().then(current => {
          _this.player.getDuration().then(duration => {
            const timer = {
              current: _this.formatTime(current),
              duration: _this.formatTime(duration),
              progress: (current / duration) * 100
            }

            store.commit('updateTimer', timer)
            _this.$socket.client.emit('updateTimer', timer)
          })
        })
      }, 1000)
    },
    pause(time) {
      this.player.seekTo(time)
      this.player.pauseVideo()
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
    playing() {
      this.$refs.youtube.player.getCurrentTime().then(time => {
        this.$socket.client.emit('playing', time)
      })
    },
    ended() {
      this.$socket.client.emit('nextSong')
    },
    paused() {
      this.$refs.youtube.player.getCurrentTime().then(time => {
        this.$socket.client.emit('pause', time)
      })
    },
    formatTime(time) {
      time = Math.round(time)

      var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60

      seconds = seconds < 10 ? '0' + seconds : seconds

      return minutes + ':' + seconds
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
    },
    timer() {
      return store.state.timer
    }
  }
}
</script>

<style lang="scss" scoped>
.player-container {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 1024px) {
  .player-container {
    width: 80vw;
    padding: 2.5vh 10vw;
  }
}

iframe {
  width: 90%;
  max-width: 650px;
}

.player-queue {
  margin: 20px;
}
</style>
