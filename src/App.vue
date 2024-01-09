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
      axios 
        .get(store.apiURL)
        .then(res => {
          store.cardList = res.data;
          console.log(store.cardList.data);
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
  <section>
    <AppHeader/>
  </section>

  <section>
    <AppMain/>
  </section>

  <section>
    <AppFooter/>
  </section>
</template>

<style lang="scss">

  @use './style/general.scss';
  
</style>
