<template>
    <footer class="footer-site p-4">
        <div class="newsletter my-2 row">
            <div class="newsletter-container d-flex align-items-center col-lg-7 py-2">
                <i class="fas fa-newspaper"></i>
                <div class="newsletter-text ml-4">
                    <h4>INSCREVA-SE NA NEWSLETTER</h4>
                    <h6>FIQUE POR DENTRO DAS NOVIDADES</h6>
                </div>
            </div>
            <div class="newsletter-input col-lg-5 py-2">
                <form @submit.prevent="subscribeNewsletter()" class="d-flex justify-content-end">
                    <input type="email" name="email" id="email" placeholder="DIGITE SEU EMAIL" required>
                    <button type="submit" class="customized-button">INSCREVER-SE</button>
                </form>
            </div>
        </div>
        <div class="footer-container d-flex align-items-center justify-content-between pb-4 pt-2 border-bottom mb-4 flex-wrap">
            <div class="footer-informations d-flex flex-column">
                <router-link to="/" class="scroll-top">
                    <img src="../assets/img/logo-white.png" class="footer-logo mb-4" />
                </router-link>
                <strong><p>IGREJA DO EVANGELHO QUADRANGULAR</p></strong>
                <span>RUA JOÃO MENDONÇA 50</span>
                <span>CAPÃO DA IMBUIA, CURITIBA - PR</span>
                <br>
                <span>(41) 9 8409-3742</span>
            </div>
            <div class="footer-links d-flex flex-wrap">
                <div class="footer-group mx-4 d-flex flex-column">
                    <p>IEQ FAROL</p>
                    <router-link to="/leadership" class="scroll-top">
                        <span>Pastores</span>
                    </router-link>
                    <router-link to="/give" class="scroll-top">
                        <span>Doar</span>
                    </router-link>
                    <router-link to="/ministries/gmj" class="scroll-top">
                        <span>Ministérios | GMJ</span>
                    </router-link>
                    <router-link to="/ministries/gmm" class="scroll-top">
                        <span>Ministérios | GMM</span>
                    </router-link>
                </div>
                <div class="footer-group mx-4 d-flex flex-column">
                    <p>RECURSOS</p>
                    <router-link to="/events" class="scroll-top">
                        <span>Eventos</span>
                    </router-link>                    
                    <router-link to="/location" class="scroll-top">
                        <span>Como chegar</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="footer-signature d-flex align-items-center justify-content-between flex-wrap">
            <div class="icons m-2">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
            </div>
            <div class="signature d-flex align-items-center justify-content-center flex-column m-2">
                <span>&copy; 2023 IEQ Farol. Todos os direitos reservados.</span>
                <span>Por <a href="https://rabsystems.com.br" target="_blank">Rabsystems</a></span>
            </div>
            <div class="privacy-polices m-2">
                <span><a href="">Política de privacidade</a> | <a href="">Termos e condições</a></span>
            </div>
        </div>
    </footer>
</template>
<script>
import $ from 'jquery';

export default {
    name: "footerComponent",
    methods: {
        subscribeNewsletter: function () {
            let container = $(".newsletter-input");
            let content = container.html();
            container.html("<span class='mt-4 text-center d-block'>Obrigado!</span>");
            setTimeout(() => {
                container.html(content);
            }, 3000)
        }
    }
}
</script>
<style scoped>

footer {
    background: var(--footer-background);
}

.footer-logo {
    width: 120px;
}

.newsletter-container i {
    font-size: 4rem;
}

.footer-informations span {
    font-size: .8rem;
}

.footer-group p {
    font-weight: 600;
}

.footer-group span, .footer-group a, .footer-signature span, .footer-signature a {
    color: white;
    font-size: .8rem;
}

.icons i {
    font-size: 20px;
    margin: 0 5px;
}

@media (max-width: 768px) {
    .footer-signature {
        justify-content: center !important;
    }

    .footer-group {
        margin-left: 0 !important;
        margin-bottom: 1.5rem;
    }

    .footer-links {
        margin-top: 2rem;
    }
}

@media (max-width: 480px) {
    .newsletter-input form {
        flex-direction: column;
    }

    .newsletter-input form button {
        margin: 10px 0;
    }

    .newsletter-container i {
        display: none;
    }

    .newsletter-text {
        margin: 0 !important;
    }

    .footer-signature {
        text-align: center;
    }
}
</style>