import Vue from "vue";
import App from "./App.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./directives/Transform";

import { LayoutPlugin } from "bootstrap-vue";
Vue.use(LayoutPlugin);

// This imports the dropdown and table plugins
import { TablePlugin } from "bootstrap-vue";
Vue.use(TablePlugin);

import { FormInputPlugin } from "bootstrap-vue";
Vue.use(FormInputPlugin);

import { SpinnerPlugin } from "bootstrap-vue";
Vue.use(SpinnerPlugin);

import { NavbarPlugin } from "bootstrap-vue";
Vue.use(NavbarPlugin);

import { ButtonPlugin } from "bootstrap-vue";
Vue.use(ButtonPlugin);

import { ImagePlugin } from "bootstrap-vue";
Vue.use(ImagePlugin);

import { MediaPlugin } from "bootstrap-vue";
Vue.use(MediaPlugin);

import { FormPlugin } from "bootstrap-vue";
Vue.use(FormPlugin);

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
