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
    onBeforeMount(async()=>{
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
    })

</script>