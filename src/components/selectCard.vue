<template>
    <div class="select-card" :style="'background-image: url(' + background + ')'" :class="cardAlign == 'left' ? 'align-items-start' : ''">
        <h6>{{ subtitle2 }}</h6>
        <h4>{{ title }}</h4>
        <h6>{{ subtitle }}</h6>
    </div>
</template>
<script>
export default {
    name: "selectCard",
    props: ["title", "subtitle", "background", "subtitle2", "cardAlign"]
}
</script>
<style scoped>
.select-card {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 275px;
    height: 144px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: .7rem;
    cursor: pointer;
}

    .select-card::after {
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

    .select-card:hover::after {
        animation-name: toggleCardBackdrop;
        animation-duration: .3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    .select-card h6 {
        font-weight: 400;
    }

    .select-card h4, .select-card h6 {
        z-index: 2;
    }

    @keyframes toggleCardBackdrop {
        0% {
            background: linear-gradient(transparent, black);
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
            background: linear-gradient(black, transparent);
        }
    }
</style>