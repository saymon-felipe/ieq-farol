<template>
    <div class="gmj-page container">
        <div class="principal" style="background: url('https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/thumb-2.png')">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>GMM</h1>
                <h3>Grupo missionário de mulheres</h3>
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
                    title: "REUNIÃO COM CAFÉ",
                    subtitle: "Uma vez por mês, aos sábados",
                    subtitle2: "GMM",
                    cardAlign: "left",
                    background: "https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/coffe.jpg"
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