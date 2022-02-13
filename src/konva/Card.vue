<template>
  <image-snippet
    :src="require(`@/assets/Cards/`+src)"
    :config="{
      width: 5,
      height: 7,
      x: pos[0],
      y: pos[1]
      }"
    @rightclick="rightClick"/>
</template>

<script>
import ImageSnippet from './ImageSnippet.vue';
export default {
  components: { ImageSnippet },
  name: 'Card',
  methods: {
    rightClick() {
      console.log("hello");
    },
  },
  props: {
    src: String,
    pos: {
      type: Array,
      default: ()=>([0,0]),
      require : false
    }
  },
};
</script>