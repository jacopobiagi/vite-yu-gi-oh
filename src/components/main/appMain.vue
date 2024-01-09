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

    <main>
        <div>

        </div>

        
        <div v-for="element in store.cardList">
            <singleCard
            :name="element.name"
            :type="element.type"
            :img="element.card_images[0].image_url"/>
        </div>
    </main>
    
</template>

<style lang="scss" scoped>
    main{
        width: 100vw;
        background-color: rgb(202, 137, 55);
    }
</style>