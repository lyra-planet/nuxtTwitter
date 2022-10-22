<template>
    <div class="h-screen flex flex-col justify-between">
    <div>
        <div class="p-2 my-2 hover:bg-blue-300 rounded-full w-min
        dark:hover:bg-white/20 " :class="defaultTransition">
        <nuxt-link to="/">
            <div class="w-8 h-8">
            <LogoTwitter/>
        </div>
        </nuxt-link>
    </div>
    <div class="mt-2 space-y-3">
        <SiderBarLeftTab active>
        <template v-slot:icon>
            <HomeIcon/>
        </template>
        <template v-slot:name>
            Home
        </template>
    </SiderBarLeftTab>

    <SiderBarLeftTab active>
        <template v-slot:icon>
            <HashtagIcon/>
        </template>
        <template v-slot:name>
            Explore
        </template>
    </SiderBarLeftTab>

    <SiderBarLeftTab active>
        <template v-slot:icon>
            <BellIcon/>
        </template>
        <template v-slot:name>
            Notifications
        </template>
    </SiderBarLeftTab>

    <SiderBarLeftTab active>
        <template v-slot:icon>
            <InboxIcon/>
        </template>
        <template v-slot:name>
            Messages
        </template>
    </SiderBarLeftTab>

    <SiderBarLeftTab active>
        <template v-slot:icon>
        <BookmarkIcon/>
        </template>
        <template v-slot:name>
            Bookmarks
        </template>
    </SiderBarLeftTab>

    <SiderBarLeftTab active>
        <template v-slot:icon>
        <DocumentTextIcon/>
        </template>
        <template v-slot:name>
            Lists
        </template>
    </SiderBarLeftTab>

    <SiderBarLeftTab active>
        <template v-slot:icon>
        <UserIcon/>
        </template>
        <template v-slot:name>
            Profile
        </template>
    </SiderBarLeftTab>

    <SiderBarLeftTab active>
        <template v-slot:icon>
        <DotsCircleHorizontalIcon/>
        </template>
        <template v-slot:name>
           More
        </template>
    </SiderBarLeftTab>
    <div class="hidden xl:block">
        <UIButton liquid size="lg" @on-click="emits('onTweet')">
            <strong>
                Tweet
            </strong>

        </UIButton>
    </div>
    <div class="block xl:hidden">
        <UIButton @on-click="emits('onTweet')">
            <div class="w-6 h-6 font-blod">
                <PencilAltIcon/>
            </div>
        </UIButton>
    </div>
    </div>
    </div>

    <div 
    @click="emits('onLogout')"
    :class="defaultTransition"
    class="flex flex-row items-center 
    px-2 py-2 mx-auto mt-auto mb-5
     justify-center 
    rounded-full cursor-pointer w-14 xl:w-full 
    hover:bg-gray-100 dark:hover:bg-dim-800 ">
    <div class="flex flex-row">
    <img :src="props.user.profileImage" class="w-10 h-10 rounded-full">
        <div class="flex-col hidden ml-2 xl:block">
            <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                {{user.name}}
            </h1>
            <p class="text-sm text-gray-400">
                {{user.handle}}
            </p>
        </div>
    </div>
    <div class="hidden ml-auto xl:block ">
        <div class="w-6 h-6 ">
            <ChevronDownIcon/>
        </div>
    </div>
    </div>
    </div>
</template>
<script setup> 
import {HomeIcon,} from '@heroicons/vue/solid' 
import {HashtagIcon,BellIcon,InboxIcon,BookmarkIcon,
DocumentTextIcon,UserIcon,DotsCircleHorizontalIcon,PencilAltIcon,
ChevronDownIcon
} from '@heroicons/vue/outline' 
const {defaultTransition}  = useTailwindConfig()
const emits = defineEmits(['onTweet','onLogout'])
const props = defineProps({
    user:{
        type:Object,
        required:true
    }
})
</script>