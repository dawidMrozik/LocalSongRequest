import { storiesOf } from '@storybook/vue'

import CurrentPlayingSong from './CurrentPlayingSong.vue'

storiesOf('CurrentPlayingSong', module).add('Current song', () => ({
  components: { CurrentPlayingSong },
  template: '<CurrentPlayingSong />'
}))
