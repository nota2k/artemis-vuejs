<script setup>
    import {ref} from 'vue'
    import { useRoute } from "vue-router";    
    import { onMounted } from 'vue';
    import lastpieces from "../../../db/lastpieces.json";
    import CardProduct from "../../components/shop/CardProduct.vue";
    import axios from "axios";

    const route = useRoute();
    const product = ref(lastpieces.find(p => p.id.toString() === route.params.id));

    onMounted(async () => {
        const response = await axios.get(`https://66338479f7d50bbd9b49a6d7.mockapi.io/artemis/api/pieces/${route.params.id}`);
        product.value = response.data;
    });
    
    

</script>

<template>
    <div class="ariane-container">
        
        <router-link to="/shop">
            <v-icon 
                name="px-arrow-left-box" 
                fill="blue"
            />
            Retour
        </router-link>

    </div>
    <div class="single-product-wrapper grid">
        <!------Colonne galerie----->
        <div class="product-gallery-column">
            <div class="product-image-wrapper">
                <img v-if="product" :src="`${product.cover}`" class="product-img"/>
            </div>
        </div>

        <!------Colonne informations----->
        <div class="product-info-column">
            <h2>{{product.title}}</h2>
            <p class="artist">{{product.artist}}</p>
            <p class="year">{{ new Date(product.year).getFullYear() }}</p>
            <p class="price">{{product.price}} €</p>
            <p class="ugd">1923F9</p>
            <p class="description">{{product.description}}</p>
            <div class="product-meta">
            </div>
        </div>

    </div>
    <div class="cross-products">
        <h2>Produits similaires</h2>
        <div class="cross-container">
            <CardProduct v-for="product in lastpieces" :key="product.id" :id="product.id" :title="product.title" :artist="product.artist" :price="product.price" :cover="product.cover"/>
        </div>
    </div>
</template>
<style type="text/css">
    main{
        gap:0;
        align-items: start;
        margin:0 2em;
    }
    .single-product-wrapper > div{
        width: 100%;
        max-width: 100%;
    }

    @media(min-width: 900px){
        .single-product-wrapper > div{
            flex-grow:2;
            max-width:48%;
        }
    }
    .single-product-wrapper{
        margin: 2em 0;
        display:flex;
        flex-wrap:wrap;
        gap:2em;
    }

    .product-image-wrapper{
        border:2px solid blue;
        padding: 2em;
    }

    .product-info-column{
        display: flex;
        flex-direction: column;
        gap:1rem;
    }

    h2{
        font-family: Aker Brygge Display;
        font-size: 3.288rem;
        color:var(--blue);
        text-transform: uppercase;
        margin:0;
    }

    .artist{
        font-weight: bold;
        font-size: 1.5rem;
    }

    .ariane-container{
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .cross-products{
        margin: 2em 0;
    }
    
    .cross-products h2{
        font-size:2.5rem;
        margin:1em auto;
        padding-top:1em;
        border-top: 1px solid blue;
    }

    .cross-container{
        display:flex;
        gap:1em;
    }
</style>