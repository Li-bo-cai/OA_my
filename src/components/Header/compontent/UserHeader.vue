<template>
  <div class="user_info">
    <img :src="require('@/assets/images/1.jpg')" alt="">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.user_info {
  display: flex;
  flex-direction: row-reverse;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>