<script>
import axios from "axios";
import { store } from "./store";

import AppHeader from './components/appHeader.vue';
import AppMain from './components/main/appMain.vue';
import AppFooter from './components/appFooter.vue';

export default{
  components:{
    AppHeader,
    AppMain,
    AppFooter,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getCharacters(){

      const limit = 20;
      const offset = 0;
      axios 
        .get(store.apiURL)
        .then(res => {
          store.cardList = res.data.data.slice(0,20);
          console.log(store.cardList);
        })
        .catch(err =>{
          console.log("Errori",err);
        })
    }
  },
  created(){
    this.getCharacters()
  }
}
</script>
  
<template>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
</template>

<style lang="scss">

  @use './style/general.scss';

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
</style>
