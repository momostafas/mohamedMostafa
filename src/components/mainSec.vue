<template>
<div>
    <div style="background: linear-gradient(#0A2342,#1C2541); margin-bottom:0; ">
        <v-row dir="rtl" align="center">
            <v-col sm="6" cols="12">
                <img src="../assets/edit.png" class="profileImg" title="Mohamed`s Picture" alt="Mohamed`s Picture">
            </v-col>
            <v-col sm="6" cols="12">
                <h1 class="mainName text-center white--text">
                    Mohamed Mostafa
                </h1>
                <h2 class="text-center jobTitle white--text">
                    Front-end (Vue js) developer <br>
                    Senior-1 CE Student at Nile Univeristy <br>
                    <div dir="ltr" class="topMargin">
                        <v-btn v-for="item in media" :key="item.link" link color="white" icon target="_blank" :title="item.title" :href="item.link">
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>
                    </div>
                </h2>
            </v-col>
        </v-row>

    </div>
    <svg viewBox="0 0 1440 320">
        <svg viewBox="0 0 1440 320">
            <path fill="#1C2541" fill-opacity="1" d="M0,64L34.3,90.7C68.6,117,137,171,206,197.3C274.3,224,343,224,411,192C480,160,549,96,617,80C685.7,64,754,96,823,106.7C891.4,117,960,107,1029,112C1097.1,117,1166,139,1234,122.7C1302.9,107,1371,53,1406,26.7L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg></svg>
</div>
</template>

<script>
export default {
    data() {
        return {
            media: [{
                    link: 'https://www.facebook.com/mo.mostafa2010',
                    icon: 'mdi-facebook',
                    title: 'FB Profile'
                },
                {
                    link: 'https://wa.me/01126311793',
                    icon: 'mdi-whatsapp',
                    title: '01126311793'
                },
                {
                    link: 'https://www.linkedin.com/in/mo-mostafa-nu/',
                    icon: 'mdi-linkedin',
                    title: 'LinkedIn Profile'
                },
                {
                    link: 'https://www.instagram.com/mohamedmostafanu/',
                    icon: 'mdi-instagram',
                    title: 'mohamedmostafanu'
                },
                {
                    link: 'mailto:mo.mostafa@nu.edu.eg?Subject=Front%20End%20Developer',
                    icon: 'mdi-outlook',
                    title: 'mo.mostafa@nu.edu.eg'
                },
                {
                    link: 'https://github.com/mo-mostafa2010',
                    icon: 'mdi-github',
                    title: 'mo-mostafa2010'
                },
            ]
        }
    },

}
</script>

<style scoped>
.mainName {
    margin-top: 50px;
}

.jobTitle {
    font-size: 1rem;
}

.profileImg {
    margin: 0 auto;
    display: block;
    width: 250px;
}

.desktopView {
    display: show;
}

.mobileView {
    display: none;
}

@media only screen and (max-width: 600px) {
    .desktopView {
        display: none;
    }

    .mobileView {
        display: block;
    }

    .profileImg {
        height: 250px;
        width: auto;
        border-radius: 50%;
    }

    .topMargin {
        margin-top: 0;
    }

    .mainName {
        margin-top: 0;
    }

    .imgCol {
        width: 100% !important;
    }
}

.topMargin {
    margin-top: 30px;
}
</style>
