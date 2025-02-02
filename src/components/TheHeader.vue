<script setup>
import { ref, onMounted } from 'vue'
import { useRoute,useRouter } from "vue-router";

const router = useRouter();

function sortWithIndex(arr) {
    let result = [];
    let ArrLength = arr.length;
    for (let i = 0; i < ArrLength; i++) {
        const number = arr[i];
        const indexOfNumber = i;
        result.push(indexOfNumber);
    };
    return result
};

function calculateElementPosition(el) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const elementTop = el.offsetTop;
  // console.log(elementTop);
  const position = elementTop - scrollTop;
  if(position < -176 ){
    el.classList.remove('hidden')
    el.classList.add('show')
  }if(position >= -177 && el.classList.contains("show")){
    el.classList.remove('show')
    el.classList.add('hidden')
  }else if(position > -100){
    el.classList.remove('hidden')
  }
  // console.log('Position of the element:', position);
}

onMounted(() => {
    const navMini = document.querySelector('.nav-mini')
    const menuFull = document.querySelector('.menu-full');
    const body = document.querySelector('body');
    const logoMini = document.querySelector('.logo-mini')

    navMini.addEventListener('click', () => {
        navMini.classList.toggle("is-active");
        menuFull.classList.toggle("is-open");
        body.classList.toggle("is-full-nav");
    })

    window.addEventListener('scroll',()=>{
      calculateElementPosition(logoMini)
    })

    const menuItem = document.querySelectorAll('.menu-item')
    const thmbDiv = document.querySelectorAll('.thmb')

    sortWithIndex(menuItem);

    for (let i = 0; i <= sortWithIndex(menuItem).length-1; i++) {
        menuItem[i].addEventListener('mouseenter', () => {
            if (sortWithIndex(menuItem).indexOf(i) === sortWithIndex(thmbDiv).indexOf(i)) {
                thmbDiv[i].classList.add('visible')
                menuItem[i].addEventListener('mouseleave', () => {
                    thmbDiv[i].classList.remove('visible')
                })
            }
        })
    }
})
</script>
<template>
    <header>
        <div class="header-wrapper">
            <div class="logo-container">
                    <router-link to="/" >
                        <img class="logo" src="../assets/img/Logo.png">
                        <img class="logo-mini" src="../assets/img/logo-lettre.png">
                    </router-link>
            </div>
            <div class="menu-full">
                <div class="thmb-container">
                    <div class="thmb"><img src="../assets/img/thmb-about-us.jpg" alt=""></div>
                    <div class="thmb"><img src="../assets/img/thmb-artists.jpg" alt=""></div>
                    <div class="thmb"><img src="../assets/img/thmb-join-us.jpg" alt=""></div>
                    <div class="thmb"><img src="../assets/img/thmb-contact.jpg" alt=""></div>
                </div>
                <nav class="full-nav">
                    <a href="/aboutus" >
                        <li class="menu-item">About</li>
                    </a>
                    <a href="/shop" >
                        <li class="menu-item">Artists</li>
                    </a>
                    <a href="/joinus" >
                        <li class="menu-item">Joins Us</li>
                    </a>
                    <a href="/contact" >
                        <li class="menu-item">Contact</li>
                    </a>
                </nav>
            </div>
            <div class="nav-mini">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
    </header>
</template>
<style scoped>
</style>