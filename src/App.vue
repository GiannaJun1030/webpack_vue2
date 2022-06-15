<template>
  <div>
    测试
    <router-view> </router-view>
  </div>
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
  mounted() {
    const a = new Promise((resolve) => {
      setTimeout(() => {
        resolve(11);
      }, 1000);
    });
    a.then((res) => {
      console.log(res, 123);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
