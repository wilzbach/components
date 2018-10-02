import { storiesOf } from '@storybook/vue'

storiesOf('Brands/', module).addWithJSX('Colors', () => ({
  template: `
    <div class="container">
      <a-card class="mb-3">
        <h3 class="h4 font-weight-bold mb-3">Colors</h3>
        <p class="text--primary">.text--primary</p>
        <p class="text--secondary">.text--secondary</p>
        <p class="text--success">.text--success</p>
        <p class="text--danger">.text--danger</p>
        <p class="text--warning">.text--warning</p>
        <p class="text--info">.text--info</p>
        <p class="text--light bg--dark">.text--light</p>
        <p class="text--dark">.text--dark (base)</p>
      </a-card>
      <a-card class="mb-3">
        <h3 class="h4 font-weight-bold mb-3">Link Colors</h3>
        <p><a href="#" class="text--primary">Primary link</a></p>
        <p><a href="#" class="text--secondary">Secondary link</a></p>
        <p><a href="#" class="text--success">Success link</a></p>
        <p><a href="#" class="text--danger">Danger link</a></p>
        <p><a href="#" class="text--warning">Warning link</a></p>
        <p><a href="#" class="text--info">Info link</a></p>
        <p><a href="#" class="text--dark">Dark link</a></p>
        <p><a href="#" class="text--light">Light link</a></p>
      </a-card>
      <a-card class="mb-3">
        <h3 class="h4 font-weight-bold mb-3">Background color</h3>
        <div class="p-3 mb-2 bg--primary text--light">.bg--primary .text--light</div>
        <div class="p-3 mb-2 bg--secondary text--light">.bg--secondary .text--light</div>
        <div class="p-3 mb-2 bg--success text--dark">.bg--success .text--dark</div>
        <div class="p-3 mb-2 bg--danger text--light">.bg--danger .text--light</div>
        <div class="p-3 mb-2 bg--warning text--light">.bg--warning .text--light</div>
        <div class="p-3 mb-2 bg--info text--dark">.bg--info .text--dark</div>
        <div class="p-3 mb-2 bg--light text--dark">.bg--light .text--dark</div>
        <div class="p-3 mb-2 bg--dark text--light">.bg--dark .text--light</div>
      </a-card>
      <a-card class="mb-3">
        <h3 class="h4 font-weight-bold mb-3">Background gradient</h3>
        <div class="p-3 mb-2 bg-gradient--primary text--light">.bg-gradient--primary .text--light</div>
        <div class="p-3 mb-2 bg-gradient--secondary text--light">.bg-gradient--secondary .text--light</div>
        <div class="p-3 mb-2 bg-gradient--success text--dark">.bg-gradient--success .text--dark</div>
        <div class="p-3 mb-2 bg-gradient--danger text--light">.bg-gradient--danger .text--light</div>
        <div class="p-3 mb-2 bg-gradient--warning text--light">.bg-gradient--warning .text--light</div>
        <div class="p-3 mb-2 bg-gradient--info text--dark">.bg-gradient--info .text--dark</div>
        <div class="p-3 mb-2 bg-gradient--light text--dark">.bg-gradient--light .text--dark</div>
        <div class="p-3 mb-2 bg-gradient--dark text--light">.bg-gradient--dark .text--light</div>
      </a-card>
    </div>
    </div>
    `
}))
