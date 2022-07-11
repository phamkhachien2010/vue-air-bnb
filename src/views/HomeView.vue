<template>
  <div id="wrapper">
    <the-banner />

    <the-categories />

    <the-places />

    <the-review />

    <the-plan />

    <the-blog />

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import TheCategories from "@/components/TheCategories.vue";
import ThePlaces from "@/components/ThePlaces.vue";
import TheReview from "@/components/TheReview.vue";
import ThePlan from "@/components/ThePlan.vue";
import TheBlog from "@/components/TheBlog.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    TheBanner,
    TheCategories,
    ThePlaces,
    TheReview,
    ThePlan,
    TheBlog,
  },
};
</script>
