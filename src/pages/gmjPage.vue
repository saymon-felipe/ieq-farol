<template>
    <div class="gmj-page container">
        <div class="principal" style="background-image: url('https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/thumb.jpg');">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>GMJ</h1>
                <h3>Grupo missionário de jovens</h3>
            </div>
        </div>
        <optionsBackground>       
            <div class="p-4 w-100">
                <div class="text">
                    <h3 class="section-title mb-4">PROGRAMAÇÃO</h3>
                </div>
                <div class="gmj-events d-flex flex-wrap">
                    <selectCard v-for="(event, index) in events" v-bind:key="index" :subtitle2="event.subtitle2" :title="event.title" :subtitle="event.subtitle" :cardAlign="event.cardAlign" :background="event.background" />
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
import selectCard from "../components/selectCard.vue";

export default {
    name: "gmjPage",
    data() {
        return {
            events: [
                {
                    id: 1,
                    title: "CULTO JOVEM",
                    subtitle: "Todo sábado às 19:30H",
                    subtitle2: "GMJ",
                    cardAlign: "left",
                    background: "https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/shows.jpeg"
                },
                {
                    id: 2,
                    title: "EVANGELISMO",
                    subtitle: "Sábado, 27/05/2023 às 15:30H",
                    subtitle2: "GMJ",
                    cardAlign: "left",
                    background: "https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/evangelismo.jpg"
                }
            ]
        }
    },
    components: {
        headerComponent,
        optionsBackground,
        footerComponent,
        selectCard
    }
}
</script>
<style scoped>
</style>