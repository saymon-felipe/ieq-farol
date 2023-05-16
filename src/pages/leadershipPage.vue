<template>
    <div class="leadership-page container">
        <div class="principal">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>PASTORES</h1>
                <h3>Conheça as pessoas que estão à frente do ministério</h3>
            </div>
        </div>
        <optionsBackground>            
        </optionsBackground>
        <footerComponent />
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import optionsBackground from "../components/optionsBackground.vue";
import footerComponent from "../components/footerComponent.vue";

export default {
    name: "leadershipPage",
    components: {
        headerComponent,
        optionsBackground,
        footerComponent
    }
}
</script>
<style scoped>
</style>