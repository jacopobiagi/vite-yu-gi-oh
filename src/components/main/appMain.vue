<script>

import { store } from '../../store';

import singleCard from './subMain/singleCard.vue';

export default {
    components:{
        singleCard,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div v-for="element in store.cardList.data">
        <singleCard
        :name="element.name"
        :type="element.type"
        :img="element.card_images[0].image_url"/>
    </div>
</template>

<script>

</script>