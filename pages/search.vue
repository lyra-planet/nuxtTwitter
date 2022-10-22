<template>
    <div>
        <MainSection title='Home' :loading="loading">
            <Head><Title>Search</Title></Head>

            <TweetListFeed :tweets="searchTweets"/>
        </MainSection>
    </div>
</template>
<script setup>
    const {getTweets} = useTweet()
    const loading = ref(false)
    const searchTweets = ref([])
    const searchQuery = useRouter().currentRoute.value.query.q
    const route = useRoute()
    onBeforeMount(()=>{
        getTweetsFunc()
    })
    const getTweetsFunc = async()=>{
        loading.value=true
        console.log(searchQuery)
        try {
         const {tweets}  = await getTweets({
            query:searchQuery
         })
         searchTweets.value = tweets
        } catch (error) {
            console.log(error)
        }finally{
            loading.value =false
        }
    }
    watch(()=>route.fullPath,()=>getTweetsFunc(),{ immediate: true, deep: true })
</script>