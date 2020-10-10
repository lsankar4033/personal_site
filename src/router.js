import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Writing from "./views/Writing.vue";
import WritingCrypto from "./views/WritingCrypto.vue";

import ChangingOneThingAtATime from "./views/Writing/ChangingOneThingAtATime.vue";
import OptimizersIdealistsAndAdventurers from "./views/Writing/OptimizersIdealistsAndAdventurers.vue";
import ExploringCodeInSpaceAndTime from "./views/Writing/ExploringCodeInSpaceAndTime.vue";
import ReconnectingWithNietzsche from "./views/Writing/ReconnectingWithNietzsche.vue";
import ShardsAsDataAvailabilityLayers from "./views/Writing/ShardsAsDataAvailabilityLayers.vue";
import FastPipesSmartVMs from "./views/Writing/FastPipesSmartVMs.vue";

import Post from "./views/Post.vue";

import hwga from "./posts/1.js";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "about",
      component: About
    },
    {
      path: "/writing",
      name: "writing",
      component: Writing
    },
    {
      path: "/writing-crypto",
      name: "writing-crypto",
      component: WritingCrypto
    },
    {
      path: "/here-we-go-again",
      component: Post,
      props: { body: hwga }
    },
    {
      path: "/changing-one-thing-at-a-time",
      name: "changing-one-thing-at-a-time",
      component: ChangingOneThingAtATime
    },
    {
      path: "/optimizers-idealists-and-adventurers",
      name: "optimizers-idealists-and-adventurers",
      component: OptimizersIdealistsAndAdventurers
    },
    {
      path: "/exploring-code-in-space-and-time",
      name: "exploring-code-in-space-and-time",
      component: ExploringCodeInSpaceAndTime
    },
    {
      path: "/reconnecting-with-nietzsche",
      name: "reconnecting-with-nietzsche",
      component: ReconnectingWithNietzsche
    },
    {
      path: "/shards-as-data-availability-layers",
      name: "shards-as-data-availability-layers",
      component: ShardsAsDataAvailabilityLayers
    },
    {
      path: "/fast-pipes-smart-vms",
      name: "fast-pipes-smart-vms",
      component: FastPipesSmartVMs
    },

    // TODO: remove
    {
      path: "/test-post",
      name: "test-post",
      component: Post,
      props: { body: "<div><p>line 1</p><p>line 2</p></div>" }
    }
  ]
});
