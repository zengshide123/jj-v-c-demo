<template>
  <div>
    <h3>
      <span>This is child1</span>
      <section>
        <button @click="handleClick">change text</button>
      </section>
    </h3>
  </div>
</template>

<script>
import dispathBroadcast from "../../mixins/dispath-broadcast";
export default {
  name: "Child-1-1",
  mixins: [dispathBroadcast],
  methods: {
    handleClick() {
      this.dispatch("Index", "changeText", "hello, world!");
    }
  }
};
</script>

<style lang="less" scoped></style>
