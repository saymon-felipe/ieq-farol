<template>
    <div class="location-page container">
        <div class="principal">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>VISITE-NOS</h1>
                <h3>Faça uma visita e adore a Deus junto conosco</h3>
            </div>
        </div>
        <optionsBackground>
            <div class="d-flex flex-column justify-content-center w-100 align-items-start">
                <div class="text">
                    <h3 class="section-title mb-4">COMO CHEGAR</h3>
                </div>
                <div class="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.425384616571!2d-49.20334778548143!3d-25.443252221118158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcef8a11fc4069%3A0xc9669215f05ee853!2sR.%20Jo%C3%A3o%20Mendon%C3%A7a%2C%2050%20-%20Cap%C3%A3o%20da%20Imbuia%2C%20Curitiba%20-%20PR%2C%2082810-650!5e0!3m2!1spt-BR!2sbr!4v1677118677094!5m2!1spt-BR!2sbr" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </optionsBackground>
        <footerComponent />
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import optionsBackground from "../components/optionsBackground.vue";
import footerComponent from "../components/footerComponent.vue";

export default {
    name: "locationPage",
    components: {
        headerComponent,
        optionsBackground,
        footerComponent
    }
}
</script>
<style scoped>
.map-container {
    width: 100%;
    height: 50vh;
}

    .map-container iframe {
        width: 100%;
        height: 100%;
    }
</style>