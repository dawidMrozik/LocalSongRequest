import { storiesOf } from '@storybook/vue'

import SideMenu from './SideMenu.vue'

storiesOf('SideMenu', module).add('Side menu', () => ({
  components: { SideMenu },
  template: '<SideMenu isOpen="true" />'
}))
