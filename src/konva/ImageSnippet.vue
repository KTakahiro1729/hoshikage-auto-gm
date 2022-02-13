<template>
  <v-image ref="image"
    :config="imageConfig"
    @contextmenu="rightClick"/>
</template>

<script>
const pxPerBlock = 1; // required when using antialias

export default {
  name: 'ImageSnippet',
  data() {
    return {
      imageConfig:{
        image: null,
        width: 0,
        height: 0, 
        x: 0,
        y: 0,
        
      },
    };
  },
  props: {
    config: {
      type: Object,
      default: ()=>({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
      })
    },
    antialias: Boolean,
    src: String,
  },
  created() {
    const image = new window.Image();
    image.src = this.src;
    image.onload = () => {
      // set image only when it is loaded
      this.imageConfig.image = image;

      // rather good for antialias but bad for hires cards
      // currently not worth it
      // this.$nextTick(() => {
      //   const node = this.$refs.image.getStage();
      //   node.cache();
      //   node.getLayer().batchDraw();
      // });
    };
    this.imageConfig.x = this.config.x * pxPerBlock >> 0
    this.imageConfig.y = this.config.y * pxPerBlock >> 0
    this.imageConfig.width = this.config.width * pxPerBlock
    this.imageConfig.height = this.config.height * pxPerBlock
  },
methods: {
    rightClick(event) {
      event.evt.preventDefault();
      this.$emit('rightclick')
    }
  },
};
</script>