import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faQuestion,
  faHome,
  faMicrophone,
  faVideo,
  faUser,
  faBell,
  faEye,
  faEyeSlash,
  faThumbsDown,
  faThumbsUp,
  faMagnifyingGlass,
  faXmark,
  faImage,
  faHourglassStart,
  faBorderAll,
  faHand,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faQuestion,
  faHome,
  faMicrophone,
  faVideo,
  faUser,
  faBell,
  faEye,
  faEyeSlash,
  faThumbsUp,
  faThumbsDown,
  faMagnifyingGlass,
  faXmark,
  faImage,
  faHourglassStart,
  faBorderAll,
  faHand,
  faMicrophoneSlash
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
