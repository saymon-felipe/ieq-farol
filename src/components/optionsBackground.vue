<template>
    <div class="options-background d-flex justify-content-center flex-wrap">
        <slot />
    </div>
</template>
<script>
export default {
    name: "optionsBackground"
}
</script>
<style scoped>
.options-background {
    padding: 3rem 1rem;
    background-image: url('../assets/img/background.png');
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
}

a {
    color: white;
    text-decoration: none;
}
</style>