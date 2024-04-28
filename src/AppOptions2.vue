<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loader } from '@/main.loader'

onMounted(async () => {
  const options = {
    root: '#root-iframe',
    url: '../dist/src/wallet/index.html',
    styles: 'body{background:red}',
    // styles: '../../assets/inject.css',
    styleType: 'inline',
    props: {
      theme: 'dark'
    }
  }

  const isReady = await loader(options)

  console.log(isReady)
})
</script>

<template>
  <section id="root-iframe"></section>
</template>

<style scoped lang="scss">
.mainIframe {
  width: 100%;
  height: 100vh;
  border: solid 1px red;
}
</style>
