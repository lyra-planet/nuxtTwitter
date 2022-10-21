<template>
    <div>
        <div v-if="isEmptyArray" class="p-4">
            <p class="text-center text-gray-500">No Tweets </p>
        </div>
        <div
        v-else
        class="
        pb-4 
        cursor-pointer
        border-b 
        hover:bg-gray-100
        dark:hover:bg-dim-300" 
        :class="[twitterBorderColor,defaultTransition]" 
        v-for="tweet in props.tweets"
        @click.native="redirect(tweet)"
        >
            <TweetItem  :tweet="tweet" :key="tweet.id" :compact="true"/>
        </div>
    </div>
</template>
<script setup>
const {twitterBorderColor,defaultTransition} =useTailwindConfig()
const isEmptyArray = computed(()=>props.tweets.length===0)

const props = defineProps({
    tweets:{
        type:Array,
        required:true
    }
})
const redirect=(tweet)=>{
    navigateTo(`/status/${tweet.id}`)
}
</script>