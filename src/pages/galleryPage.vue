<template>
    <div class="gallery-page container">
        <div class="principal">
            <headerComponent />
            <div class="principal-text p-4">
                <h1>GALERIA</h1>
                <h3>Veja as fotos da nossa igreja</h3>
            </div>
        </div>
        <optionsBackground style="width: 100%;">
            <div class="gallery-container">
                <div ref="swiper" class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="https://i0.wp.com/teologiabrasileira.com.br/wp-content/uploads/2018/08/o_culto_e_os_seus_princ%C3%ADpios_d_b_riker_2.jpg?fit=630%2C337&ssl=1" class="img-fluid">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://1.bp.blogspot.com/-utwAvmWIKAw/WI3xUrhS69I/AAAAAAAAWNk/0cPjCILSTWESBPmVYttXlwrQtN6LPKinACLcB/s640/culto-cristao-contemporaneo.jpg" class="img-fluid">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://www.portaldotrono.com/wp-content/uploads/2020/03/culto.jpg" class="img-fluid">
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>

                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <div class="swiper-scrollbar"></div>
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

import Swiper, { Navigation, Pagination, EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default {
    name: "galleryPage",
    components: {
        headerComponent,
        optionsBackground,
        footerComponent
    },
    mounted: function () {
        this.swiper = new Swiper(this.$refs.swiper, {
            modules: [Navigation, Pagination, EffectCards],
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
            slideToClickedSlide: true,
            effect: 'cards',
            cardsEffect: {
                perSlideOffset: 16
            },
        })
    }
}
</script>
<style scoped>
.gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    min-height: 50vh;
    width: 100%;
}

.swiper {
    width: 100%;
    max-width: calc(1000px - 1%);
    height: 100%;
    margin: auto;
}

.swiper-slide {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
}

    .swiper-slide img {
        width: 100%;
        object-fit: cover;
    }

    .swiper-slide p {
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        color: white;
        font-size: calc(0.4rem + 1vw);
        font-weight: 600;
        background: rgba(0, 0, 0, 0.7);
        padding: calc(0.7rem + 1vw) 0;
    }
</style>