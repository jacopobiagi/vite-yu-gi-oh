<script>
import axios from "axios";
import { store } from "./store";

import AppHeader from './components/appHeader.vue';
import AppMain from './components/appMain.vue';
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
        .get(store.apiURL);
    }
  }
}
</script>
  
<template>
  <section>
    </AppHeader>
  </section>

  <section>
    </AppMain>
  </section>

  <section>
    </AppFooter>
  </section>
</template>

<style lang="scss">

  @use './style/general.scss';
  
</style>
