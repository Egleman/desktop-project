<template>
  <div class="battery-icon">
    <div class="quad-status-contents">
      <div
        class="battery-status"
        :class="classes"
        :style="{ width: batteryWidth + '%' }"
      />
    </div>
  </div>
</template>
<script>
const NO_BATTERY_VOLTAGE_MAXIMUM = 1.8; // Maybe is better to add a call to MSP_BATTERY_STATE but is not available for all versions

export default {
  props: {
    voltage: {
      type: Number,
      default: 0,
    },
    vbatmincellvoltage: {
      type: Number,
      default: 1,
    },
    vbatmaxcellvoltage: {
      type: Number,
      default: 1,
    },
    vbatwarningcellvoltage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    nbCells() {
      let nbCells = Math.floor(this.voltage / this.vbatmaxcellvoltage) + 1;
      if (this.voltage === 0) {
        nbCells = 1;
      }
      return nbCells;
    },
    min() {
      return this.vbatmincellvoltage * this.nbCells;
    },
    max() {
      return this.vbatmaxcellvoltage * this.nbCells;
    },
    warn() {
      return this.vbatwarningcellvoltage * this.nbCells;
    },
    isEmpty() {
      return (
        this.voltage < this.min && this.voltage > NO_BATTERY_VOLTAGE_MAXIMUM
      );
    },
    classes() {
      if (this.batteryState) {
        return {
          "state-ok": this.batteryState === 0,
          "state-warning": this.batteryState === 1,
          "state-empty": this.batteryState === 2,
          // TODO: BATTERY_NOT_PRESENT
          // TODO: BATTERY_INIT
        };
      }
      const isWarning = this.voltage < this.warn;
      return {
        "state-empty": this.isEmpty,
        "state-warning": isWarning,
        "state-ok": !this.isEmpty && !isWarning,
      };
    },
    batteryWidth() {
      return this.isEmpty
        ? 100
        : ((this.voltage - this.min) / (this.max - this.min)) * 100;
    },
  },
};
</script>

<style>
.quad-status-contents {
  display: inline-block;
  margin-top: 10px;
  margin-left: 23px;
  height: 10px;
  width: 31px;
}

.quad-status-contents progress::-webkit-progress-bar {
  height: 12px;
  background-color: #eee;
}

.quad-status-contents progress::-webkit-progress-value {
  background-color: #bcf;
}

.battery-icon {
  background-image: url(../../images/icons/cf_icon_bat_grey.svg);
  background-size: 80% auto;
  background-position: center;
  display: inline-block;
  height: 41px;
  width: 90px;
  transition: none;
  margin-top: 12px;
  margin-left: -4px;
  background-repeat: no-repeat;
}

.battery-status {
  height: 21px;
}

@keyframes error-blinker {
  0% {
    background-color: transparent;
  }
  50% {
    background-color: var(--error);
  }
}

.battery-status.state-ok {
  background-color: #59aa29;
}
.battery-status.state-warning {
  background-color: var(--error);
}

.battery-status.state-empty {
  animation: error-blinker 1s linear infinite;
}
</style>
