<template>
    <section class="home-hero d-flex align-items-center justify-content-center flex-column">
        <div class="text-container d-flex align-items-center justify-content-center flex-column">
            <h1>IEQ FAROL</h1>
            <p>NOSSA FAMÍLIA</p>
        </div>
        <a href="#options" class="customized-button button-white">VEJA MAIS</a>
    </section>
</template>
<script>
export default {
    name: "homeHero"
}
</script>
<style scoped>
.home-hero {
    flex: 1;
    position: relative;
    z-index: 4;
}

.text-container {
    margin: 5rem 0;
}

.text-container h1 {
    font-size: calc(3vw + 2rem);
    font-weight: 400;
}

.text-container p {
    font-size: calc(.5vw + .5rem);
    font-weight: 400;
}
</style>