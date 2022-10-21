<template>
    <div class="flex items-center justify-around w-full">
        <TweetItemActionsIcon color='blue' @on-click="emits('onCommentClick')" :size="size">
            <template v-slot:icon="{classes}">
                <ChatIcon :class="classes"/>
            </template>
            <template v-slot:default v-if="showStatus">
                <span>
                    {{props.tweet.repliesCount}}
                </span>
                
            </template>
        </TweetItemActionsIcon>

        <TweetItemActionsIcon color='green' :size="size">
            <template v-slot:icon="{classes}">
                <RefreshIcon :class="classes"/>
            </template>
            <template v-slot:default v-if="showStatus">
                <span>
                    {{generateRandomNumber()}}
                </span>
                
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon color='red' :size="size">
            <template v-slot:icon="{classes}">
                <HeartIcon :class="classes"/>
            </template>
            <template v-slot:default v-if="showStatus">
                <span>
                    {{generateRandomNumber()}}
                </span>
                
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon color='yellow' :size="size">
            <template v-slot:icon="{classes}">
                <UploadIcon :class="classes"/>
            </template>
            <template v-slot:default v-if="showStatus">
                <span>
                    {{generateRandomNumber()}}
                </span>
                
            </template>
        </TweetItemActionsIcon>
    </div>
</template>
<script setup>
    import {ChatIcon,RefreshIcon,HeartIcon,UploadIcon} from '@heroicons/vue/outline'
    
    const emits =defineEmits(['onCommentClick'])
    
    const props = defineProps({
        tweet:{
            type:Object,
            required:true
        },
        compact:{
        type:Boolean,
        default:false
    }
    })
    const showStatus = computed(()=>props.compact)
    const size = computed(()=>props.compact? 5:8)
    const generateRandomNumber = ()=>{
        return Math.floor(Math.random() *100)
    }

</script>