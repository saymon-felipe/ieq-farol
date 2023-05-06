<template>
    <section class="home-options d-flex justify-content-center">
        <selectCard title="EVENTOS" subtitle="FIQUE POR DENTRO DOS EVENTOS DA IGREJA" background="https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/event.jpg" />
        <selectCard title="MINISTÉRIOS" subtitle="CONHEÇA OS MINISTÉRIOS DA IGREJA" background="https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/ministries.jpg" />
        <selectCard title="COMO CHEGAR" subtitle="SAIBA AONDE NOS VISITAR" background="https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/gps.png" />
    </section>
</template>
<script>
import selectCard from './selectCard.vue';

export default {
    name: "homeOptions",
    components: {
        selectCard
    }
}
</script>
<style scoped>
</style>