import { storiesOf } from '@storybook/vue'

storiesOf('Components/', module).addWithJSX('Logo', () => ({
  template: `
    <div class="container">
      <h3 class="h3 font-weight-bold mb-5">Logos</h3>
      <div class="row">
        <div class="col-12">
          <a-logo />
        </div>
        <div class="col-12">
          <a-logo variant="primary" />
        </div>
        <div class="col-12">
          <a-logo variant="pink" icon />
        </div>
        <div class="col-12">
          <a-logo icon />
        </div>
        <div class="col-12 bg--dark">
          <a-logo icon variant="light" />
        </div>
      </div>
    </div>
    `
}))
