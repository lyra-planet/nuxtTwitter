<template>
    <div>
        <label 
        for="" 
        class="block pl-3 ml-px text-sm font-medium text-gray-700"
        v-if="props.label"
        >{{props.label}}</label>
        <div class="mt-1">
            <input 
            @input="event => emits('update:modelValue',event.target.value)"
            :value="props.modelValue"
            class="block px-4 w-full rounded-full
             border-gray-300 shadow-sm 
             focus:ring-blue-500
            focus:border-blue-500
            sm:text-sm"
            :placeholder="props.placeholder"
            :type="props.type">
        </div>

    </div>
</template>

<script setup>
const emits = defineEmits('update:modelValue')

const props = defineProps({
    modelValue:{
        type: String,
        required:true
    },
    placeholder:{
        type: String,
        default:''
    },
    type:{
        type: String,
        default:'text'
    },
    label:{
        type:String,
        default:null
    }
})


</script>