import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Link', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Buttons</h3>
      <div>

        <div class="mb-3 mt-5">Links</div>
        <a-link href="#" type="default">Default</a-link>
        <a-link href="#" type="primary">Primary</a-link>
        <a-link href="#" type="info">Info</a-link>
        <a-link href="#" type="success">Success</a-link>
        <a-link href="#" type="warning">Warning</a-link>
        <a-link href="#" type="danger">Danger</a-link>

      </div>
    </div>
    `
}))
