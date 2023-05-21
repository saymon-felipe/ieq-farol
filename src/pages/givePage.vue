<template>
    <div class="give-page container">
        <div class="principal">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>CONTRIBUA</h1>
                <h3>Seja um investidor da obra de Deus</h3>
            </div>
        </div>
        <optionsBackground>
            <div class="gmj-events d-flex flex-wrap flex-column">
                <h3 class="section-title mb-4 ml-2">INFORMAÇÕES</h3>
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <div class="give-container p-4 d-flex align-items-center justify-content-around flex-wrap">
                            <div class="nu-bank mr-4">
                                <img src="../assets/img/nubank-logo.png">
                                <div class="my-3">
                                    <p>Banco 260</p>
                                    <p>Agência: 0001</p>
                                    <p>Conta: 51093851-2</p>
                                </div>
                                <button type="button" v-on:click="copyPIXKey()" id="copy-pix" class="customized-button button-black mt-4">Chave PIX</button>
                            </div>
                            <div class="pix ml-4 d-flex flex-column align-items-center justify-content-start">
                                <img src="../assets/img/pix-logo.png" class="mb-4">
                                <img src="../assets/img/qr-code-pix.png">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 d-flex align-items-center">
                        <div class="text-left phrase">
                            <p>Lembrem-se: aquele que semeia pouco também colherá pouco, e aquele que semeia com fartura também colherá fartamente. Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.</p>
                            <p><strong>2 Coríntios 9:6-7</strong></p>
                        </div>
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
import $ from 'jquery';

export default {
    name: "givePage",
    methods: {
        copyPIXKey: function () {
            let button = $("#copy-pix");
            button.html("Copiado!");
            setTimeout(() => {
                        button.html("Chave PIX");
                    }, 3000)
            let pixKey = "b1c38660-5a9d-4b1d-a48e-8b4134a8d88c";
            if (navigator.clipboard) {
                navigator.clipboard.writeText(pixKey);
            }
        }
    },
    components: {
        headerComponent,
        optionsBackground,
        footerComponent
    }
}
</script>
<style scoped>
.give-page {
    text-align: left;
}
.nu-bank img {
    width: 100px;
}
.pix img:first-child {
    width: 100px;
}

.pix img:nth-child(2) {
    width: calc(90% - 1rem);
    min-width: 120px;
    max-width: 200px;
}

.give-container {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(3px);
    border-radius: 7px;
    color: black;
    font-weight: 500;
}

.nu-bank p {
    margin-bottom: 3px;
}

.nu-bank button {
    margin: 0;
}

@media (max-width: 992px) {
    .give-container {
        margin-bottom: 3rem;
    }

    .phrase {
        text-align: center !important;
    }
}

@media (max-width: 504px) {
    .give-container {
        justify-content: center !important;
    }

    .nu-bank {
        margin-bottom: 2rem;
        width: 100%;
    }

    .pix {
        align-items: flex-start !important;
    }

    .nu-bank, .pix {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
}
</style>