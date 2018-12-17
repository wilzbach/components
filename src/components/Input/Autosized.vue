<script>
import autosize from 'autosize'

export default {
  name: 'Autosized',
  functionnal: true,
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    listeners: function () {
      return {
        ...this.$listeners,
        input: this.updateValue,
        change: this.onChange,
        focus: this.onFocus,
        blur: this.onBlur
      }
    }
  },
  template: `<textarea v-on="listeners">{{ value }}</textarea>`,
  mounted: function () {
    autosize(this.$el)
  },
  methods: {
    updateValue: function (e) {
      let value = e.target.value
      this.$emit('input', value)
    },
    updateValueSelect: function (value) {
      this.$emit('input', value)
    },
    onFocus: function (value) {
      this.focused = true
      this.$emit('focus', value)
    },
    onBlur: function (value) {
      this.focused = false
      this.$emit('blur', value)
    },
    onChange: function (value) {
      this.$emit('change', value)
    }
  }
}
</script>
