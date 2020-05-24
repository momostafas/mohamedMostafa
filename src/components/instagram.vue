<template>
  <v-container fluid>
        <h3 class="text-center title mt-8">Instagram Feed</h3>
    <v-row justify="center" >
      <v-col v-for="img in images" :key="img" cols="4"  sm="2">
        <v-img 
          :src="img"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    data() {
        return {
            images: [
                'https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/96837377_248275959860556_2604747240529355465_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=KELMYHqZ8CEAX8HPHm6&oh=1e5cae15ed36121165975f1da8ac5c9b&oe=5EF5D815',
                'https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/85238301_241703666840554_9045886990717371916_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=RXMxv6J4XMQAX-B-FlT&oh=91a7b86f696b8c0f7887dfa289c88889&oe=5EF484A8',
                'https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/64413260_432042704314694_6134409055718088666_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=mLMGB8J6g3AAX_A2nWS&oh=b49b985123cb98fb7bb13f05054d0896&oe=5EF36520',
                'https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/69689704_162942838180713_7762312489814420006_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=9vG4pjBp5BAAX8L3hex&oh=1b82c90855663e3428ad76862274e409&oe=5EF2EA88',
                                'https://scontent-hbe1-1.cdninstagram.com/v/t51.2885-15/e35/47695062_371631973613015_3746077308376304698_n.jpg?_nc_ht=scontent-hbe1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=NCHvIiOo7YUAX_rPPst&oh=e7355c82997bce14dc15049b5816f70b&oe=5EF4B53A'
          
          ]
        }
    },
}
</script>