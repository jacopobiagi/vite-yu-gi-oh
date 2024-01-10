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
    },
    methods:{
        stampType(){
            store.paramType = document.getElementById("selezionaTipo").value;
            store.cardList.forEach(element => {
                if(!this.store.archetype.includes(element.type)){
                    this.store.archetype.push(element.type);
                }
            });
        },
        changeType(){
            store.paramType = document.getElementById("selezionaTipo").value;
        }
    },
    created(){
        //this.stampType();
    }
}
</script>

<template>

    <main class="d-flex flex-column align-items-center justify-content-center">
        <select name="sel" id="selezionaTipo" @click="stampType" @change="changeType">
            <option value="">Seleziona tipologia</option>
            <option :value="i" v-for="i in store.archetype">{{ i }}</option>
        </select>
        <button @click="$emit('select')">invio</button>
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