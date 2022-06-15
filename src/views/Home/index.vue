<script>
export default {
  name: 'CHome',
  data() {
    return {};
  },
  methods: {
    clickEvent() {
      console.log('我是个屁');
    },
  },
  render() {
    return (
      <div class="title" onClick={() => this.clickEvent()}>
        我是人才么 我不是我是个屁股
      </div>
    );
  },
};
</script>

<style lang="scss" scoped></style>
