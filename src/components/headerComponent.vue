<template>
    <header class="header">
        <div class="header-top d-flex justify-content-between py-2 px-4">
            <div class="icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
            </div>
            <div class="tel-container">
                <i class="fas fa-phone"></i>
                <span>Fale conosco (41) 9 8409-3742</span>
            </div>
        </div>
        <div class="header-content row">
            <div class="col-md-9 col-sm-6">
                <nav class="navbar navbar-expand-lg" style="margin-top: 12px;">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#church-navbar" aria-controls="church-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="church-navbar">
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <a href="">EVENTOS</a>
                            </li>
                            <li>
                                <a href="">CONTRIBUA</a>
                            </li>
                            <li class="header-icon-container">
                                <img src="../assets/img/icon-white.png" class="head-icon">
                            </li>
                            <li>
                                <a href="">MINISTÉRIOS</a>
                            </li>
                            <li>
                                <a href="">GALERIA</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="col-md-3 col-sm-6 d-flex align-items-center">
                <button type="button" class="customized-button ml-auto">
                    <i class="fas fa-hand-holding-usd"></i>
                    <span style="font-size: calc(.5vw + .5rem);">CONTRIBUA</span>
                </button>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: "headerComponent"
}
</script>
<style scoped>
.head-icon {
    width: calc(1vw + 30px);
}

.header-top {
    font-size: 15px;
    border-bottom: 1px solid white;
}

.header-top i {
    font-size: 20px;
    margin: 0 5px;
}

.navbar i {
    color: white;
}

.tel-container span {
    margin-left: 10px;
}

.customized-button i {
    margin-right: 10px;
}

.navbar-nav li {
    padding: 10px;
    margin: 5px;
    display: flex;
    align-items: center;
}

.navbar-nav a {
    color: white;
    text-decoration: none;
}

    .navbar-nav a:hover {
        color: rgb(219, 219, 219);
    }

@media (max-width: 991px) {
    .navbar-nav li {
        padding: 10px 10px 10px 0;
        margin: 5px 5px 5px 0;
    }

    .header-icon-container {
        display: none !important;
    }
}
</style>