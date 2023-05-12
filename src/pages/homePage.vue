<template>
    <div class="container d-flex flex-column" id="home-page">
        <div class="principal hero">
            <headerComponent />
            <homeHero />
        </div>
        <homeOptions />
        <footerComponent />
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import homeHero from "../components/homeHero.vue";
import homeOptions from "../components/homeOptions.vue";
import footerComponent from "../components/footerComponent.vue";

export default {
    name: "homePage",
    components: {
        headerComponent,
        homeHero,
        homeOptions,
        footerComponent
    }
}
</script>
<style scoped>
#home-page {
    min-height: 100vh;
}

.principal {
    min-height: 80vh;
    flex: 1;
    background: url("../assets/img/pray-1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>