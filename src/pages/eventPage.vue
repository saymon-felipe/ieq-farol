<template>
    <div class="container event-page">
        <div class="principal">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>IEQ Farol</h1>
                <h3>Igreja do evangelho quadrangular</h3>
            </div>
        </div>
        <optionsBackground>
            <selectCard v-for="(event, index) in events" v-bind:key="index" :title="event.event_name" :subtitle="event.event_description" :background="event.event_image" />
        </optionsBackground>
        <footerComponent />
    </div>
</template>
<script>
import selectCard from '../components/selectCard.vue';
import headerComponent from "../components/headerComponent.vue";
import optionsBackground from "../components/optionsBackground.vue";
import footerComponent from "../components/footerComponent.vue";

export default {
    name: "eventPage",
    data() {
        return {
            events: [
                {
                    event_id: 1,
                    event_name: "Cultos temáticos",
                    event_description: "Todos os domingos às 19:30H",
                    event_image: "https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/cultos-tematicos.png"
                },
                {
                    event_id: 2,
                    event_name: "Campanhas",
                    event_description: "Todas as quintas-feiras às 20:00H",
                    event_image: "https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/campanha.png"
                },
                {
                    event_id: 3,
                    event_name: "Oração e palavra",
                    event_description: "Todas as terças-feiras às 20:00H",
                    event_image: "https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/bible.jpg"
                }
            ]
        }
    },
    components: {
        headerComponent,
        optionsBackground,
        selectCard,
        footerComponent
    }
}
</script>
<style scoped>
.principal {
    height: 50vh;
    background: url("../assets/img/ieq-farol.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
}

    .principal h1, .principal h3 {
        z-index: 2;
        position: relative;
    }

    .principal::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(transparent, black);
        z-index: 1;
        transition: all 0.4s;
    }

.principal-text {
    margin: 4rem 0 0 calc(1rem + 5vw);
}
</style>