import neverEver from "../assets/svg/neverEver.svg";
import mostLikely from "../assets/svg/mostLikely.svg";
import truthOrDare from "../assets/svg/truthOrDare.svg";
import wouldYouRather from "../assets/svg/wouldYouRather.svg";

import img_1 from "../assets/images/background_1.png";
import img_2 from "../assets/images/background_2.png";
import img_3 from "../assets/images/background_3.png";
import img_4 from "../assets/images/background_4.png";

export const data = [
  {
    logo: neverEver,
    title: "never have i ever",
    description: {
      text: [
        "Never have I ever... ",
        "Stop ",
        "racking your brain ",
        "to complete this statement. Just download our game. It will make even the most boring ",
        "evening unforgettable.",
      ],
      isBoldFirst: true,
    },
    link: {
      googlePlay: "https://www.youtube.com/watch?v=6n3pFFPSlW4",
      appStore: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    background: img_1,
  },
  {
    logo: mostLikely,
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
      googlePlay: null,
      appStore: null,
    },
    background: img_2,
  },
  {
    logo: truthOrDare,
    title: "Truth or dare",
    description: {
      text: [
        "Truth or Dare ",
        "is ",
        "the best ",
        "social ",
        "game ",
        "that has been around for centuries. It was loved by Kings and Emperors, even the Dukes didn't miss out on it. ",
        "Now it's your turn! ",
        "Download the ",
        "Eighth Wonder of the World.",
      ],
      isBoldFirst: true,
    },
    link: {
      googlePlay: null,
      appStore: null,
    },
    background: img_3,
  },
  {
    logo: wouldYouRather,
    title: "Would you rather",
    description: {
      text: [
        "Would you rather ",
        "have eyes the size of a baseball or the size of a pea? That's a silly question. Don't get lost in your thoughts just yet. For starters, try creating a ",
        "cosy environment, ",
        "start the game and then ",
        "make the right decision! ",
        "Let's go!",
      ],
      isBoldFirst: true,
    },
    link: {
      googlePlay: null,
      appStore: null,
    },
    background: img_4,
  },
];
