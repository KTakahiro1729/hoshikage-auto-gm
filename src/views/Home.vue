<template>
  <div class="home">
    <BackGround :src="require(`@/assets/GameBoard/Base.png`)" />
  </div>
</template>

<script>
// @ is an alias to /src
import BackGround from '@/konva/BackGround.vue'

export default {
  name: 'Home',
  components: {
    BackGround
  }
}
</script>
