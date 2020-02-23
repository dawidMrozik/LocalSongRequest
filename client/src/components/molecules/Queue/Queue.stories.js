import { storiesOf } from '@storybook/vue'

import Queue from './Queue.vue'

storiesOf('Queue', module).add('Song', () => ({
  components: { Queue },
  data: function() {
    return {
      queue: [
        { id: 1, title: 'twenty one pilots - chlorine', timeLeft: '2:47' },
        { id: 2, title: 'twenty one pilots - stressed out', timeLeft: '5:23' },
        { id: 3, title: 'Bones UK - Pretty Face', timeLeft: '8:51' }
      ]
    }
  },
  template: '<Queue :queue="queue"/>'
}))
