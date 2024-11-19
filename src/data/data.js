import mostLikely from "../assets/images/mostLikely.png";
import mostLikely2 from "../assets/images/mostLikely@2x.png";
import mostLikely3 from "../assets/images/mostLikely@3x.png";

import { Urls } from "../constants/urls";

import img_2 from "../assets/images/background_2.webp";

export const data = [
  {
    logo: { x1: mostLikely, x2: mostLikely2, x3: mostLikely3 },
    title: "Most likely to",
    description: {
      text: [
        "Who is most likely to shine ",
        "in our game right now? Why, it's your ",
        "co-workers",
        ", childhood friends and ",
        "acquaintances ",
        "halfway across the world! They're all having ",
        "a good laugh ",
        "pointing fingers at each other and getting that ",
        "hit of dopamine.",
      ],
      isBoldFirst: true,
    },
    link: {
      googlePlay: Urls.MostLikely.GoogleStoreUrl,
      appStore: Urls.MostLikely.AppleStoreUrl,
    },
    background: img_2,
  },
];
