import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Button', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-4">Buttons</h3>
      <div>

        <div class="mb-3 mt-5">
          <p>Icons</p>
          <a-button state="primary">Button</a-button>
          <a-button state="primary">
            <a-logo slot="icon" icon variant="light" />
            Button
          </a-button>
          <a-button state="primary" size="l" iconRight>
            <a-logo slot="icon" icon variant="light" />
            Button
          </a-button>
          <a-button state="primary">
            <a-logo slot="icon" icon variant="light" />
          </a-button>
          <a-button state="primary" iconRight>
            <i slot="icon" class="ni ni-bag-17"></i>
            Button
          </a-button>
          <a-button state="primary">
            <i slot="icon" class="ni ni-bag-17"></i>
          </a-button>
        </div>

        <div class="mb-3 mt-5">
          <p>Sizes</p>
          <a-button state="primary" size="s">Small</a-button>
          <a-button state="primary">Regular</a-button>
          <a-button state="primary" size="l">Large Button</a-button>
        </div>

        <div class="mb-3 mt-5">
          <p>States</p>
          <a-button state="primary">Primary</a-button>
          <a-button state="info">Info</a-button>
          <a-button state="success">Success</a-button>
          <a-button state="warning">Warning</a-button>
          <a-button state="danger">Danger</a-button>
          <a-button state="light">Light</a-button>
          <a-button state="dark">Dark</a-button>
          <a-button state="neutral">Neutral</a-button>
        </div>

        <div class="mb-3 mt-5">
          <p>Outline</p>
          <a-button outline state="primary">Outline Primary</a-button>
          <a-button outline state="info">Outline Info</a-button>
          <a-button outline state="success">Outline Success</a-button>
          <a-button outline state="warning">Outline Warning</a-button>
          <a-button outline state="danger">Outline Danger</a-button>
          <a-button outline state="dark">Outline Dark</a-button>
          <a-button outline state="neutral">Outline Neutral</a-button>
        </div>

        <div class="mb-3 mt-5">
          <p>Properties</p>
          <a-button state="primary" outline no-animation>No animation</a-button>
          <a-button state="primary" no-shadow>No shadow</a-button>
        </div>
      </div>
    </div>
    `
}))
