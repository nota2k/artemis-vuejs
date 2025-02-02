<script setup>
import { useRoute,useRouter } from "vue-router";
import { ref, onMounted } from 'vue';
import CardLastPieceVue from './CardLastPiece.vue';
import CTAButton from '../../CTAButton.vue';
import lastpieces from "../../../../db/lastpieces.json";

import artemisAPI, { fetchAllData } from '../../../services/api.js';

const piecesData = lastpieces;
const router = useRouter();
const artistes = ref([]);

function calculateElementPosition(el) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const elementTop = el.offsetTop;
  const position = elementTop - scrollTop;

  // console.log('Position of the element:', position);
}

onMounted(async() => {
    // fetchAllData(artistes);
    try{
        const endpoint = '/artistes/203';
        const result = await fetchAllData(endpoint);
        artistes.value = result
        console.log(artistes.value.nom)
    } catch(error){
        console.error('Erreur lors de l\'appel de fetchData dans le composant', error);
    }

    // console.log(fetchAllData(artistes))
    const el = document.querySelector('section.news')
    window.addEventListener('scroll', calculateElementPosition(el));
})
</script>
<template>
    <section class="news grid">
        <aside class="cat-wrapper">
            <h1 class="cat-title">Last pieces</h1>
        </aside>
        <CardLastPieceVue 
        v-motion
         :initial="{
            opacity: 0,
            y: 100,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 200,
              duration: 1400,
              type: 'keyframes',
              ease: 'circOut',
            },
          }" 
        v-for="(piece, index) in piecesData" 
        :key="piece.id" 
        :id="piece.id" 
        :artist="piece.artist" 
        :title="piece.title" :cover="piece.cover" 
        />
        
            <CTAButton
                :color="'blue'"
                :text="'More artist'"
                :icon="'circle-arrow-right.svg'"
                :link="'shop'"
            />
    </section>
</template>
<style scoped>
</style>