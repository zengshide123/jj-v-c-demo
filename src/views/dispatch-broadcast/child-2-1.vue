<template>
  <div>
    <h3>
      <span>This is child2</span>
      <section>
        {{ count }}
      </section>
    </h3>
  </div>
</template>

<script>
import dispathBroadcast from "../../mixins/dispath-broadcast";
export default {
  name: "Child-2-1",
  data() {
    return {
      count: 0
    };
  },
  mixins: [dispathBroadcast],
  methods: {
    handleIncrement() {
      this.count++;
    }
  },
  mounted() {
    this.$on("increment", this.handleIncrement);
  }
};
</script>

<style lang="less" scoped></style>
