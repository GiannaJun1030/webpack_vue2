<template>
  <div class="hello">hello</div>
</template>

<script>
export default {
  name: 'CHello',
  data() {
    return {};
  },
  mounted() {
    [1, 2, 3].forEach((item) => {
      return item;
    });
  },
  methods: {},
  render() {
    return <div class="title">dasdasdas</div>;
  },
};
</script>

<style lang="scss" scoped>
.hello {
  background-color: aqua;
  color: azure;
}
</style>
