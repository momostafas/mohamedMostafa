<template>
<v-container>
    <h3 class="text-center title" data-aos="zoom-in">Work Experience</h3>
    <v-timeline class="desktopView">
        <v-timeline-item v-for="item in items" :key="item.title" large>
            <template v-slot:icon>
                <v-avatar>
                    <img style="background-color: white;" :src="item.logo">
                </v-avatar>
            </template>
            <template v-slot:opposite>
                <span class="bold timemlinePeriodText">{{item.period}}</span>
            </template>
            <v-card class="elevation-2" :data-aos="item.animation" :color="item.cardColor">
                <v-card-title class="keepBrek white--text bold">{{item.title}}</v-card-title>
                <v-card-text class="keepBrek white--text">
                    <ul>
                        <li v-for="desc in item.desc" class="keepBrek" :key="desc.text">
                            {{desc.text}}
                            <span class="expLink" v-if="desc.link != undefined">
                                - <a :href="desc.link" target="_blank">link</a>
                            </span>
                        </li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
    <div class="mobileView">
        <v-card class="elevation-2 mb-2" v-for="item in items" :key="item.desc[0].text" :data-aos="item.animation" :color="item.cardColor">
            <v-avatar size="36" class="centerAvatar" >
                <img style="background-color: white;"  :src="item.logo">
            </v-avatar>
            <v-card-title class="keepBrek white--text bold">{{item.title}} ( {{item.period}} )</v-card-title>
            <v-card-text class="keepBrek white--text">
                <ul>
                    <li v-for="desc in item.desc" class="keepBrek" :key="desc.text">
                        {{desc.text}}
                        <span class="expLink" v-if="desc.link != undefined">
                            - <a :href="desc.link" target="_blank">link</a>
                        </span>
                    </li>
                </ul>
            </v-card-text>
        </v-card>
    </div>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    title: 'Front end developer at Masarat Misr',
                    logo: require('../assets/Masarat icon.png'),
                    desc: [{
                            text: 'Front end (Vue Js) developer working on Google maps API project.'
                        },
                        {
                            text: 'Responsible for the company`s main website',
                            link: 'http://masarat-misr.com/'
                        }
                    ],
                    cardColor: '#c89c6e',
                    textColor: 'white--text',
                    period: 'May 2019 - present',
                    animation: 'fade-right'
                },
                {
                    title: 'Full Stack developer at ICareer',
                    logo: require('../assets/iCareer.png'),
                    desc: [{
                        text: 'Freelancer Full stack developer for fixing and adding some features in old project.'
                    }],
                    cardColor: '#2f3f50',
                    textColor: 'white--text',
                    period: 'Oct 2019',
                    animation: 'fade-left'
                },
                {
                    title: 'Front end developer at SubsBase',
                    logo: require('../assets/subsbase.png'),
                    desc: [{
                        text: 'Freelancer Front end (Vue Js) developer for building main featuers of SubsBase Main App "NOT the main website".',
                        link: 'http://subsbase.com/'
                    }],
                    cardColor: '#204092',
                    textColor: 'white--text',
                    period: 'Sep 2019',
                    animation: 'fade-right'
                },
                {
                    title: 'Front end developer at 04 Egypt',
                    logo: require('../assets/04.png'),
                    desc: [{
                        text: 'Front end (Vue Js) developer Worked on a chat bot app using Rockt Chat'
                    }, {
                        text: 'Data Visualizer using D3.js'
                    }],
                    cardColor: '#4294ff',
                    textColor: 'white--text',
                    period: 'Sep 2018 - May 2019',
                    animation: 'zoom-right'
                },
                {
                    title: 'Front end developer intern at Tafra Io',
                    logo: require('../assets/tafra.jpg'),
                    desc: [{
                        text: 'Front end (Angular 4) developer intern.'
                    }],
                    cardColor: '#504883',
                    textColor: 'white--text',
                    period: 'May 2018 - Aug 2018',
                    animation: 'flip-right'
                },
                {
                    title: 'Web Developer at Ghareeb Trading',
                    logo: require('../assets/ghareeb.png'),
                    desc: [{
                        text: 'Freelancer web developer for building their static website.',
                        link: 'https://mo-mostafa2010.github.io/ghareeb-trading-est/'
                    }],
                    cardColor: '#414141',
                    textColor: 'white--text',
                    period: 'Dec 2017 – Jan 2018',
                    animation: 'zoom-left'
                },
            ]
        }
    },
}
</script>

<style lang="scss">
.title {
    font-size: 2rem;
    color: #0A2342;
    margin-bottom: 20px;
}

.timemlinePeriodText {
    color: #0A2342;
    font-weight: bold;
    font-size: 1rem;
}

.expLink a {
    color: #ffffff;
    text-decoration: none;
}

.keepBrek {
    word-break: keep-all !important;
}

.desktopView {
    display: block;
}

.mobileView {
    display: none;
}

@media only screen and (max-width: 600px) {
    .desktopView {
        display: none;
    }
    .centerAvatar{
        margin:0 auto;
        display: block !important;
    }
    .mobileView {
        display: block;
    }
}
</style>
