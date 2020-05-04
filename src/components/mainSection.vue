<template>
<section class="mainSection">
    <div class="layer">
        <v-img class="profileImage mb-4 wow fadeIn" src="@/assets/profile.png"></v-img>
        <v-col md="4" sm="9" class="desc mt-3">
            <h2 class="subHeading wow bounceInRight">Hello, I`m</h2>
            <h1 class="mainName wow bounceInLeft">Mohamed Mostafa </h1>
            <p class="briefDesc wow bounceInUp">Front end Developer at Masarat Misr | Senior 1 Computer Engineering Student at Nile Univeristy.
            </p>
            <v-row>
                <v-col cols="2">
                    <v-btn link icon target="_blank" href="https://www.facebook.com/mo.mostafa2010">
                        <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                </v-col>

                <v-col cols="2">
                    <v-btn icon link target="_blank" title="01126311793" href="https://wa.me/0115342010">
                        <v-icon>mdi-whatsapp</v-icon>
                    </v-btn>
                </v-col>

                <v-col cols="2">
                    <v-btn icon link target="_blank" href="https://www.linkedin.com/in/mo-mostafa-nu/">
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                </v-col>

                <v-col cols="2">
                    <v-btn icon link target="_blank" href="https://www.instagram.com/mohamedmostafanu/">
                        <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="2">
                    <v-btn icon link title="mo.mostafa@nu.edu.eg" href="mailto:mo.mostafa@nu.edu.eg?Subject=Front%20End%20Developer">
                        <v-icon>mdi-outlook</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="2">
                    <v-btn icon link title="mo.mostafa@nu.edu.eg" href="mailto:mo.mostafa@nu.edu.eg?Subject=Front%20End%20Developer">
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
.before-enter {
    opacity: 0;
    transition: 1s ease-in;
    transition-delay: 2000ms;
}

.enter {
    opacity: 1;
}

.mainSection {
    width: 100%;
    height: 90vh;
    position: relative;
    background-image: url('../assets/bg.jpg');
    background-size: cover;
}

.layer {
    background-color: #1c706d;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90vh;
}

.profileImage {
    width: 200px;
    display: block;
    margin: 0 auto;
    /* border-radius: 50%; */
    margin-top: 75px;
}

.desc {
    text-align: center;
    width: 500px;
    margin: 0 auto;
    display: block;
}

.subHeading {
    font-size: 24px;
    color: white;
    font-weight: 1300;
    line-height: 1.5;
}

.mainName {
    letter-spacing: 1px;
    font-weight: 900;
    font-size: 2rem;
    color: white;
}

.briefDesc {
    color: white;
    font-size: 18px;
    font-weight: bold;
    font-family: "Montserrat", Arial, sans-serif;
}
</style>
