<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

import {getcategory} from '@/apis/testAPI'

import {onMounted, ref} from 'vue'

const headList = ref([]);

const getCategory = ()=>{
  getcategory().then(res=>{
    console.log(res)
    if(res.data.code == 1){
      headList.value = res.data.result
    }
  })
}

const clearCategory= ()=>{
  headList.value = []
}

onMounted(()=>{
  getCategory()
})
</script>

<template>
  <el-button @click="getCategory" type="primary">获取列表信息</el-button>
  <el-button @click="clearCategory" type="primary">清空列表信息</el-button>
  <el-button type="success">success</el-button>
  <el-button type="warning">warning</el-button>
  <el-button type="danger">danger</el-button>
  <el-button type="error">error</el-button>

  <ul class="headlist">
    <li class="headlistitem" v-for="item in headList" :key="item.id">
      <span>{{ item.name }}</span>
      <img :src="item.picture" alt="">
    </li>
  </ul>

  <!-- <RouterView /> -->
</template>

<style scoped>
.headlistitem{
  height: 120px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}
.headlistitem:last-child{
  border-bottom: none;
}
</style>
