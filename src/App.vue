<script>
import axios from "axios";
import { store } from "./store";

import AppHeader from './components/appHeader.vue';
import AppMain from './components/main/appMain.vue';


export default{
  components:{
    AppHeader,
    AppMain,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getCharacters(){

      let myUrl = store.apiURL;
      
      if(store.paramType !== ""){
        myUrl += `?type=${store.paramType}`;
      }

      axios 
        .get(myUrl)
        .then(res => {
          
          store.cardList = res.data.data.slice(0,40);
          console.log(store.cardList);
        })
        .catch(err =>{
          console.log("Errori",err);
        })

      
    },
  },
  created(){
    this.getCharacters()
  }
}
</script>
  
<template>
    <AppHeader/>
    <AppMain @select="getCharacters"/>
</template>

<style lang="scss">

  @use './style/general.scss';

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
</style>
