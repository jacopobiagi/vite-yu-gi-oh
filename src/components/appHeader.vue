<script>
export default{
    data(){
        return{
            logo:'https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg',
        }
    },
}
</script>

<template>

    <header class="d-flex align-items-center">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <img :src="logo" alt="logo" class="w-100">
        </div>
        
        <h1>Yu-Gi-Oh Api</h1>
    </header>

</template> 

<style lang="scss" scoped>
    header{
        width: 100vw;
        height: 70px;
        padding-left: 10px;
        div{
            width: 100px;
        }
    }
</style>
