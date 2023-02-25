<template>
    <div class="about-container" id="about-container">
        <h1 class="section-title">Sobre</h1>
        <div class="container informations-container">
            <img src="../assets/img/logo-black.png" class="about-logo">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam consequatur voluptatem velit atque at exercitationem dolorem. Blanditiis, officiis sint eveniet autem magni expedita libero assumenda nulla eum, praesentium, tempore recusandae?</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "aboutComponent"
}
</script>
<style scoped>
.about-container {
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.about-logo {
    width: calc(100px + 10vw);
    max-width: 300px;
}

.informations-container {
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
}

    .informations-container img, .informations-container p {
        margin: 1rem;
    }

    .informations-container p {
        font-size: calc(.5rem + .5vw);
        font-weight: 600;
    }
</style>