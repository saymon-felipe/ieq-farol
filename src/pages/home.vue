<template>
    <div class="home-container">
        <headerComponent />
        <homeComponent />
        <scheduleComponent />
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import homeComponent from "../components/homeComponent.vue";
import scheduleComponent from "../components/scheduleComponent.vue";

export default {
    name: "homePage",
    components: {
        headerComponent,
        homeComponent,
        scheduleComponent
    }
}
</script>
<style scoped>
</style>