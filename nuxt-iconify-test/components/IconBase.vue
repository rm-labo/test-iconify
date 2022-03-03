<template>
  <Icon class="IconBase" :icon="iconName" />
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  name: 'IconBase',
  components: {
    Icon
  },
  props: {
    iconName: {
      type: String,
      default: '',
      required: true,
    }
  }
}
</script>
