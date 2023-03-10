import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import MicrophoneView from "../views/MicrophoneView.vue";
import VideoView from "../views/VideoView.vue";
import BellView from "../views/BellView.vue";
import UserView from "../views/UserView.vue";
import UserVisit from "../views/UserVisit.vue";
import EditProfile from "../views/EditProfile.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/microphone",
    name: "Microphone",
    component: MicrophoneView,
  },
  {
    path: "/video",
    name: "Video",
    component: VideoView,
  },
  {
    path: "/bell",
    name: "Bell",
    component: BellView,
  },
  {
    path: "/user",
    name: "User",
    component: UserView,
  },
  {
    path: "/edit_profile",
    name: "Edit_profile",
    component: EditProfile,
  },
  {
    path: "/uservisit",
    name: "User_visit",
    component: UserVisit,
  },
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/forgot_password",
    name: "Forgot_password",
    component: ForgotPassword,
  },
  {
    //make a 404
    path: "/:catchAll(.*)",
    name: "Error",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
