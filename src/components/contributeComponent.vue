<template>
    <div class="contribute-container" id="contribute-container">
        <h1 class="section-title">Contribua</h1>
        <div class="contribute-inner">
            <div class="bank-informations">
                <img src="../assets/img/nubank-logo.png" class="bank-logo">
                <div class="bank-informations-text">
                    <p>Banco 260</p>
                    <p>Agência: 0001</p>
                    <p>Conta: 51093851-2</p>
                </div>
                <button class="btn btn-dark" v-on:click="copyPixCode()" id="copy-pix-code-button">Chave pix</button>
            </div>
            <div class="pix-qr-code-container">
                <img src="../assets/img/pix-logo.png" class="pix-logo">
                <img src="../assets/img/qr-code-pix.png" class="qr-code">
            </div>
            <div class="biblic-phrase">
                <p>
                    Lembrem-se: aquele que semeia pouco também colherá pouco, e aquele que semeia com fartura também colherá fartamente.
                    Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.
                </p>
                <p>
                    2 Coríntios 9:6-7
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "contributeComponent",
    methods: {
        copyPixCode: function () {
            var randomPixKey = "b1c38660-5a9d-4b1d-a48e-8b4134a8d88c";
            navigator.clipboard.writeText(randomPixKey).then(function () {
                let button = document.getElementById("copy-pix-code-button");
                button.innerHTML = "Copiado!";
                setTimeout(() => {
                    button.innerHTML = "Chave pix";
                }, 1500)

            }, function (err) {
                console.error(err);
            });
        }
    }
}
</script>
<style scoped>

#random-pix-key {
    position: fixed;
    top: -999vh;
}
.contribute-container {
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("../assets/img/contribute-background.jpg");
    height: fit-content;
    min-height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.contribute-inner {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding: 1.7rem;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 2rem auto auto;
    width: 95%;
}

.bank-logo, .pix-logo {
    width: calc(80px + 7vw);
}

.qr-code {
    width: calc(80px + 7vw);
    min-width: 180px;
}

.pix-logo, .bank-logo {
    margin-bottom: 2rem;
}

.bank-informations, .pix-qr-code-container, .biblic-phrase {
    margin: 1rem;
}

.pix-qr-code-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.biblic-phrase {
    text-align: center;
    max-width: 70%;
    margin-top: 1rem;
}

.bank-informations-text p, button, .biblic-phrase p {
    font-size: calc(.9rem + .9vw);
    font-weight: bold;
}

button {
    margin-top: 1rem;
}

.biblic-phrase p:last-child {
    color: var(--blue-low);
    font-size: calc(1.1rem + 1.1vw);
}
</style>