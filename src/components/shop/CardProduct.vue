<script setup>
import { ref } from 'vue';
import { useRoute,useRouter } from "vue-router";

const props = defineProps({
        id: Number,
        title: String,
        artist: String,
        price: Number,
        cover: String
    })

</script>

<template>
    
    <div class="product-wrapper">
        <router-link :to="`/shop/product/${props.id}`" >
        <div class="product-thmb">
            <img :src="`/img/${props.cover}`" class="product-img-thmb"/>
        </div>
        <div class="product-info-wrapper">
            <p class="product-title">{{ props.title }}</p>
            <p class="product-artist">{{ props.artist }}</p>
            <p class="product-price">{{ props.price }} €</p>
        </div>
        </router-link>
    </div>
</template>
<style scoped>
</style>