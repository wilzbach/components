import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Button', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Buttons</h3>
      <div>

        <div class="mb-3 mt-5">Content</div>
        <a-button state="primary">Button</a-button>
        <a-button state="primary">
          <span slot="icon" class="ni ni-bag-17"></span>
          Button
        </a-button>
        <a-button state="primary">
          <span slot="icon" class="ni ni-bag-17"></span>
        </a-button>

        <div class="mb-3 mt-5">Sizes</div>
        <a-button state="primary" size="s">Small</a-button>
        <a-button state="primary">Regular</a-button>
        <a-button state="primary" size="l">Large Button</a-button>

        <div class="mb-3 mt-5">States</div>
        <a-button state="primary">Primary</a-button>
        <a-button state="info">Info</a-button>
        <a-button state="success">Success</a-button>
        <a-button state="warning">Warning</a-button>
        <a-button state="danger">Danger</a-button>
        <a-button state="light">Light</a-button>
        <a-button state="dark">Dark</a-button>
        <a-button state="neutral">Neutral</a-button>

        <div class="mb-3 mt-5">Outline</div>
        <a-button outline state="primary">Outline Primary</a-button>
        <a-button outline state="info">Outline Info</a-button>
        <a-button outline state="success">Outline Success</a-button>
        <a-button outline state="warning">Outline Warning</a-button>
        <a-button outline state="danger">Outline Danger</a-button>
        <a-button outline state="dark">Outline Dark</a-button>
        <a-button outline state="neutral">Outline Neutral</a-button>

        <div class="mb-3 mt-5">Properties</div>
        <a-button state="primary" outline no-animation>No animation</a-button>
        <a-button state="primary" no-shadow>No shadow</a-button>
      </div>
    </div>
    `
}))
