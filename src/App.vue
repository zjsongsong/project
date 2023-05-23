<script setup>
import { RouterLink, RouterView } from 'vue-router'

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
  // getCategory()
})
</script>

<template>

  <RouterView />
  <div>
    <p class="test">test scss</p>
    <i class="iconfont icon-weibo"></i>
  </div>
  <!-- <el-button @click="getCategory" type="primary">获取列表信息</el-button>
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
  </ul> -->

  <!-- <RouterView /> -->
</template>

<style scoped lang="scss">
html, body{
  height: 100%;
  width: 100%;
}

.headlist{
  padding: 0;
  margin: 0;
  border: 1px solid #eee;
  min-width: 400px;
  max-width: 80%;
  padding:  0 40px;
}
.headlistitem{
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
}
.headlistitem:last-child{
  border-bottom: none;
}
.test{
  color: $xtxColor
}
</style>
