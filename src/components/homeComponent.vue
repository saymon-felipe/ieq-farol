<script setup>
import { onMounted } from 'vue';
import { animate, spring } from "motion";

onMounted(() => {
    const iconAnimation = animate(".home-icon", { scale: 1.3 }, 
        {
            duration: 0.3,
            easing: spring(),
            repeat: false,
            direction: 'alternate'
        }
    )

    setTimeout(() => {
        iconAnimation.reverse();
    }, 300)

    setTimeout(() => {
        iconAnimation.pause();

        const textAnimation1 = animate(".text-animation p:first-child", { opacity: 1 }, 
            {
                duration: 1,
                easing: 'linear',
                repeat: false
            }
        )

        setTimeout(() => { // Pause do primeiro texto antes que ele desapareça
            textAnimation1.pause();
        }, 990)

        setTimeout(() => {
            const textAnimation2 = animate(".text-animation p:last-child", { opacity: 1 }, 
                {
                    duration: 1,
                    easing: 'linear',
                    repeat: false
                }
            )

            setTimeout(() => { // Pause do segundo texto antes que ele desapareça
                textAnimation2.pause();
            }, 990)
        }, 800)
    }, 590)
})

</script>
<template>
    <div class="home-component-container">
        <div class="home-background"></div>
        <div class="home-content-container">
            <div class="animation-container">
                <img src="../assets/img/icon-white.png" class="home-icon">
                <div class="text-animation">
                    <p>IEQ FAROL</p>
                    <p>Nossa família</p>
                </div>
            </div>
            <button class="btn btn-dark">Conheça nossa igreja</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "homeComponent",
    data() {
        return {
        }
    },
    mounted: function () {
    }
}
</script>
<style scoped>

.home-background {
    background: url("../assets/img/background.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: scroll;
    position: absolute;
    width: 102%;
    height: 102%;
    top: -10px;
    left: -10px;
    filter: blur(3px);
}

.home-content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.home-component-container {
    position: relative;
    height: 90vh;
    padding: 7rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.home-icon {
    max-width: 1000px;
    width: calc(100px + 10vw);
}

.animation-container {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
}

.text-animation p {
    color: white;
    font-weight: bold;
    opacity: 0;
}

    .text-animation p:first-child {
        font-size: 3rem;
    }

    .text-animation p:last-child {
        font-size: 2rem;
    }

@media (max-width: 490px) {
    .animation-container {
        flex-direction: column;
    }

    .text-animation {
        margin-top: 2rem;
        text-align: center;
    }

    .text-animation p:first-child {
        font-size: 2rem;
    }

    .text-animation p:last-child {
        font-size: 1rem;
    }
}
</style>