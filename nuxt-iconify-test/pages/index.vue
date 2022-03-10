<template>
  <div style="font-size: 2rem;">
    <h1>iconify test nuxt(v2) - index.vue</h1>
    <p style="font-size: 1rem;">iconify APIから取得(https://api.iconify.designとの通信が発生)</p>
    <div>
      <Icon icon="ep:circle-close" />
      <Icon icon="ep:aim" />
      <Icon icon="ep:alarm-clock" />
      <Icon icon="ep:apple" />
      <Icon icon="ep:arrow-down" />
      <Icon icon="ep:avatar" />
      <Icon icon="ep:baseball" />
      <Icon icon="ep:bicycle" />
      <Icon icon="ep:box" />
      <Icon icon="ep:chat-dot-square" />
    </div>
    <div>
      <Icon icon="fa6-solid:pager" />
      <Icon icon="fa6-solid:paint-roller" />
      <Icon icon="fa6-solid:paintbrush" />
      <Icon icon="fa6-solid:palette" />
      <Icon icon="fa6-solid:paperclip" />
      <Icon icon="fa6-solid:pen-fancy" />
      <Icon icon="fa6-solid:people-arrows-left-right" />
      <Icon icon="fa6-solid:person-booth" />
      <Icon icon="fa6-solid:person-skating" />
      <Icon icon="fa6-solid:object-ungroup" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Icon from '../components/Icon.vue'
import { Icon, iconExists, listIcons } from '@iconify/vue2';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Icon
  },
  mounted() {
    console.log('index.vue', 'mounted()', 'iconExists:', `ep:circle-close Exists？` , iconExists('ep:circle-close'))
    console.log(listIcons())
  },
})
</script>
