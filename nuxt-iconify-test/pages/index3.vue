<template>
  <div style="font-size: 2rem;">
    <h1>iconify test nuxt(v2) - index3.vue</h1>
    <p style="font-size: 1rem;">
      個別importを addCollection() する方式 <br>
      <a href="https://docs.iconify.design/icon-components/vue2/add-collection.html">https://docs.iconify.design/icon-components/vue2/add-collection.html</a>
    </p>
    <div>
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
      <div>
        <p style="font-size: 1rem;">以下index.vueのみロード</p>
        <Icon icon="ic:baseline-add-to-photos" />
        <Icon icon="ic:baseline-addchart" />
        <Icon icon="ic:baseline-agriculture" />
      </div>
      <div>
        <p style="font-size: 1rem;">以下index2.vueでのみロード</p>
        <Icon icon="ph:activity-bold" />
        <Icon icon="ph:address-book-bold" />
        <Icon icon="ph:airplane" />
      </div>
      <div>
        <p style="font-size: 1rem;">以下index3.vueでのみロード</p>
        <Icon icon="ri:account-box-line" />
        <Icon icon="ri:admin-line" />
        <Icon icon="ri:alert-line" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import IconBase from '../components/IconBase.vue'
// import { Icon, addCollection } from '@iconify/vue2'
import { iconExists, listIcons } from '@iconify/vue2'
import { Icon, addCollection } from '@iconify/vue2/dist/offline';
import { getIcons } from '@iconify/utils/lib/icon-set/get-icons';
import { icons as epIconSet } from '@iconify-json/ep';
import { icons as fa6SolidIconSet } from '@iconify-json/fa6-solid';
import { icons as riIconSet } from '@iconify-json/ri';
import type { IconifyJSON } from '@iconify/types';

const iconNames = {
  ep: [
    'circle-close',
    'aim',
    'alarm-clock',
    'apple',
    'arrow-down',
    'avatar',
    'baseball',
    'bicycle',
    'box',
    'chat-dot-square',
  ],
  fa6Solid: [
    'pager',
    'paint-roller',
    'paintbrush',
    'palette',
    'paperclip',
    'pen-fancy',
    'people-arrows-left-right',
    'person-booth',
    'person-skating',
    'object-ungroup',
  ],
  ri: [
    'account-box-line',
    'admin-line',
    'alert-line',
  ],
}

addCollection(getIcons(epIconSet, iconNames.ep) as IconifyJSON)
addCollection(getIcons(fa6SolidIconSet, iconNames.fa6Solid) as IconifyJSON)
addCollection(getIcons(riIconSet, iconNames.ri) as IconifyJSON)


export default Vue.extend({
  name: 'IndexPage3',
  components: {
    Icon,
  },
  mounted() {
    console.log('index3.vue', 'mounted()', 'iconExists:', `ep:circle-close Exists？` , iconExists('ep:circle-close'))
    console.log(listIcons())
  },
})
</script>
