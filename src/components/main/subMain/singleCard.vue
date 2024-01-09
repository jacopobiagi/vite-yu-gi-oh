<script>
export default{
    props:{
        name:String,
        type: String,
        img: String,
    }
}
</script>
<template>
    <div class="body-card d-flex flex-column w-100">
        <div class="img-card">
            <img :src="img" :alt="img" class="w-100">
        </div>
        <h2 class="name-card w-100 text-white">{{ name }}</h2>
        <p class="type-card w-100">
            {{ type }}
        </p>
    </div>

</template>
<style lang="scss" scoped>
    .body-card{
        background-color: rgb(202, 137, 55);
        height: 100%;

        h2{
            font-size: 1.3em;
            text-align: center;
            margin-top: 5px;
        }
        p{
            text-align: center;
        }
    }
</style>