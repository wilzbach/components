import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Alert', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-5">Alerts</h3>

      <div class="mb-3"></div>
      <a-alert state="primary" icon="ni ni-like-2">
        <span slot="text"><strong>Primary!</strong> This is a primary alert—check it out!</span>
      </a-alert>

      <div class="mb-3"></div>
      <a-alert state="secondary" icon="ni ni-like-2">
        <span slot="text"><strong>Secondary!</strong> This is a secondary alert—check it out!</span>
      </a-alert>

      <div class="mb-3"></div>
      <a-alert state="success" icon="ni ni-like-2" dismissible>
        <span slot="text"><strong>Success!</strong> This is a success alert—check it out!</span>
      </a-alert>

      <div class="mb-3"></div>
      <a-alert state="info" icon="ni ni-bell-55" dismissible>
        <span slot="text"><strong>Info!</strong> This is an info alert—check it out!</span>
      </a-alert>

      <div class="mb-3"></div>
      <a-alert state="warning" icon="ni ni-bell-55" dismissible>
        <span slot="text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
      </a-alert>

      <div class="mb-3"></div>
      <a-alert state="danger" icon="ni ni-support-16" dismissible>
        <span slot="text"><strong>Danger!</strong> This is an error alert—check it out!</span>
      </a-alert>

      <div class="mb-3"></div>
      <a-alert state="dark" icon="ni ni-like-2" dismissible>
        <span slot="text"><strong>Dark!</strong> This is a dark alert—check it out!</span>
      </a-alert>

      <div class="mb-3"></div>
      <a-alert state="light" icon="ni ni-like-2" dismissible>
        <span slot="text"><strong>Light!</strong> This is a light alert—check it out!</span>
      </a-alert>
    </div>
    `
}))
