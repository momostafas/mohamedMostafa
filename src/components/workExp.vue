<template>
<v-container>
    <h3 class="text-center">Work Expirence</h3>
    <v-timeline>
        <v-timeline-item v-for="item in items" :key="item.title" large>
            <template v-slot:icon>
                <v-avatar>
                    <img style="background-color: white;" :src="item.logo">
                </v-avatar>
            </template>
            <template v-slot:opposite>
                <span class="bold">{{item.period}}</span>
            </template>
            <v-card class="elevation-2"  :color="item.cardColor">
                <v-card-title :class="item.textColor + ' bold'">{{item.title}}</v-card-title>
                <v-card-text :class="item.textColor">
                    <ul>
                        <li v-for="desc in item.desc" :key="desc">
                            {{desc}}
                        </li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
    <div data-aos="fade-right">
        Element To Animate
    </div>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    title: 'Front end developer at Masarat Misr',
                    logo: 'https://masarat-misr.com/wp-content/themes/archi/images/Masarat%20icon.png',
                    desc: [
                        'Front end (Vue Js) developer working on Google maps API project.',
                        'Responsible for the company`s main website'
                    ],
                    cardColor: '#c89c6e',
                    textColor: 'white--text',
                    period: 'May 2019 - present'
                },
                {
                    title: 'Full Stack developer at ICareer',
                    logo: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t31.0-8/11046834_812304708805267_8612278320330884473_o.png?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ChpUGkXtDdkAX91NwHu&_nc_ht=scontent-hbe1-1.xx&oh=75052c93a850cca1e1d390f25933a7cf&oe=5ED1BE14',
                    desc: ['Freelancer Full stack developer for fixing and adding some features in old project.'],
                    cardColor: '#2f3f50',
                    textColor: 'white--text',
                    period: 'Oct 2019'
                },
                {
                    title: 'Front end developer at SubsBase',
                    logo: require('../assets/subsbase.png'),
                    desc: ['Freelancer Front end (Vue Js) developer for building main featuers of SubsBase Main App.'],
                    cardColor: '#204092',
                    textColor: 'white--text',
                    period: 'Sep 2019'
                },
                {
                    title: 'Front end developer at 04 Egypt',
                    logo: 'https://04egypt.com/wp-content/uploads/2018/10/04-2-2.png',
                    desc: ['Front end (Vue Js) developer Worked on a chat bot app using Rockt Chat', 'Data Visualizer using D3.js'],
                    cardColor: '#4294ff',
                    textColor: 'white--text',
                    period: 'Sep 2018 - May 2019'
                },
                {
                    title: 'Front end developer intern at Tafra Io',
                    logo: 'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/26733724_351918191950922_3339222313563094687_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=TAJDZ67bA30AX8n5ufv&_nc_ht=scontent-hbe1-1.xx&oh=e0087bc5cc078e116d771fdb0ea01f6f&oe=5ED546EA',
                    desc: ['Front end (Angular 4) developer intern.'],
                    cardColor: '#504883',
                    textColor: 'white--text',
                    period: 'May 2018 - Aug 2018'
                },
                {
                    title: 'Web Developer at Ghareeb Trading',
                    logo: 'data:image/png;base64,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',
                    desc: ['Freelancer web developer for building their static website.'],
                    cardColor: '#42a061',
                    textColor: 'white--text',
                    period: 'Dec 2017 – Jan 2018'
                },
            ]
        }
    },
}
</script>
<style lang="scss">
  .animate {
  transition-delay: .1s;
  transition-duration : .25s;
  transition-timing-function: ease-in;
}
 
.slide-up {
  transform: translateY(0)
}
 
.slide-up.animate-active {
  transform: translateY(-100px)
}
</style>