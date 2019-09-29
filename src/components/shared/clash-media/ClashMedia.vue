<template>
  <b-media tag="li" class="mb-2">
    <template v-slot:aside>
      <b-img
        v-rl-transform:rotate.animate="20"
        :src="`http://www.clashapi.xyz/images/${type}/${item.idName}.png`"
        width="120"
        height="150"
        :alt="`${item.name}`"
      ></b-img>
    </template>
    <h5 class="mt-0 mb-1">{{ item.name }}</h5>
    <slot></slot>
  </b-media>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    },
    type: {
      required: true,
      type: String
    }
  }
};
</script>
