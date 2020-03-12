<template>
  <div>
    <p>parent: {{ count }}</p>
    <p>
      <SubDemo2 />
    </p>
  </div>
</template>

<script>
import SubDemo2 from "./subDemo2";
export default {
  name: "Demo2",
  data() {
    return {
      count: 0
    };
  },
  provide() {
    return {
      par: this
    };
  },
  components: {
    SubDemo2
  },
  mounted() {
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.count++;
    }, 1500);
  }
};
</script>

<style lang="less" scoped></style>
