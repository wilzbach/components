import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Footer', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Footer</h3>

      <div>
        <a-footer />
      </div>

      <div class="bg--dark">
        <a-footer dark />
      </div>
    </div>
    `
}))
