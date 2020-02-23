import { storiesOf } from "@storybook/vue";

import PlaylistAddButton from "./PlaylistAddButton.vue";

storiesOf("Button", module).add("Add to playlist", () => ({
  components: { PlaylistAddButton },
  template: "<PlaylistAddButton />"
}));
