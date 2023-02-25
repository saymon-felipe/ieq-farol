<template>
    <div class="home-container">
        <headerComponent />
        <homeComponent />
        <scheduleComponent />
        <mapComponent />
        <contributeComponent />
        <galleryComponent />
        <aboutComponent />
        <footerComponent />
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import homeComponent from "../components/homeComponent.vue";
import scheduleComponent from "../components/scheduleComponent.vue";
import mapComponent from "../components/mapComponent.vue";
import contributeComponent from "../components/contributeComponent.vue";
import galleryComponent from "../components/galleryComponent.vue";
import aboutComponent from "../components/aboutComponent.vue";
import footerComponent from "../components/footerComponent.vue";

export default {
    name: "homePage",
    components: {
        headerComponent,
        homeComponent,
        scheduleComponent,
        mapComponent,
        contributeComponent,
        galleryComponent,
        aboutComponent,
        footerComponent
    }
}
</script>
<style scoped>
.home-container {
    width: 100vw;
}
</style>