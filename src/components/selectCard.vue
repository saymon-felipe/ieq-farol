<template>
    <div class="select-card" :style="'background-image: url(' + background + ')'">
        <h4>{{ title }}</h4>
        <h6>{{ subtitle }}</h6>
    </div>
</template>
<script>
export default {
    name: "selectCard",
    props: ["title", "subtitle", "background"]
}
</script>
<style scoped>
.select-card {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 275px;
    height: 144px;
    margin: 10px;
}
</style>