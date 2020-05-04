<template>
<div>
    <v-row align="center" style="margin-top: 60vh;" justify="center">
        <cubeMohamed />
        <cubeMostafa />
    </v-row>
    <v-row class="text-center">
        <h1 class="text-center  title font-italic" style="width: 100%; color: #1C2541">
            Mohamed Mostafa</h1>
    </v-row>
</div>
</template>

<script>
import cubeMohamed from './loading/cubeMohamed'
import cubeMostafa from './loading/cubeMostafa'
export default {
    components: {
        cubeMohamed,
        cubeMostafa
    }
}
</script>

<style lang="scss">

</style>
