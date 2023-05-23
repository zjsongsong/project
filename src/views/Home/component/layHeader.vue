

<script setup>


import { getcategory } from '@/apis/testAPI';
import { onMounted } from 'vue';
import {ref} from 'vue'

let categoryList = ref([])


const getCategory = async ()=>{
    const res = await getcategory()
    categoryList.value = res.data.result
}

onMounted(()=>{
    getCategory()
})

</script>
<template>
    <div>
    </div>
    <ul>
        <li v-for="item in categoryList" :key="item.id">
            <RouterLink to="/">{{item.name}}</RouterLink>
            
        </li>
    </ul>
</template>

<style scoped>
ul{
    display: flex;
    width: 80%;
    justify-content: space-around;
}
ul li{
    list-style: none;
}
</style>