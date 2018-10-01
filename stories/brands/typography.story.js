import { storiesOf } from '@storybook/vue'

storiesOf('Brands/', module).addWithJSX('Typography', () => ({
  template: `
    <div class="container">
      <h2 class="mt-lg mb-5">
        <span>Typography</span>
      </h2>
      <h3 class="h3 font-weight-bold">Headings</h3>
      <div class="row py-3 align-items-center">
        <div class="col-sm-3">
          <small class="text-uppercase text-muted font-weight-bold">Heading 1</small>
        </div>
        <div class="col-sm-9">
          <a-title size=1 class="mb-0">Asyncy Design System</a-title>
        </div>
      </div>
      <div class="row py-3 align-items-center">
        <div class="col-sm-3">
          <small class="text-uppercase text-muted font-weight-bold">Heading 2</small>
        </div>
        <div class="col-sm-9">
          <a-title size=2 class="mb-0">Asyncy Design System</a-title>
        </div>
      </div>
      <div class="row py-3 align-items-center">
        <div class="col-sm-3">
          <small class="text-uppercase text-muted font-weight-bold">Heading 3</small>
        </div>
        <div class="col-sm-9">
          <a-title size=3 class="mb-0">Asyncy Design System</a-title>
        </div>
      </div>
      <div class="row py-3 align-items-center">
        <div class="col-sm-3">
          <small class="text-uppercase text-muted font-weight-bold">Heading 4</small>
        </div>
        <div class="col-sm-9">
          <a-title size=4 class="mb-0">Asyncy Design System</a-title>
        </div>
      </div>
      <div class="row py-3 align-items-center">
        <div class="col-sm-3">
          <small class="text-uppercase text-muted font-weight-bold">Heading 5</small>
        </div>
        <div class="col-sm-9">
          <a-title size=5 class="mb-0">Asyncy Design System </a-title>
        </div>
      </div>
      <div class="row py-3 align-items-center">
        <div class="col-sm-3">
          <small class="text-uppercase text-muted font-weight-bold">Heading 6</small>
        </div>
        <div class="col-sm-9">
          <a-title size=6 class="mb-0">Asyncy Design System </a-title>
        </div>
      </div>
    </div>
    `
}))
