import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Link', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Links</h3>
      <div>

        <div class="mb-3 mt-5">Links</div>
        <a-link href="#" state="default">Default</a-link>
        <a-link href="#" state="primary">Primary</a-link>
        <a-link href="#" state="info">Info</a-link>
        <a-link href="#" state="success">Success</a-link>
        <a-link href="#" state="warning">Warning</a-link>
        <a-link href="#" state="danger">Danger</a-link>

      </div>
    </div>
    `
}))
