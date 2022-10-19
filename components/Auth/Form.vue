<template>
    <div class="pt-5 space-y-6">
        <h2>{{data.username}}</h2>
        <UIInput 
        v-model="data.username"
        label="Username" 
        placeholder="@username"
        />
        <h2>{{data.password}}</h2>
        <UIInput 
        label="Password" 
        placeholder="@password" 
        type="password"
        v-model="data.password"
        />
        <div>
            <button @click="handleLogin">Login</button>
        </div>
    </div>    
</template>
<script setup>
const {login} = useAuth()


const data = reactive({
    username:'',
    password:'',
    loading:false
})

const handleLogin = async ()=>{
    data.loading=true
    try {
    await login({
        username:data.username,
        password:data.password
    })
    } catch (error) {
    console.log(error)    
    } finally{
    data.loading=false
    }
}

</script>