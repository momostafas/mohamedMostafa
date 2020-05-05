<template>
<v-container class="mt-6 pb-8">
    <h3 class="text-center title" data-aos="zoom-in">Personal Info</h3>
    <v-row>
        <v-col :data-aos="item.animation" class="personalInfo" v-for="item in info" :key="item.key" cols="12" sm="6">
            <p>
                <v-icon>
                    {{item.icon}}
                </v-icon>
                {{item.key}} : <span v-if="item.key == 'Languages'">
                    <v-chip v-for="lang in item.value" :key="lang" class="ma-2" text-color="white" color="#1C2541"> {{lang}}</v-chip>
                </span>
                <span v-else> {{item.value}} </span>

            </p>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            info: [{
                    key: 'Location',
                    value: 'Hadayek El kobba, Cairo, Egypt',
                    icon: 'mdi-map-marker',
                    animation: 'zoom-out-up'
                },
                {
                    key: 'Graduation Year(expected)',
                    value: '2021',
                    icon: 'mdi-school',
                    animation: 'zoom-out-down'
                },
                {
                    key: 'Date of birth',
                    value: '20/2/1998',
                    icon: 'mdi-calendar',
                    animation: 'zoom-out-left'
                },
                {
                    key: 'Languages',
                    value: ['Arabic', 'English', 'Italian(beginner)', 'Spanish(beginner)'],
                    icon: 'mdi-calendar',
                    animation: 'zoom-out-right'
                },
            ]
        }
    },

}
</script>

<style>
.personalInfo {
    font-size: 1.2rem;
    font-weight: bold;
    color: #1C2541;
}
</style>
