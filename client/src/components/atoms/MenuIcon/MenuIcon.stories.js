import { storiesOf } from '@storybook/vue'

import MenuIcon from './MenuIcon.vue'

storiesOf('MenuIcon', module).add('Hamburger icon', () => ({
  components: { MenuIcon },
  template: '<MenuIcon />'
}))
