<script setup>
import { ref } from 'vue'

const props = defineProps({
        text: String,
        color: String,
        icon: String,
        link: String
    })

</script>
<template>
    <router-link :to="`/${props.link}`">
        <button :class="props.color">
            <p class="more">{{props.text}}</p>
              <img class="icon" :src="`/img/${props.icon}`">
        </button>
    </router-link>
</template>
<style scoped>
</style>