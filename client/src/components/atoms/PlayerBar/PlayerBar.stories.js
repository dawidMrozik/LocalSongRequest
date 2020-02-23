import { storiesOf } from '@storybook/vue'

import PlayerBar from './PlayerBar.vue'

storiesOf('PlayerBar', module).add('Player', () => ({
  components: { PlayerBar },
  template: `<PlayerBar />`
}))
