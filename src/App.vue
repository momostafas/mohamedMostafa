<template>
<v-app>
    <v-content>
        <transition name="fade">
            <!-- <v-progress-circular :rotate="90" :size="100" :width="15" :value="loadingPercent" color="teal">
                {{ loaded }}
            </v-progress-circular> -->
            <loadingPage v-show="loadingPercent < 100" />
        </transition>
        <div v-show="loadingPercent >= 100" >
            <mainSection />
            <!-- <secondSection /> -->
            <workExp />
        </div>
    </v-content>
</v-app>
</template>

<script>
import loadingPage from './components/loadingPage';
import mainSection from './components/mainSec';
// import secondSection from './components/secondSection';
import workExp from './components/workExp';

export default {
    name: 'App',
    components: {
        loadingPage,
        mainSection,
        // secondSection,
        workExp
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
.before-enter {
    opacity: 0;
}

.enter {
    opacity: 1;
}

body {
    margin: 0;
    padding: 0;
}
</style>
