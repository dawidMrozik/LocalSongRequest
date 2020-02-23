import { storiesOf } from "@storybook/vue";

import Thumbnail from "./Thumbnail.vue";

storiesOf("Thumbnail", module).add("Search result", () => ({
  components: { Thumbnail },
  template:
    '<Thumbnail src="https://i.ytimg.com/vi/eJnQBXmZ7Ek/mqdefault.jpg" alt="twenty one pilots - Chlorine (Official Video)" />'
}));
