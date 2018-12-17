<template>
  <div>
    <div class="steps-wrapper">
      <div
        class="columns is-mobile"
        ref="stepsContainer">
        <div
          class="column if-full"
          v-for="(step, idx) in steps"
          ref="steps"
          :key="`nav-${_uid}-item-step-${idx}`"
          @click.prevent="goToStep(step)"
          :class="{ locked: lockHeaders, active: step.active, previous: idx < activeStepIndex }">
          <span v-if="step.title">{{ idx + 1 }}. <span v-text="step.title"></span></span>
          <span v-else-if="step.slot"><step-header :slot="step.slot" /></span>
          <span v-else>{{ idx + 1 }}.</span>
        </div>
      </div>
    </div>
    <div class="steps-content">
      <slot :is-next-step="isNextStep" :is-prev-step="isPrevStep" :next="nextStep" :prev="prevStep" />
    </div>
  </div>
</template>

<script>
import StepHeader from './StepHeader'

export default {
  name: 'aSteps',
  components: { StepHeader },
  props: {
    lockHeaders: {
      type: Boolean,
      default: false,
      description: 'lock the links on the headers'
    }
  },
  data: () => ({
    steps: [],
    stepsSlots: [],
    activeStepIndex: 0
  }),
  provide () {
    return {
      addStep: this.addStep,
      removeStep: this.removeStep
    }
  },
  computed: {
    isPrevStep () { return this.activeStepIndex > 0 },
    isNextStep () { return this.activeStepIndex + 1 < this.steps.length }
  },
  methods: {
    addStep (step, slot) {
      this.steps.push(step)
      this.steps[this.steps.length - 1].slot = slot
    },
    removeStep (step) {
      const steps = this.steps
      const index = steps.indexOf(step)
      if (index > -1) {
        steps.splice(index, 1)
      }
    },
    nextStep () {
      if (this.isNextStep) {
        this.deactivateSteps()
        this.activeStepIndex += 1
        this.steps[this.activeStepIndex].active = true
        return true
      }
      return false
    },
    prevStep () {
      if (this.isPrevStep) {
        this.deactivateSteps()
        this.activeStepIndex -= 1
        this.steps[this.activeStepIndex].active = true
        return true
      }
      return false
    },
    goToStep (step) {
      if (step && !this.lockHeaders) {
        this.deactivateSteps()
        step.active = true
        this.activeStepIndex = this.steps.indexOf(step)
      }
    },
    goToStepIndex (id) {
      if (id && id < this.steps.length) {
        this.deactivateSteps()
        this.steps[id].active = true
        this.activeStepIndex = id
      }
    },
    deactivateSteps () {
      this.steps.forEach(step => (step.active = false))
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      if (this.steps.length > 0) {
        this.steps[0].active = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
// @import "_nav.scss";

.steps-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;

  .columns {
    @include breakpoint((max, xxs)) { flex-direction: column; }
    margin-bottom: 1rem;
    padding: 0;

    .column {
      display: block;
      width: 100%;
      font-size: 1rem;
      color: color(dark);
      margin: 0 1rem;
      border-top: 2px solid rgba(state(primary), 0.4);
      cursor: default;
      &:not(.locked) {
        cursor: pointer;
      }
      &.previous, &.active { border-color: state(primary); }
      span {
        padding: .5rem 1rem;
        color: color(dark);
        text-decoration: none;
        align-items: center;
      }
      &.active span { color: state(primary); font-weight: bold }
      &.previous span { color: state(primary) }
    }
  }
}

.steps-content {
  display: flex;
  flex: 1;
  width: 100%;
}
</style>
