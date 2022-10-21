<template>
    <div>
        <MainSection title='Tweet' :loading="loading">
            <Head><Title></Title></Head>

        </MainSection>
    </div>
</template>
<script setup>
    const {getTweetById} = useTweet()
    const loading = ref(false)
    const getTweetIdFromRoute = ()=>{
        return useRoute().params.id
    }
    const getTweet=async()=>{
        loading.value=true
        try {
        console.log(getTweetIdFromRoute())
         const response  = await getTweetById(getTweetIdFromRoute())
         console.log(response)
        } catch (error) {
            console.log(error)
        }finally{
            loading.value =false
        }
    }
    onBeforeMount(()=>{
        getTweet()
    })

</script>