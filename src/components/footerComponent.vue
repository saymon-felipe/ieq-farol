<template>
    <footer>
        <div class="container footer-container">
            <img src="../assets/img/logo-white.png" class="logo-footer">
            <div class="footer-informations">
                <div class="information-group">
                    <h3>ENTRE EM CONTATO</h3>
                    <hr>
                    <a href="https://wa.me/5541984093742?text=Olá%20estou%20entrando%20em%20contato%20através%20do%20site%20da%20igreja" target="_blank">41 9 8409-3742</a>
                    <a href="mailto:ieqfarolctba2023@gmail.com">ieqfarolctba2023@gmail.com</a>
                </div>
                <div class="information-group">
                    <h3>REDES SOCIAIS</h3>
                    <hr>
                    <a href="" target="_blank">Facebook</a>
                    <a href="" target="_blank">Instagram</a>
                    <a href="" target="_blank">Youtube</a>
                </div>
                <div class="information-group">
                    <h3>ENDEREÇO</h3>
                    <hr>
                    <p>Rua João Mendonça 50, Capão da Imbuia - Curitiba</p>
                    <a 
                        href="https://www.google.com.br/maps/place/R.+Jo%C3%A3o+Mendon%C3%A7a,+50+-+Cap%C3%A3o+da+Imbuia,+Curitiba+-+PR,+82810-650/@-25.4427823,-49.2046308,17z/data=!3m1!4b1!4m5!3m4!1s0x94dcef8a11fc4069:0xc9669215f05ee853!8m2!3d-25.4427872!4d-49.2024421"
                        target="_blank"
                        class="btn btn-light mt-4">
                        Ver no mapa
                    </a>
                </div>
            </div>
            <p class="page-signature">© 2023 IEQ Farol. Todos os direitos reservados</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: "footerComponent"
}
</script>
<style scoped>
footer {
    background: black;
    padding: 3rem 1rem 1rem;
}
.logo-footer {
    width: calc(80px + 8vw);
    max-width: 200px;
}

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.footer-informations {
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
}

.information-group {
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem;
}

    .information-group h3 {
        margin: 0;
    }

    .information-group hr {
        background-color: white;
        width: 50%;
        height: 2px;
    }

    .information-group a:not(.btn), .information-group p {
        color: white;
        font-size: calc(.5rem + .5vw);
        font-weight: 600;
        margin: 5px 0;
        text-decoration: none;
    }

        .information-group a:not(.btn):hover {
            color: white;
            text-decoration: underline;
        }

    .information-group h3 {
        font-size: calc(.7rem + .7vw);
        font-weight: 700;
    }

.page-signature {
    color: white;
    font-size: calc(.4rem + .4vw);
}

@media (min-width: 2309px) {
    .footer-informations {
        flex-wrap: nowrap;
    }
}

@media (max-width: 430px) {
    .information-group {
        text-align: center;
    }
    .information-group hr {
        width: 100%;
    }
}
</style>