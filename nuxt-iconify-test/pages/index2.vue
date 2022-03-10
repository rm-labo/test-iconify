<template>
  <div style="font-size: 2rem;">
    <h1>iconify test nuxt(v2) - index2.vue</h1>
    <p style="font-size: 1rem;">
      個別importを addIcon() する方式 <br>
      <a href="https://docs.iconify.design/icon-components/vue2/offline.html">https://docs.iconify.design/icon-components/vue2/offline.html</a>
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
import { iconExists, listIcons } from '@iconify/vue2'
import { Icon, addIcon } from '@iconify/vue2/dist/offline'

import circleClose from '@iconify/icons-ep/circle-close'
import aim from '@iconify/icons-ep/aim'
import alarmClock from '@iconify/icons-ep/alarm-clock'
import apple from '@iconify/icons-ep/apple'
import arrowDown from '@iconify/icons-ep/arrow-down'
import avatar from '@iconify/icons-ep/avatar'
import baseball from '@iconify/icons-ep/baseball'
import bicycle from '@iconify/icons-ep/bicycle'
import box from '@iconify/icons-ep/box'
import chatDotSquare from '@iconify/icons-ep/chat-dot-square'

import pager from '@iconify/icons-fa6-solid/pager';
import paintRoller from '@iconify/icons-fa6-solid/paint-roller';
import paintbrush from '@iconify/icons-fa6-solid/paintbrush';
import palette from '@iconify/icons-fa6-solid/palette';
import paperclip from '@iconify/icons-fa6-solid/paperclip';
import penFancy from '@iconify/icons-fa6-solid/pen-fancy';
import peopleArrowsLeftRight from '@iconify/icons-fa6-solid/people-arrows-left-right';
import personBooth from '@iconify/icons-fa6-solid/person-booth';
import personSkating from '@iconify/icons-fa6-solid/person-skating';
import objectUngroup from '@iconify/icons-fa6-solid/object-ungroup';

import activityBold from '@iconify/icons-ph/activity-bold';
import addressBookBold from '@iconify/icons-ph/address-book-bold';
import airplaneIcon from '@iconify/icons-ph/airplane';

addIcon('ep:circle-close', circleClose)
addIcon('ep:aim', aim)
addIcon('ep:alarm-clock', alarmClock)
addIcon('ep:apple', apple)
addIcon('ep:arrow-down', arrowDown)
addIcon('ep:avatar', avatar)
addIcon('ep:baseball', baseball)
addIcon('ep:bicycle', bicycle)
addIcon('ep:box', box)
addIcon('ep:chat-dot-square', chatDotSquare)

addIcon('fa6-solid:pager', pager)
addIcon('fa6-solid:paint-roller', paintRoller)
addIcon('fa6-solid:paintbrush', paintbrush)
addIcon('fa6-solid:palette', palette)
addIcon('fa6-solid:paperclip', paperclip)
addIcon('fa6-solid:pen-fancy', penFancy)
addIcon('fa6-solid:people-arrows-left-right', peopleArrowsLeftRight)
addIcon('fa6-solid:person-booth', personBooth)
addIcon('fa6-solid:person-skating', personSkating)
addIcon('fa6-solid:object-ungroup', objectUngroup)

addIcon('ph:activity-bold', activityBold)
addIcon('ph:address-book-bold', addressBookBold)
addIcon('ph:airplane', airplaneIcon)

export default Vue.extend({
  name: 'IndexPage2',
  components: {
    Icon,
  },
  mounted() {
    console.log('index2.vue', 'mounted()', 'iconExists:', `ep:circle-close Exists？` , iconExists('ep:circle-close'))
    console.log(listIcons())
  },
})
</script>
