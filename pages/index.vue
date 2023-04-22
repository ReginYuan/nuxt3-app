<template>
  <div class="flex items-center flex-col gap-2">
    <!-- <h1>Index Page</h1>
    <div>
      <NButton>hello</NButton>
    </div>
    <NuxtLink to="/detail/1">detail 1</NuxtLink> -->
    <div v-for="post in posts" :key="post.id">
      <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
        post.title
      }}</NuxtLink>
      <p class="text-slate-500">发布于: {{ post.date }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
// const posts = await $fetch("/api/posts");

// 页面、组件或者插件中可以使用useFetch获取任意 URL 资源
// const { data: posts, pending, error } = await useFetch('/api/posts')

// 该方法等效于useFetch设置了lazy选项为 true，
// 不同之处在于它不会阻塞路由导航，这意味着我们需要处理 data 为 null 的情况（或者通过 default 选项给 data 设置一个默认值）。
const { data: posts, pending, error } = await useLazyFetch('/api/posts')
console.log('posts', posts)


</script>