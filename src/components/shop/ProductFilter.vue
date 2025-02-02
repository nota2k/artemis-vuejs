<script setup>
import { ref } from 'vue';

const emit = defineEmits(['sortedProducts','sortedGenres','searchText','getPriceMin','getPriceMax'])

const sortByDate = ref(false)

const sortResults = (event) => {
    sortByDate.value = !sortByDate.value
    // console.log(sortByDate.value)
  emit('sortedProducts', sortByDate.value)
}

//Filtrer par genre
const sortOptions = ref("")
const sortOptionsEvent = () => {
        emit('sortedGenres',sortOptions.value)
        // console.log('la fonction enfant')
    }

//Recherche
const searchOptions = ref("")
const searchOptionsEvent = () => {
        emit('searchText',searchOptions.value)
    }

//Filtrer par prix
const minPrice = ref(Number("0"))
const maxPrice = ref(Number("6000"))

const priceMinValueEvent = () => {
        emit('getPriceMin',minPrice.value)
        // emit('sortByPrice',maxPrice.value)
    }

const priceMaxValueEvent = () => {
        emit('getPriceMax',maxPrice.value)
        // emit('sortByPrice',maxPrice.value)
    }
    // console.log(minPrice.value,maxPrice.value)
</script>

<template>
    <div class="filter-wrapper">
        <button 
            @click="sortResults" class="newest" 
            :value="sortByDate"
            >
            New
        </button>
        <!-- <input class="price-filter" min="0" max="6000" type="range"> -->
        <div class="price-filter">
            <input type="number" placeholder="Minimum" 
                v-model.number="minPrice"
                @input="$emit('getPriceMin', $event.target.value)"
            >
            <input type="number" placeholder="Maximum"
                v-model.number="maxPrice"
                @input="$emit('getPriceMax', $event.target.value)"
            >
        </div>
        <div class="genres">
            <button class="select-filter">
                Abstract
            </button>
        </div>
            <select name="genres" id="genres-select"
                v-model="sortOptions"
                @change="sortOptionsEvent">
              <option value="">Genres</option>
              <option value="Abstract">Abstract</option>
              <option value="Illustration">Illustrations</option>
              <option value="Paintings">Paintings</option>
              <option value="Photography">Photography</option>
            </select>
        <input type="text" placeholder="Rechercher" 
            
            v-model="searchOptions"
            @input="$emit('searchText', $event.target.value)"/>
    </div>
</template>
<style scoped>
</style>