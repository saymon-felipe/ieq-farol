<template>
    <div class="leadership-page container">
        <div class="principal">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>PASTORES</h1>
                <h3>Conheça as pessoas que estão à frente do ministério</h3>
            </div>
        </div>
        <optionsBackground>       
            <div class="p-4">
                <div class="text">
                    <h3 class="section-title mb-4">PASTORES TITULARES</h3>
                </div>
                <div class="leadership-container row">
                    <div class="col-md-4 col-sm-12 d-flex align-items-center">
                        <img src="../assets/img/pastores.png" class="img-fluid" />
                    </div>
                    <div class="col-md-8 col-sm-12 text-container d-flex justify-content-center flex-column">
                        <h2 class="title">PRA. RAQUEL & PR. TONY</h2>
                        <p>Casados há 21 anos e pais de três filhos, Raquel Vitória e Tony Cezar possuem uma longa caminhada juntos dentro do ministério Quadrangular. Atualmente são pastores titulares da Igreja do Evangelho Quadrangular do Farol e estão à frente dos mais diversos desafios para trazer as boas novas do evangelho.</p>
                    </div>
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

export default {
    name: "leadershipPage",
    components: {
        headerComponent,
        optionsBackground,
        footerComponent
    }
}
</script>
<style scoped>
@media (max-width: 767px) {
    .text-container {
        margin-top: 3rem;
        text-align: center;
    }
}
</style>