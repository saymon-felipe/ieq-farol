<template>
    <div class="map-component-container">
        <h1 class="section-title">Venha nos visitar!</h1>
        <p class="adress">Rua João Mendonça 50, Capão da Imbuia - Curitiba</p>
        <div class="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.425384616571!2d-49.20334778548143!3d-25.443252221118158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcef8a11fc4069%3A0xc9669215f05ee853!2sR.%20Jo%C3%A3o%20Mendon%C3%A7a%2C%2050%20-%20Cap%C3%A3o%20da%20Imbuia%2C%20Curitiba%20-%20PR%2C%2082810-650!5e0!3m2!1spt-BR!2sbr!4v1677118677094!5m2!1spt-BR!2sbr" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>
<script>
export default {
    name: "mapComponent"
}
</script>
<style scoped>
.map-component-container {
    padding: 1rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.adress {
    font-size: calc(1rem + 1vw);
    font-weight: 600;
}

.map-container {
    border-radius: 1rem;
    overflow: hidden;
    max-width: 2200px;
    width: 95%;
    margin: 1rem auto;
    height: 60vh;
    max-height: 900px;
}
    .map-container iframe {
        width: 100%;
        height: 100%;
    }
</style>