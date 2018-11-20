import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Badge', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-5">Labels</h3>

      <a-badge state="primary">Primary</a-badge>
      <a-badge state="success">Success</a-badge>
      <a-badge state="danger">Danger</a-badge>
      <a-badge state="warning">Warning</a-badge>
      <a-badge state="info">Info</a-badge>

      <h3 class="h3 font-weight-bold mb-5">Labels outline</h3>

      <a-badge state="primary" outline>Primary</a-badge>
      <a-badge state="success" outline>Success</a-badge>
      <a-badge state="danger" outline>Danger</a-badge>
      <a-badge state="warning" outline>Warning</a-badge>
      <a-badge state="info" outline>Info</a-badge>
    </div>
    `
}))
