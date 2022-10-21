<template>
    <div class="h-screen">
        <div class="p-2 my-2 hover:bg-blue-300 rounded-full w-min
        dark:hover:bg-white/20 " :class="transition">
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
        <UIButton liquid size="lg">
            <strong>
                Tweet
            </strong>

        </UIButton>
    </div>
    <div class="block xl:hidden">
        <UIButton>
            <div class="w-6 h-6 font-blod">
                <PencilAltIcon/>
            </div>
        </UIButton>
    </div>
    </div>

    </div>

</template>
<script setup> 
import {HomeIcon,} from '@heroicons/vue/solid' 
import {HashtagIcon,BellIcon,InboxIcon,BookmarkIcon,
DocumentTextIcon,UserIcon,DotsCircleHorizontalIcon,PencilAltIcon
} from '@heroicons/vue/outline' 
const {defaultTransition}  = useTailwindConfig()
const transition = 'transition ease-in-out duration-350'
</script>