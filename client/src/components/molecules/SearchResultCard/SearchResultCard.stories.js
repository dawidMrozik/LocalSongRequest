import { storiesOf } from "@storybook/vue";

import SearchResultCard from "./SearchResultCard.vue";

storiesOf("Card", module).add("Search result", () => ({
  components: { SearchResultCard },
  template: `<SearchResultCard thumbnail="https://i.ytimg.com/vi/eJnQBXmZ7Ek/mqdefault.jpg" title="twenty one pilots - Chlorine (Official Video)" desc='official video for "Chlorine" from the album "TRENCH" - available now on Fueled By Ramen. http://top.lnk.to/trench Banditø Tour get tickets at ...' videoId="eJnQBXmZ7Ek" />`
}));
