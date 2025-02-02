<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        id: Number,
        title: String,
        artist: String,
        cover: String
    })

</script>

<template>
    <div :id="'card0'+props.id" class="card">
        <div class="card-wrapper">
            <img class="img-piece" :src="`/img/${props.cover}`" />
            <div class="info-piece">
                <p class="artist">{{props.artist}}</p>
                <hr>
                <p class="title">{{props.title}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>