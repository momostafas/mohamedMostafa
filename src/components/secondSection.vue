<template>
<section class="education">
    <div data-aos="fade-up">

        <span  class="mainTitle mt-4">Education</span>
        <v-row no-gutters class="mt-6">
            <v-col data-aos="fade-right" cols="5" class="text-right">
                <p class="date">[Sep 2016 - July 2021 (Expected)]</p>
                <p>Bacholr Degree</p>
            </v-col>
            <v-col data-aos="fade-up" cols="2" class="text-center" >
              <v-icon style="font-size:10px;">mdi-circle mdi-rotate</v-icon>
            </v-col>
            <v-col data-aos="fade-left" cols="5">
                <p class="degree">
                Senior 1 Computer Engineering Student at Nile University.
                </p>
            </v-col>
        </v-row>
    </div>

</section>
</template>

<script>
export default {

};
</script>

<style>
.education {
    background-color: #ffffff;
    height: 100vh;
}
.centerDiv{
    display: block;
    margin: 0 auto;
}
.mainTitle {
    font-size: 34px;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    display: block;
}

.eduDesc {
    font-family: "Montserrat", Arial, sans-serif;
    font-size: 15px;
    line-height: 1.8;
    font-weight: 500;
    color: #999999;
}
.date{
    font-size: 15px;
    letter-spacing: 0.25em;
    line-height: 1.8;
    font-weight: 2000;
    font: normal normal normal 14px/1.4em avenir-lt-w01_85-heavy1475544,sans-serif;
    color: #444444;
}
.degree{
    letter-spacing: 0.2em;
    font: normal normal normal 14px/1.4em avenir-lt-w01_85-heavy1475544,sans-serif;
}
</style>
