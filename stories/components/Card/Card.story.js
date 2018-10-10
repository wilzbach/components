import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Card', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Card</h3>

      <div class="w-50">
        <h3>Normal card</h3>
        <a-card>
          <p>content</p>
        </a-card>
        <h3>With shadow</h3>
        <a-card shadow>
          <p>content</p>
        </a-card>
        <h3>With background</h3>
        <a-card shadow state="primary">
          <p>content</p>
        </a-card>
        <h3>With background gradient</h3>
        <a-card shadow state="warning" gradient>
          <p>content</p>
        </a-card>
        <h3>With slots</h3>
        <a-card>
          <div slot="header">header slot</div>
          <p>content</p>
          <div slot="footer">footer slot</div>
        </a-card>
        <h3>light card</h3>
        <a-card light>
          <p>content without border</p>
        </a-card>
        </div>
    </div>
    `
}))
