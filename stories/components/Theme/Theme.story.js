import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Theme', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Planets</h3>

      <div class="w-50">
        <a-planet />
      </div>

      <h3 class="h3 font-weight-bold mb-4">Comets</h3>

      <div class="w-50">
        <a-comet />
      </div>
    </div>
    `
}))
