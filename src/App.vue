<template>
<v-app>
    <v-content>
        <transition name="fade">
            <loadingPage v-show="loadingPercent < 100" />
        </transition>
        <div v-show="loadingPercent >= 100" >
            <mainSection />
            <workExp />
            <skills />
            <personalInfo />
            <instagram />
            <appFooter />
        </div>
    </v-content>
</v-app>
</template>

<script>
import loadingPage from './components/loadingPage';
import mainSection from './components/mainSec';
import workExp from './components/workExp';
import skills from './components/skills'
import personalInfo from './components/personalInfo'
import instagram from './components/instagram'
import appFooter from './components/footer'
export default {
    name: 'App',
    components: {
        loadingPage,
        mainSection,
        workExp,
        skills,
        personalInfo,
        instagram,
        appFooter
    },
    data: () => ({
        loading: true,
        loadingPercent: 0,
        loadTime: 0,
        interval: null
    }),
    computed: {
        loaded() {
            return this.loadingPercent + '%'
        }
    },
    watch: {
        loadingPercent(val) {
            if (val >= 100) {
                console.log('complete');
                clearInterval(this.interval)
            }
        }
    },
    created() {
        let perfData = window.performance.timing;
        let estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
        this.loadTime = parseInt((estimatedTime / 1000) % 60) * 100;
        this.doProgress();
    },
    methods: {
        doProgress() {
            let step = this.loadTime / 100;
            this.interval = setInterval(() => {
                this.loadingPercent++
            }, step);
        }
    },
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
