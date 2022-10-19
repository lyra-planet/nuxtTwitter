import { UISpinner } from '../.nuxt/components';
<template>
    <div class="border-x" :class="twitterBorderColor">
        <div class="sticky top-0 px-4 bg-white/80 
    backdrop-blur-md
    dark:bg-dim-900/80
    ">
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray">{{props.title}}</h2>
        <div v-if="props.loading" class="flex items-center justify-center
        p-4 border-b" :class="twitterBorderColor">
        <UISpinner/>
        </div>
        <slot/>
    </div>
    </div>

</template>
<script setup>
const {twitterBorderColor} = useTailwindConfig()
const props = defineProps({
    title:{
        type:String,
        required:true
    },
    loading:{
        type:Boolean,
        required:true
    }
})

</script>