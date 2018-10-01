<template>
  <div class="container">
    <h3 class="h3 font-weight-bold mb-4">Buttons</h3>
    <div>

      <preview>
        <a-button state="primary">Button</a-button>
      </preview>
      <preview>
        <a-button state="primary">
          <span slot="icon" class="ni ni-bag-17"></span>
          Button
        </a-button>
      </preview>
      <preview>
        <a-button state="primary">
          <span slot="icon" class="ni ni-bag-17"></span>
        </a-button>
      </preview>

      <div class="mb-3 mt-5">Sizes</div>
      <preview>
        <a-button state="primary" size="s">Small</a-button>
      </preview>
      <preview>
        <a-button state="primary">Regular</a-button>
      </preview>
      <preview>
        <a-button state="primary" size="l">Large Button</a-button>
      </preview>

      <div class="mb-3 mt-5">States</div>
      <preview>
        <a-button state="primary">Primary</a-button>
      </preview>
      <preview>
        <a-button state="info">Info</a-button>
      </preview>
      <preview>
        <a-button state="success">Success</a-button>
      </preview>
      <preview>
        <a-button state="warning">Warning</a-button>
      </preview>
      <preview>
        <a-button state="danger">Danger</a-button>
      </preview>
      <preview>
        <a-button state="neutral">Neutral</a-button>
      </preview>

      <div class="mb-3 mt-5">Outline</div>
      <preview>
        <a-button outline state="primary">Outline Primary</a-button>
      </preview>
      <preview>
        <a-button outline state="info">Outline Info</a-button>
      </preview>
      <preview>
        <a-button outline state="success">Outline Success</a-button>
      </preview>
      <preview>
        <a-button outline state="warning">Outline Warning</a-button>
      </preview>
      <preview>
        <a-button outline state="danger">Outline Danger</a-button>
      </preview>
      <preview>
        <a-button outline state="neutral">Outline Neutral</a-button>
      </preview>

    </div>
  </div>
</template>
