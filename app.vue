<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <LoadingPage v-if="isAuthLoading"/> 

      <!-- App -->
      <div v-else-if="user" class="min-h-full">
      <div class="grid 
      grid-cols-12 
      mx-auto 
      sm:px-6 
      lg:max-w-7xl 
      lg:px-8
      lg:gap-5" >
      <!-- Left -->
      <div class="hidden md:block xs:col-span-1 xl:col-span-2">
        <div class="sticky top-0">
          <SiderBarLeft :user="user" 
          @on-tweet="handleOpenTweetModal" 
          @on-logout="handleUserLogout"/>
        </div>
      </div>
      <!-- Main -->
      <main class=" col-span-12 md:col-span-8 xl:col-span-6 bg-white-500">
       <router-view />
      </main>

      <!-- Right -->
      <div class="hidden md:block xl:col-span-4 md:col-span-3">
        <div class="sticky top-0">
          <SiderBarRight/>
        </div>
      </div>
      </div>
      </div>
      
      <AuthPage v-else/>

      <UIModal :isOpen="postTweetModal" @on-close="handleModalClose">
        <TweetForm :replyTo="replyTweet" showReply :user="user" @on-success="handleFormSuccess"/>
      </UIModal>

    </div>
  </div>
</template>
<script setup>
import LoadingPage from "./components/LoadingPage.vue";
const {useAuthUser,initAuth,useAuthLoading,logout} = useAuth()
const {
  closePostTweetModal,
  openPostTweetModal,
  usePostTweetModal,
  useReplyTweet}=useTweet()
const darkMode = ref(false)
const postTweetModal =  usePostTweetModal()
const emitter = useEmitter()
const replyTweet = useReplyTweet()
const isAuthLoading = useAuthLoading()
const user = useAuthUser()

emitter.$on('replyTweet',(tweet)=>{
  openPostTweetModal(tweet)
})

emitter.$on('toggleDarkMode',()=>{
 darkMode.value = !darkMode.value
})

const handleFormSuccess = (tweet)=>{
  closePostTweetModal()
  navigateTo({
        path: `/status/${tweet.id}`
    })
}
const handleModalClose = ()=>{
  closePostTweetModal()
}

const handleOpenTweetModal = ()=>{
  openPostTweetModal(null)
}

const handleUserLogout = ()=>{
  logout()
}
onBeforeMount(() => {
  initAuth()
})
</script>
