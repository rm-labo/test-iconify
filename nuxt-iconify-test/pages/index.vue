<template>
  <div style="font-size: 2rem;">
    <h1>iconify test nuxt(v2)</h1>
    <div>
      <IconBase icon-name="ep:circle-close" />
      <IconBase icon-name="ep:aim" />
      <IconBase icon-name="ep:alarm-clock" />
      <IconBase icon-name="ep:apple" />
      <IconBase icon-name="ep:arrow-down" />
      <IconBase icon-name="ep:avatar" />
      <IconBase icon-name="ep:baseball" />
      <IconBase icon-name="ep:bicycle" />
      <IconBase icon-name="ep:box" />
      <IconBase icon-name="ep:chat-dot-square" />
    </div>
    <div>
      <IconBase icon-name="fa6-solid:pager" />
      <IconBase icon-name="fa6-solid:paint-roller" />
      <IconBase icon-name="fa6-solid:paintbrush" />
      <IconBase icon-name="fa6-solid:palette" />
      <IconBase icon-name="fa6-solid:paperclip" />
      <IconBase icon-name="fa6-solid:pen-fancy" />
      <IconBase icon-name="fa6-solid:people-arrows-left-right" />
      <IconBase icon-name="fa6-solid:person-booth" />
      <IconBase icon-name="fa6-solid:person-skating" />
      <IconBase icon-name="fa6-solid:object-ungroup" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconBase from '../components/IconBase.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    IconBase
  },
})
</script>
