import neverEver from "../assets/images/neverEver.png";
import neverEver2 from "../assets/images/neverEver@2x.png";
import neverEver3 from "../assets/images/neverEver@3x.png";
import mostLikely from "../assets/images/mostLikely.png";
import mostLikely2 from "../assets/images/mostLikely@2x.png";
import mostLikely3 from "../assets/images/mostLikely@3x.png";
import timeZo from "../assets/images/timeZo.png";
import timeZo2 from "../assets/images/timeZo@2x.png";
import timeZo3 from "../assets/images/timeZo@3x.png";
import ToD from "../assets/images/ToD.png";
import ToD2 from "../assets/images/ToD@2x.png";
import ToD3 from "../assets/images/ToD@3x.png";
// import truthOrDare from "../assets/images/truthOrDare.png";
// import truthOrDare2 from "../assets/images/truthOrDare@2x.png";
// import truthOrDare3 from "../assets/images/truthOrDare@3x.png";
// import wouldYouRather from "../assets/images/wouldYouRather.png";

import img_1 from "../assets/images/background_1.webp";
import img_2 from "../assets/images/background_2.webp";
import img_3 from "../assets/images/background_3.webp";
import img_4 from "../assets/images/background_4.webp";

export const data = [
  {
    logo: { x1: neverEver, x2: neverEver2, x3: neverEver3 },
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
      googlePlay:
        "https://play.google.com/store/apps/details?id=dev.partygames.neverever",
      appStore: "https://apps.apple.com/app/never-ever-party-game/id1631145256",
    },
    background: img_1,
  },
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
      googlePlay: "",
      appStore: "",
    },
    background: img_2,
  },
  {
    logo: { x1: timeZo, x2: timeZo2, x3: timeZo3 },
    title: "TimeZo",
    description: {
      text: [
        "TimeZo ",
        "is the most ",
        "convenient ",
        "and ",
        "fastest ",
        "way to keep your head clean.",
      ],
      isBoldFirst: true,
    },
    link: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=dev.metamodern.timezo",
      appStore: "https://apps.apple.com/app/id1621716913",
    },
    background: img_3,
  },
  {
    logo: { x1: ToD, x2: ToD2, x3: ToD3 },
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
      appStore:
        "https://apps.apple.com/app/truth-or-dare-dirty-dares/id1591624348",
    },
    background: img_4,
  },
  // {
  //   logo: wouldYouRather,
  //   title: "Would you rather",
  //   description: {
  //     text: [
  //       "Would you rather ",
  //       "have eyes the size of a baseball or the size of a pea? That's a silly question. Don't get lost in your thoughts just yet. For starters, try creating a ",
  //       "cosy environment, ",
  //       "start the game and then ",
  //       "make the right decision! ",
  //       "Let's go!",
  //     ],
  //     isBoldFirst: true,
  //   },
  //   link: {
  //     googlePlay: null,
  //     appStore: null,
  //   },
  //   background: img_4,
  // },
];
