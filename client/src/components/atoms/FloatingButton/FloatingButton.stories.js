import { storiesOf } from '@storybook/vue'

import FloatingButton from './FloatingButton.vue'

storiesOf('FloatingButton', module)
  .add('add', () => ({
    components: { FloatingButton },
    template: '<FloatingButton />'
  }))
  .add('player', () => ({
    components: { FloatingButton },
    template: '<FloatingButton type="player">player</FloatingButton>'
  }))
