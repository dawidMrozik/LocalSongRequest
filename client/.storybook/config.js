import { configure } from '@storybook/vue'
import '!style-loader!css-loader!sass-loader!../src/globals.scss'

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
