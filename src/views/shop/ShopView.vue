<script setup>
import {ref, computed, onMounted} from 'vue'
import { useRoute,useRouter } from "vue-router";    
import CardProduct from '../../components/shop/CardProduct.vue';
import ProductFilter from '../../components/shop/ProductFilter.vue';
import lastpieces from "../../../db/lastpieces.json";
import axios from 'axios';

let piecesData = ref(lastpieces);
// let oeuvres = ref([]);


// const fetchOeuvres = async () => {
//       try {
//         const response = await axios.get('https://127.0.0.1:8000/api/oeuvre');
//         oeuvres.value = response.data;
//       } catch (error) {
//         console.error('Erreur lors de la requête API', error);
//       }
//     };

// onMounted(()=>{
//     fetchOeuvres();
// })

// console.log(oeuvres)

const sortOptionsHandler = (s) => {
        console.log(s)
        if(s === true){
            piecesData.value.sort((a,b) => {
                    return Number(b.year) - Number(a.year);
                });    
        }else {
            piecesData.value.sort((a,b) => {
                    return Number(a.year) - Number(b.year);
                });
        }
    }



function sortedByGenres(sort, piecesData){
    let tempArray = []
    // console.log(sort)
    if(sort && piecesData.value.length > 0){
        
        tempArray = piecesData.value
        // console.log(tempArray)
        piecesData.value = lastpieces.filter((item) => item.genre.match(sort))
        // console.log(tempArray)
    }
    else if(sort && piecesData.value.length === 0){
        piecesData.value = lastpieces.filter((item) => item.genre.match(sort))
        // console.log(piecesData.value)
    }
    else if(piecesData.value.length === 0){
        return piecesData.value = lastpieces
    }
    // console.log(tempArray)
}

const sortGenresHandler = (sortOptions) => {
        sortedByGenres(sortOptions, piecesData)
        console.log(piecesData.value)        
    }

function sortedByText(txt, piecesData){
    let tempArray = []
    // let search = ""
    console.log(txt)
    if(txt && piecesData.value.length > 0){
        // search = txt
        tempArray = piecesData.value
        // console.log(tempArray)
        piecesData.value = lastpieces.filter((item) => item.title
            .toUpperCase()
            .includes(txt.toUpperCase()))
        // console.log(tempArray)
    }
    else if(txt && piecesData.value.length === 0){
        piecesData.value = lastpieces.filter((item) => item.title.toLowerCase().includes(txt.toLowerCase()))
        // console.log(piecesData.value)
    }
    else if(txt.length === 0){
        return piecesData.value = lastpieces
    }
    // console.log(tempArray)
}
const searchingHandler = (searchOptions) => {
        sortedByText(searchOptions, piecesData)
        console.log(piecesData.value) 
        console.log(searchOptions)        
    }

function getMinMax(min,max){
    let tempMinPrice = min
    let tempMaxPrice = max
    let minMax = [0,0]
    if(tempMinPrice){
        minMax.push(tempMinPrice)
        return minMax
    }
    
    // console.log(minMax)
}

const sortPriceHandler = (minPrice,maxPrice) => {
    getMinMax(minPrice,maxPrice)
    console.info(getMinMax(minPrice,maxPrice));
    // if(min || max){
    //     // minPrice = 0
    //     // max = "6000"
    //     console.log(`min:${min},max:${max}`)
    // }
    // if(!maxPrice){
    //     minPrice = "6000"
    //     // console.log(`min:${minPrice},max:${maxPrice}`)
    // }
        // sortedByText(searchOptions, piecesData)
        // console.log(piecesData.value) 
        // console.log(minPrice)    
    return minPrice
    }

// const sortPriceHandler = (maxPrice) => {
//     getMinMax(maxPrice,'')
//     // let min = price
//     // let tempMax = max
//     // minMax.push(min,max)
//     // min = 0
//     // max = 6000
//     // console.log(min)
//     console.info(maxPrice);
//     // if(min || max){
//     //     // minPrice = 0
//     //     // max = "6000"
//     //     console.log(`min:${min},max:${max}`)
//     // }
//     // if(!maxPrice){
//     //     minPrice = "6000"
//     //     // console.log(`min:${minPrice},max:${maxPrice}`)
//     // }
//         // sortedByText(searchOptions, piecesData)
//         // console.log(piecesData.value) 
//         // console.log(minPrice)    
//     return maxPrice
//     }
// console.log(sortMaxPriceHandler);

</script>

<template>
<ProductFilter 
    @sorted-products="sortOptionsHandler"
    @sorted-genres="sortGenresHandler"
    @search-text="searchingHandler"
    @get-price-min="sortPriceHandler"
    @get-price-max="sortPriceHandler"
/>
 <div class="shop-wrapper">
    
    <CardProduct
        v-for="piece in piecesData" 
    
        :key="piece.id" 
        :id="piece.id" 
        :artist="piece.artist" 
        :title="piece.title" 
        :price="piece.price"
        :cover="piece.cover"
    />
 </div>
</template>