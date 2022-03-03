<template>
  <div class="bg-primary min-h-screen scroll-smooth">
  <TheMenu />
  <HomeLandingSlider />
  <HomeRecentProjects />
  <HomeAboutSection /> 
  <HomeNewsRecognition />
  <HomeOurServices />
  <HomeNewsletterSocialMedia />
  <TheFooterLocation />
  </div>
</template>

<script>
import HomeRecentProjects from "../components/HomeRecentProjects.vue";
import HomeNewsRecognition from "../components/HomeNewsRecognition.vue";
import HomeOurServices from "../components/HomeOurServices.vue";
import HomeNewsletterSocialMedia from "../components/HomeNewsletterSocialMedia.vue";
import TheFooterLocation from "../components/TheFooterLocation.vue";
export default {
    name: "IndexPage",
    components: { HomeRecentProjects, HomeNewsRecognition, HomeOurServices, HomeNewsletterSocialMedia, TheFooterLocation }
}
</script>
