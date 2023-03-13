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
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faQuestion,
  faHome,
  faMicrophone,
  faVideo,
  faUser,
  faBell,
  faEye,
  faEyeSlash
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
