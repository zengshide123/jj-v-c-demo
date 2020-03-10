<template>
  <div class="tab-wrap">
    <div
      class="tab-title"
      v-for="item in tabList"
      :key="item.id"
      :class="[
        {
          'is-last': item.id === tabList.length - 1,
          'is-active': item.id === selected.id
        }
      ]"
      @click="handleTabSelect(item)"
    >
      {{ item.title }}
    </div>
    <div
      class="tab-panel"
      v-for="item in tabList"
      :key="item.title"
      v-show="item.id === selected.id"
    >
      <component :is="item.component" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Tab",
  data() {
    return {
      selected: {},
      tabList: []
    };
  },
  props: {
    source: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    source() {
      this.tackleSource();
    }
  },
  methods: {
    handleTabSelect(selected) {
      this.selected = selected;
    },
    tackleSource() {
      this.tabList = this.source.map((item, idx) => ({
        ...item,
        id: idx
      }));
    }
  },
  mounted() {
    this.tackleSource();
    this.selected = this.tabList[0] || {};
  }
};
</script>
<style lang="less" scoped>
.tab-wrap {
  .tab-title {
    display: inline-block;
    padding: 5px 10px;
    background-color: #ddd;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0));
    &:first-child {
      border-radius: 5px 0 0;
    }
    &.is-last {
      border-radius: 0 5px 0 0;
    }
    &:hover,
    &.is-active {
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.15));
    }
  }
  .tab-panel {
    padding: 10px;
    border: 1px solid #eee;
  }
}
</style>
