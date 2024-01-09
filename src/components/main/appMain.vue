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

    <main class="d-flex align-items-center justify-content-center">
        <select name="" id=""></select>
        <div class="container-list ">
            <div class="header-list w-100 text-white bg-dark d-flex justify-content-arount align-items-center">
                <h2 class="p-3">Found 20 cards</h2>
            </div>
            <div class="main-list row">
                <div v-for="element in store.cardList" class="container-card col-3">
                    <singleCard
                    :name="element.name"
                    :type="element.type"
                    :img="element.card_images[0].image_url"/>
                </div>
            </div>
        </div>


        <!--  -->
    </main>
    
</template>

<style lang="scss" scoped>
    main{
        width: 100vw;
        min-height: calc(100vh - 70px);
        background-color: rgb(202, 137, 55);

        .container-list{
            max-width: 80%;
            min-height: 500px;
            background-color: white;
            padding: 30px;
            margin: 40px 0;
            .header-list{
                height: 60px;
                h2{
                    font-size: 1.2em;
                }
            }
            .container-card{
                background-color: rgb(255, 255, 255);
                padding: 11px;
            }
            
        }
    }
</style>