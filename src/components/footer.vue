<template>
<v-footer color="#1C2541" padless>
    <v-card style="width: 100%;" color="#1C2541" flat tile dark class="lighten-1 white--text text-center">
        <v-card-text>
            <v-btn v-for="item in media" :key="item.link" link color="white" icon target="_blank" :title="item.title" :href="item.link">
                <v-icon>{{item.icon}}</v-icon>
            </v-btn>
        </v-card-text>
        <v-card-text class="white--text">
            {{ new Date().getFullYear() }} —  Project was made by <strong>Mohamed Mostafa</strong>
        </v-card-text>
        <v-divider>
        </v-divider>
        <v-card-text>
            <a class="footerLink" href="https://github.com/mo-mostafa2010/mohamedMostafa" target="_blank">
            Source Code on GitHub            
            </a>
        </v-card-text>
    </v-card>
</v-footer>
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
    .footerLink{
        text-decoration: none;
        color: #ffffff !important;
    }
</style>