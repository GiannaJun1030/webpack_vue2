<template>
  <router-view />
</template>

<script>
import arrow from './assets/arrow.png';
import arrow2 from './assets/arrow.svg';

export default {
  name: 'WebpackVue2App',
  components: {},
  data() {
    return {
      img: arrow,
      img2: arrow2,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
