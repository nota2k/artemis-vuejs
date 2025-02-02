<script setup>
    import { ref } from 'vue'
    import CTAButtonVue from '../../CTAButton.vue';
</script>

<template>
    <section class="join-us flex">
        <div class="flex-2">
            <div class="container">
                <h2>want to join us ?</h2>
                <CTAButtonVue
                    :color="'white'"
                    :text="'Subscribe'"
                    :icon="'circle-arrow-right.svg'"
                />
            </div>
        </div>
        <div class="flex-2">
            <div class="container">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </div>
        </div>
    </section>
</template>
<style scoped>
</style>