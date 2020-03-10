<template>
  <button class="btn" :class="dymaicClass">
    <Icon v-if="loading || icon" class="icon" :class="IconClass" />
    <slot />
  </button>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "Button",
  props: {
    size: {
      validator(value) {
        return ["small", "default", "large"].includes(value);
      },
      default: "default"
    },
    type: {
      validator(value) {
        return [
          "primary",
          "success",
          "warning",
          "danger",
          "info",
          "default",
          "text"
        ].includes(value);
      },
      default: "default"
    },
    round: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  components: {
    Icon
  },
  computed: {
    dymaicClass() {
      return [
        `is-size-${this.size}`,
        `is-type-${this.type}`,
        {
          "is-round": this.round,
          "is-disable": this.disabled
        }
      ];
    },
    IconClass() {
      return this.loading ? "fa-spinner fa-spin" : `fa-${this.icon}`;
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  outline: none;
  background-color: unset;
  border: none;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  transition: color 0.3s, border-color 0.3s, background-color 0.3s;
  color: #606266;
  .icon {
    margin-right: 0.3em;
  }
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  &.is-size-small {
    padding: 0.4em 0.8em;
    &.is-round {
      border-radius: 15px;
    }
  }
  &.is-size-default {
    padding: 0.56em 1em;
  }
  &.is-size-large {
    padding: 0.76em 1.2em;
    &.is-round {
      border-radius: 20px;
    }
  }
  &.is-type-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
    }
    &:active {
      background: #3a8ee6;
      border-color: #3a8ee6;
    }
  }
  &.is-type-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover {
      background: #85ce61;
      border-color: #85ce61;
    }
    &:active {
      background: #5daf34;
      border-color: #5daf34;
    }
  }
  &.is-type-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover {
      background: #ebb563;
      border-color: #ebb563;
    }
    &:active {
      background: #cf9236;
      border-color: #cf9236;
    }
  }
  &.is-type-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover {
      background: #f78989;
      border-color: #f78989;
    }
    &:active {
      background: #dd6161;
      border-color: #dd6161;
    }
  }
  &.is-type-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover {
      background: #a6a9ad;
      border-color: #a6a9ad;
    }
    &:active {
      background: #82848a;
      border-color: #82848a;
    }
  }
  &.is-round {
    border-radius: 17px;
  }
}
</style>
