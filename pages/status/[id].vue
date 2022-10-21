
<template>
    <div>
        <MainSection title='Tweet' :loading="loading">
            <Head><Title></Title></Head>
           <TweetDetail v-if="tweet" :tweet="tweet"  :user="user"/>
           <div v-else class="p-4">
            <p class="text-center text-gray-500">No Tweets </p>
        </div>
        </MainSection>
    </div>
</template>
<script setup>
    const {getTweetById} = useTweet()
    const {useAuthUser} = useAuth()

    const loading = ref(false)
    const tweet = ref(null)
    const user =  ref(useAuthUser())
    const tweetId = ()=>{
        return useRouter().currentRoute.value.params.id
    }
    const getTweet=async()=>{
        loading.value=true
        try {
        const response  = await getTweetById(tweetId())
        tweet.value = response.tweet
        } catch (error) {
            console.log(error)
        }finally{
            loading.value =false
        }
    }
    watch(()=>useRoute().fullPath,()=>{
    getTweet()
},{ immediate: true, deep: true })
    onBeforeMount(()=>{
            getTweet()
    })
</script>