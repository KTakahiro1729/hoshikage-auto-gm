<template>
  <v-stage ref="stage" 
    :config="stageConfig"
    @wheel="zoomInOut">
    <v-layer ref="base-layer">
      <image-snippet 
        :src="require(`@/assets/GameBoard/Base.png`)"
        :config="{
          width: 99,
          height: 64,
        }" />
    </v-layer>
    <v-layer ref="board-layer">
      <image-snippet :src="require(`@/assets/GameBoard/CardTypes.png`)"
        :config="{
          width: 31, height: 3,
          x: 4, y: 3}" />
      <image-snippet :src="require(`@/assets/GameBoard/Symphony_Card.png`)"
        :config="{
          width: 31, height: 10,
          x: 4, y: 6}" />
      <image-snippet :src="require(`@/assets/GameBoard/Serenade_Card.png`)"
        :config="{
          width: 31, height: 10,
          x: 4, y: 17}" />
      <image-snippet :src="require(`@/assets/GameBoard/Lullaby_Card.png`)"
        :config="{
          width: 31, height: 10,
          x: 4, y: 28}" />
      <image-snippet :src="require(`@/assets/GameBoard/Carol_Card.png`)"
        :config="{
          width: 31, height: 10,
          x: 4, y: 39}" />
      <image-snippet :src="require(`@/assets/GameBoard/Capriccio_Card.png`)"
        :config="{
          width: 31, height: 10,
          x: 4, y: 50}" />
      <image-snippet :src="require(`@/assets/GameBoard/GameBoardMap.png`)"
        :config="{
          width: 39, height: 34,
          x: 39, y: 4}" />
      <image-snippet :src="require(`@/assets/GameBoard/Fuga_Card.png`)"
        :config="{
          width: 39, height: 10,
          x: 39, y: 39}" />
      <image-snippet :src="require(`@/assets/GameBoard/NewsPaper_Card.png`)"
        :config="{
          width: 39, height: 10,
          x: 39, y: 50}" />
      <image-snippet :src="require(`@/assets/GameBoard/1F_dark.png`)"
        :config="{
          width: 15, height: 15,
          x: 81, y: 2}" />
      <image-snippet :src="require(`@/assets/GameBoard/2F_dark.png`)"
        :config="{
          width: 15, height: 15,
          x: 81, y: 13}" />
      <image-snippet :src="require(`@/assets/GameBoard/3F_dark.png`)"
        :config="{
          width: 15, height: 15,
          x: 81, y: 24}" />
      <image-snippet :src="require(`@/assets/GameBoard/Vote_Card.png`)"
        :config="{
          width: 13, height: 10,
          x: 82, y: 39}" />
      <image-snippet :src="require(`@/assets/GameBoard/Logo.png`)"
        :config="{
          width: 21, height: 15,
          x: 78, y: 49}" />
    </v-layer>
    <v-layer ref="card-layer">
      <card 
        v-for="card in allCards"
        :key="card.id"
        :src="card.src"
        :pos="card.pos"
        />
    </v-layer>
  </v-stage>
</template>

<script>
import Card from './Card.vue';
import { mapGetters } from "vuex";

import ImageSnippet from './ImageSnippet.vue';

const width = window.innerWidth;
const height = window.innerHeight;
const scaleBy = 1.1;
const initialScale = 10;

export default {
  name: 'BackGround',
  components: {
    ImageSnippet,
    Card
  },
  data() {
    return {
      stageConfig: {
        draggable: true,
        width: width,
        height: height
      },
    };
  },
  computed: mapGetters(["allCards"]),
  props: {
    src: String
  },
  mounted(){
    this.$refs.stage.getNode().scale({ x: initialScale, y: initialScale});
  },
  methods: {
    zoomInOut(e) {
      // reference: https://konvajs.org/docs/sandbox/Zooming_Relative_To_Pointer.html
      e.evt.preventDefault();

      var oldScale = this.$refs.stage.getNode().scaleX();
      var pointer = this.$refs.stage.getNode().getPointerPosition();

      var mousePointTo = {
        x: (pointer.x - this.$refs.stage.getNode().x()) /oldScale,
        y: (pointer.y - this.$refs.stage.getNode().y()) /oldScale
      }

      let direction = e.evt.deltaY < 0 ? 1 : -1;

      if (e.evt.ctrlKey) {
        direction = -direction;
      }

      var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

      this.$refs.stage.getNode().scale({ x: newScale, y: newScale});

      var newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
      this.$refs.stage.getNode().position(newPos);

    }
  }
};
</script>