import Vue from "vue";
import { version } from "../../../package.json";
const $bus = new Vue();
const install = function(Vue) {
  Vue.prototype.$bus = $bus;
  Vue.mixin({
    methods: {
      $bus_autoOff: function(...args) {
        const [eventName, eventHandler] = args;
        const hocEventHandler = () => {
          if (this._isDestroyed) {
            this.$bus._events[eventName] = this.$bus._events[eventName].filter(
              item => item !== hocEventHandler
            );
            if (!this.$bus._events[eventName].length) {
              delete this.$bus._events[eventName];
            }
          } else {
            eventHandler && eventHandler();
          }
        };
        this.$bus.$on(eventName, hocEventHandler);
      }
    }
  });
};
export default {
  version: `bus-${version}`,
  install
};
