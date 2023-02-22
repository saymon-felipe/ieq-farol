<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between">
        <a class="navbar-brand" href="#">
            <img src="../assets/img/logo-white.png" alt="Logo IEQ Farol" class="header-logo">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-right" id="navbarMenu">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Agenda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contribua</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="ministriesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ministérios</a>
                    <div class="dropdown-menu" aria-labelledby="ministriesDropdown">
                        <a class="dropdown-item" href="#">Jovens</a>
                        <a class="dropdown-item" href="#">Mulheres</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Galeria</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">A igreja</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: "headerComponent"
}
</script>
<style scoped>
#navbarMenu {
    flex-grow: initial;
}
</style>