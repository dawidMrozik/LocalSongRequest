import { storiesOf } from '@storybook/vue'

import QueueSong from './QueueSong.vue'

storiesOf('QueueSong', module).add('Song', () => ({
  components: { QueueSong },
  template: '<QueueSong title="twenty one pilots - chlorine" timeLeft="13:47"/>'
}))
