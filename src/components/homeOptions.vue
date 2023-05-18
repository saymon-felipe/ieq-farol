<template>
    <section class="home-options">
        <optionsBackground>
            <div class="default-container animate__animated flex-wrap justify-content-center align-items-center">
                <router-link to="/events">
                    <selectCard title="EVENTOS" subtitle="FIQUE POR DENTRO DOS EVENTOS DA IGREJA" background="https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/event.jpg" />
                </router-link>
                <div class="ministries" v-on:click="openMinistriesContainer()">
                    <selectCard title="MINISTÉRIOS" subtitle="CONHEÇA OS MINISTÉRIOS DA IGREJA" background="https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/ministries.jpg"/>
                </div>
                <router-link to="/location">
                    <selectCard title="COMO CHEGAR" subtitle="SAIBA AONDE NOS VISITAR" background="https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/gps.png" />
                </router-link>
            </div>
            <div class="ministries-container animate__animated flex-wrap justify-content-center align-items-center">
                <i class="fas fa-times-circle" v-on:click="closeMinistriesContainer()"></i>
                <router-link to="/ministries/gmj">
                    <selectCard title="GMJ" subtitle="GRUPO MISSIONÁRIO DE JOVENS" background="https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/youth.jpeg" />
                </router-link>
                <router-link to="/ministries/gmm">
                    <selectCard title="GMM" subtitle="GRUPO MISSIONÁRIO DE MULHERES" background="https://ieq-farol-bucket.s3.sa-east-1.amazonaws.com/womans.jpg" />
                </router-link>
            </div>
        </optionsBackground>
    </section>
</template>
<script>
import selectCard from './selectCard.vue';
import optionsBackground from "./optionsBackground.vue";
import $ from 'jquery';

export default {
    name: "homeOptions",
    methods: {
        openMinistriesContainer: function () {
            this.resetClasses();
            let defaultContainer = $(".default-container");
            let ministriesContainer = $(".ministries-container");
            defaultContainer.addClass("animate__backOutLeft");
            setTimeout(() => {
                defaultContainer.hide();
                ministriesContainer.css("display", "flex");
                setTimeout(() => {
                    ministriesContainer.addClass("animate__backInRight");
                }, 10)
            }, 400);
        },
        closeMinistriesContainer: function () {
            this.resetClasses();
            let defaultContainer = $(".default-container");
            let ministriesContainer = $(".ministries-container");
            ministriesContainer.addClass("animate__backOutRight");
            setTimeout(() => {
                ministriesContainer.hide().css("opacity", 0);
                defaultContainer.show();
                setTimeout(() => {
                    defaultContainer.addClass("animate__backInLeft")
                })
            }, 400)
        },
        resetClasses: function () {
            let defaultContainer = $(".default-container");
            let ministriesContainer = $(".ministries-container");
            defaultContainer.removeClass("animate__backOutLeft").removeClass("animate__backInLeft");
            ministriesContainer.removeClass("animate__backInRight").removeClass("animate__backOutRight");
        }
    },
    components: {
        selectCard,
        optionsBackground
    }
}
</script>
<style scoped>

.default-container {
    display: flex;
}
.ministries-container {
    display: none;
    opacity: 0;
    position: relative;
}

    .ministries-container i {
        font-size: 3rem;
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: -17%;
        display: flex;
        align-items: center;
    }

@media (max-width: 991px) {

    .ministries-container {
        padding-top: 4rem;
    }
    .ministries-container i {
        left: 46%;
        top: -91%;
    }
}
</style>