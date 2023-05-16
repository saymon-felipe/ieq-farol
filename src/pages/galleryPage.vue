<template>
    <div class="gallery-page container">
        <div class="principal">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>GALERIA</h1>
                <h3>Veja as fotos da nossa igreja</h3>
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
    name: "galleryPage",
    components: {
        headerComponent,
        optionsBackground,
        footerComponent
    }
}
</script>
<style scoped>
</style>