<script setup lang="ts">
import { ref } from 'vue'

const params = {
  theme: 'dark'
}

const strParams = JSON.stringify(params)

const iframeUrl = ref(`../dist/src/wallet/index.html?params=${strParams}`)
</script>

<template>
  <section>
    <iframe class="mainIframe" :src="iframeUrl" />
  </section>
</template>

<style scoped lang="scss">
.mainIframe {
  width: 100%;
  height: 100vh;
  border: solid 1px red;
}
</style>
