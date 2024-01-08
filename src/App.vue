<script>
import axios from "axios";
import { store } from "./store";

import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';

export default{
  components:{
    appHeader,
    appMain,
    appFooter,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getCharacters(){
      axios 
        .get(store.apiURL);
    }
  }
}
</script>
  
<template>
  <section>
    </appHeader>
  </section>

  <section>
    </appMain>
  </section>

  <section>
    </appFooter>
  </section>
</template>

<style lang="scss">

  @use './style/general.scss';
  
</style>
