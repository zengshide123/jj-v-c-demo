<template>
  <div>
    <h3>
      <span>This is page wrapper</span>
      <div>
        {{ text }}
      </div>
      <section>
        <button @click="handleIncrement">➕ 1</button>
      </section>
    </h3>
    <Ancestors />
  </div>
</template>

<script>
import Ancestors from "./ancestors";
import dispathBroadcast from "../../mixins/dispath-broadcast";
export default {
  name: "Index",
  data() {
    return {
      text: "z"
    };
  },
  components: {
    Ancestors
  },
  mixins: [dispathBroadcast],
  methods: {
    handleChangeText(text) {
      this.text = text;
    },
    handleIncrement() {
      this.broadcast("Child-2-1", "increment");
    }
  },
  mounted() {
    this.$on("changeText", this.handleChangeText);
  }
};
</script>

<style lang="less" scoped></style>
