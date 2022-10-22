<template>
    <div class="flex flex-col">
        {{search}}
        <!-- Search Bar -->
        <div class="relative m-2 mt-5 ">
            <div class="absolute flex items-center h-full pl-4
             text-gray-600 cursor-pointer">
                <div class="w-6 h-6">
                    <SearchIcon @click="handleSearch"/>
                </div>
            </div>
            <input 
                v-model="search"
                class="flex items-center 
                w-full pl-12 tex-sm  
                font-normal text-gray-900
                dark:text-gray-100
                bg-gray-200 border 
                border-gray-200 rounded-full 
                shadow dark:bg-dim-400 
                dark:border-dim-400 focus:bg-gray-100 
                dark:focus:bg-dim-900 
                focus:outline-none focus:border-blue-200 h-9"
                type="text"
                placeholder="Search Twitter"
                />
        </div>

        <!-- Preview Card : What's happening -->
        <SiderBarRightPreviewCard title="What's happening">
            <SiderBarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-gray-800 text-md 
                    dark:text-white">{{whatsHappening.title}}</h2>
                    <p class="text-xs text-gray-400 ">{{whatsHappening.count}}</p>
                </div>
            </SiderBarRightPreviewCardItem>
        </SiderBarRightPreviewCard>
        <!-- Preview Card : Who to follow -->
        <SiderBarRightPreviewCard title="Who to follow">
            <SiderBarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row justify-between  items-center p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">
                        <div class="flex flex-col ml-2">
                        <h1 class="text-sm font-bold text-gray-900
                        dark:text-white">{{whoToFollow.name}}</h1>
                        <p class="text-xs text-gray-400">{{whoToFollow.handle}}</p>
                    </div>
                    </div>
                    <div class="flex h-full">
                        <div class="px-4 py-2 font-bold rounded-full
                        text-white dark:text-black bg-black
                        dark:bg-white">Follow</div>
                    </div>
                </div>
            </SiderBarRightPreviewCardItem>
        </SiderBarRightPreviewCard>

        <footer>
            <ul class="mx-2 my-4 text-xs text-gary-500 dark:text-white">
                <li class="inline-block mx-2 ">
                    <a href="#" class=" hover:underline" @click.prevent="handleDarkMode">DarkMode</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class=" hover:underline">Privacy Policy</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class=" hover:underline">Cookie Policy</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class=" hover:underline">Accessability</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class=" hover:underline">Ads info</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class=" hover:underline">More</a>
                </li>
                <li class="inline-block mx-2 ">
                    © 2022 Twitter , Inc.
                </li>
            </ul>
        </footer>

    </div>
</template>
<script setup> 
import {SearchIcon} from '@heroicons/vue/outline'
const emitter = useEmitter()
const search = ref('')

const handleSearch = ()=>{
   useRouter().push({
    path:'/search',
    query:{
        q:search.value
    }
   })
}


const whatsHappeningItems = ref([
    {
        title:'SpaceX',
        count:'18.8k Tweets'
    },
    {
        title:'#CodingIsFun',
        count:'8.8k Tweets'
    },    
    {
        title:'#artforall',
        count:'18.8k Tweets'
    }
])
const whoToFollowItems = ref([
    {
        name:'Chuigda',
        handle:'@Chuigda',
        image:'https://picsum.photos/200/200'
    },    
    {
        name:'LittleFly',
        handle:'@LittleFly',
        image:'https://picsum.photos/200/200'
    },
    {
        name:'Wyatt',
        handle:'@Wyatt',
        image:'https://picsum.photos/200/200'
    },
    {
        name:'Lyra',
        handle:'@Lyra',
        image:'https://picsum.photos/200/200'
    }

])
const handleDarkMode = ()=>{
    emitter.$emit('toggleDarkMode')
}
</script>