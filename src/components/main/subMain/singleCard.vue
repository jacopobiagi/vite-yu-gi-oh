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
    <div class="d-flex flex-column">
        <h2>{{ name }}</h2>
        <div>
            <img :src="img" :alt="img">
        </div>
        <p>
            {{ type }}
        </p>
    </div>

</template>
<style>

</style>